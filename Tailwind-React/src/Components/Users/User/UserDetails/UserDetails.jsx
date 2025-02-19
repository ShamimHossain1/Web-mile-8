import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <div className="bg-gray-700 p-5 m-5 rounded-lg text-center">
                <h1 className="text-2xl">Name: {details.name}</h1>
                <h1 className="text-2xl">Email: {details.email}</h1>
                <h1 className="text-2xl">Phone: {details.phone}</h1>
                <button onClick={handleGoBack} className="btn">Go Back</button>
            </div>

        </div>
    );
};

export default UserDetails;