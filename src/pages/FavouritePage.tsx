import {useAppSelector} from "../hooks/redux.selector";
import {Link} from 'react-router-dom'
import {FavouriteItemCard} from "../components/FavouriteItemCard";

export const FavouritePage = () => {
    const favouritesRepos = useAppSelector(state => state.github.favourites)

    return (
        <div className='container flex justify-center items-center  w-full flex-col py-5'>
            <h3 className='font-bold text-2xl'>FavouritePage</h3>
            {favouritesRepos.length == 0
                ? <p className='font-thin text-xl'>
                    <span>There are no favorites repos 😔 </span>
                    <span> but you can  <Link className='font-normal hover:text-orange-400 transition-colors' to='/'> Add Repos</Link>  </span>
                </p>
                : favouritesRepos.map(repoItem => <FavouriteItemCard key={repoItem} repoUrl={repoItem}/> )
            }
        </div>
    )
}