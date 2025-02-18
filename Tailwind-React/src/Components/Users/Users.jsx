import { useLoaderData } from "react-router-dom";
import User from "./User/User";


const Users = () => {

    const users = useLoaderData();
    console.log(users.length);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                users.map((user) => <User user={user} key={user.phone}></User>)
            }
        </div>
    );
};

export default Users;