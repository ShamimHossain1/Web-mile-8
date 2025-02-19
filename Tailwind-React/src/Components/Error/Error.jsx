import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();  
    return (
        <div>
            <h1 className="text-center text-9xl mt-70">Opps!!</h1>
           
            <h2 className="text-center text-3xl mt-15">{error.statusText}</h2>
            
        </div>
    );
};

export default Error;