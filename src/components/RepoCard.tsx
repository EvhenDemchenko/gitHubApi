import {IRepo} from "../models/models";
import {useAppActions} from "../hooks/redux.actions";
import {useAppSelector} from "../hooks/redux.selector";
import {useState} from "react";

export const RepoCard = ({repo}: { repo: IRepo }) => {
    const {addToFavourite, removeFromFavourite} = useAppActions()
    const {favourites} = useAppSelector(state => state.github)
    const [isFav, setIsFav]  = useState(favourites.includes(repo.html_url))
    const handleAddToFavourite = () => {
        addToFavourite(repo.html_url)
        setIsFav(true)
    }
    const handleRemoveFromFavourite = () => {
        removeFromFavourite(repo.html_url)
        setIsFav(false)
    }
    return (
        <div className='border-2 py-2 px-4 rounded-b-sm shadow-md hover:shadow-xl mb-2 transition-shadow'>
            <a href={repo.html_url} target='_blank'>
                <h3 className='font-bold text-lg mb-1'> Owner : {repo.owner.login} </h3>
                <p className='text-sm font-bold mb-1'> Ulr : {repo.git_url}</p>
                <p className='text-sm font-bold mb-1'> Watchers count : {repo.watchers_count} </p>
                <span className='font-thin text-sm'> Description : {repo?.description}</span>
            </a>
            { !isFav && <button
                onClick={handleAddToFavourite}
                className='border-2 py-2 px-2 bg-green-300 hover:bg-green-500 transition-colors mr-2'
            > Add
            </button>}
            { isFav && <button
                onClick={handleRemoveFromFavourite}
                className='border-2 py-2 px-2 bg-red-300 hover:bg-amber-500 transition-colors'
            > Remove
            </button>}
        </div>
    )
}