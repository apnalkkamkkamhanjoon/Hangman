import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";


const MainpageBtn = () => {
    return (
        <Link to={`/`} style={{ fontSize: '4rem', textDecoration: 'none', color: 'black' }} className="goToHome">
            <BiHomeAlt2 />
        </Link>
    );
};

export default MainpageBtn;