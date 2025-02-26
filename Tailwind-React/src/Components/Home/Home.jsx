
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Form from '../Form/Form';

const Home = () => {

    const navigation = useNavigation();
    // console.log(navigation);

    const location = useLocation();
    // console.log(location);

    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-gray-600">
                <h1 className="text-3xl text-center mt-10">Welcome to Tailwind React</h1>
            </div>
            {
                navigation.state === 'loading' ? <h1 className="text-3xl text-center mt-10">Loading...</h1> : <Outlet></Outlet>
            }

            <Form></Form>

            <Footer></Footer>

        </div>
    );
};

export default Home;