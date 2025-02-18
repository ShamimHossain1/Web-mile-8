
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-gray-600">
                <h1 className="text-3xl text-center mt-10">Welcome to Tailwind React</h1>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;