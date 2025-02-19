import { Link } from "react-router-dom";


const User = ({user}) => {
    return (
        <div key={user.id} className="bg-gray-700 p-5 m-5 rounded-lg text-center">
            <h1 className="text-2xl">Name: {user.name}</h1>
            <h1 className="text-2xl">Email: {user.email}</h1>
            <h1 className="text-2xl">Phone: {user.phone}</h1>
            <Link to={`/user/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;