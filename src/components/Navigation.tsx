import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className='w-full flex justify-around items-center drop-shadow-2xl  mx-auto h-[50px] bg-orange-400   '>
            <h3 className='font-bold text-2xl text-white hover:shadow-md hover:shadow-orange-500 transition-shadow'>
                <a href="https://api.github.com/" target="_blank">
                    GitHubApi
                </a>
            </h3>
            <ul className='flex gap-5'>
                <li className='border text-white rounded py-1 px-3 font-thin hover:bg-white hover:text-orange-400 transition-colors' ><Link to={'/'}>Home</Link></li>
                <li className='border text-white rounded py-1 px-3 font-thin hover:bg-white hover:text-orange-400 transition-colors' ><Link to={'/favourite'}>Favourite</Link></li>
            </ul>
        </nav>
    )
}