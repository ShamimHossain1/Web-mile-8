import { Link } from 'react-router-dom'


const Links = ({route}) => {
    return (
        <div>
           <Link to={route.path}>{route.name}</Link>
        </div>
    );
};

export default Links;