import { useNavigate, useRouteError } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const Error = () => {
    const error = useRouteError();  
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
            <h1 className="text-9xl font-bold text-gray-800 mb-4 animate-bounce">Oops!!</h1>
            <h2 className="text-3xl text-gray-600 mb-8">{error?.statusText || 'Something went wrong!'}</h2>
            <button onClick={handleGoBack} className="px-6 py-3 text-lg bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-600 transition">
                Go To Home
            </button>
        </div>
    );
};

export default Error;
