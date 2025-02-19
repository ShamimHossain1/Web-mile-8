import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();  
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <div>
            <h1 className="text-center text-9xl mt-70">Opps!!</h1>
            <h2 className="text-center text-3xl mt-15">{error.statusText}</h2>
            <button onClick={handleGoBack} className="btn flex mx-auto mt-5  items-center">Go To Home</button>
            
        </div>
    );
};

export default Error;