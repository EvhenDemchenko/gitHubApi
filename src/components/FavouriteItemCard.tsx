import {useState} from "react";
import {useAppSelector} from "../hooks/redux.selector";
import {useAppActions} from "../hooks/redux.actions";

type IRepoURL = string;

export const FavouriteItemCard = ({repoUrl}: { repoUrl: IRepoURL }) => {

    const {favourites} = useAppSelector(state => state.github)
    const [isFav, setIsFav] = useState(favourites.includes(repoUrl))
    const {addToFavourite, removeFromFavourite} = useAppActions()
    const handleAddToFavourite = () => {
        addToFavourite(repoUrl)
        setIsFav(true)
    }
    const handleRemoveFromFavourite = () => {
        removeFromFavourite(repoUrl)
        setIsFav(false)
    }

    return (
        <div className=' w-1/2 border-2 py-2 px-4 rounded-b-sm shadow-md hover:shadow-xl mb-2 transition-shadow'>
            <div className='flex py-2 flex-row items-center gap-[20px] '>
                <p className='font-thin '> RepoUrl :</p>
                <a className='hover:shadow-md transition-shadow' href={repoUrl} target="_blank"><h5
                    className='text-xl font-bold text-center'> {repoUrl}</h5></a>
            </div>
            {!isFav && <button
                onClick={handleAddToFavourite}
                className='border-2 py-2 px-2 bg-green-300 hover:bg-green-500 transition-colors mr-2'
            > Add
            </button>}
            {isFav && <button
                onClick={handleRemoveFromFavourite}
                className='border-2 py-2 px-2 bg-red-300 hover:bg-amber-500 transition-colors'
            > Remove
            </button>}
        </div>)
}