import { Link, NavLink } from 'react-router-dom'

import './Links.css'
const Links = ({route}) => {
    return (
        <div>
           {/* <Link to={route.path}>{route.name}</Link> */}
           <NavLink to={route.path}>{route.name}</NavLink>
        </div>
    );
};

export default Links;