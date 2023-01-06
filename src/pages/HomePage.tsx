import {useLazySearchUserReposQuery, useSearchUsersQuery} from "../store/github/github.api";
import {FC, useEffect, useState} from "react";
import {RepoCard} from "../components/RepoCard";
import {useDebounce} from "../hooks/debounce";

export const HomePage: FC = () => {
    const [search, setSearch] = useState('');
    const debounced = useDebounce(search, 1000);
    const [dropDown, setDropDown] = useState(false); // dropdown state
    const [fetchRepos,
        {isLoading: areReposLoad, data: reposData}
    ] = useLazySearchUserReposQuery()

    const {data, isError, isLoading} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    });
    const handlerClick = (user: string) => {
        fetchRepos(user)
        setDropDown(false)
    }
    const handlerOnFocus = () => {
        setDropDown(true)
    }
    useEffect(() => {
        setDropDown(debounced.length >= 3 && data?.length! > 0); // dropdown state
    }, [debounced, data])

    return (
        <>
            <div className='container flex justify-around  gap-4 py-[50px]'>
                {isError && <p className='text-red-500 text-center font-bold px-2 py-4'> Something went wrong..</p>}
                <div className='relative flex-1 flex  flex-col items-center'>
                    <h5 className='font-bold text-center '> Search input</h5>
                    <input
                        onClick={() => handlerOnFocus()}
                        className='rounded border relative h-[42px] w-[400px] py-2 px-2'
                        type="text"
                        placeholder='Search for GitHub users...'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {
                        dropDown && <ul
                            className='flex flex-col overflow-y-scroll max-h-[300px] w-[400px] shadow-md'>
                            {isLoading && <p className='text-center px-4  py-4'> Loading </p>}
                            {data?.map(item => {
                                return (<li
                                    onClick={() => handlerClick(item.login)}
                                    className='shadow-md px-2 py-2 hover:bg-gray-300 hover:text-white transition-colors cursor-pointer'
                                    key={item.id}>
                                    {item.login}
                                </li>)
                            })}
                        </ul>
                    }
                    {areReposLoad && <p className='absolute bottom-[50px] text-orange-500'> Repos are loading... </p>}
                </div>
                <div className='flex-1 flex  flex-col items-center '>
                    <h5 className='font-bold  '> User repos info</h5>
                    <div className='w-full'>
                        {reposData?.map(item => <RepoCard key={item.id} repo={item}/>)}

                    </div>
                </div>
            </div>
        </>)
}