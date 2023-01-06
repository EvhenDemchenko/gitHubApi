import {Route, Routes, Link} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavouritePage} from "./pages/FavouritePage";
import {Navigation} from "./components/Navigation";

const App = () => {
    return (
        <>
            <Navigation/>
            <div className='sm:container mx-auto'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/favourite' element={<FavouritePage/>}/>
                </Routes>
            </div>
        </>
    )
};

export default App
