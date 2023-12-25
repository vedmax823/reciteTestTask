
import { Link } from 'react-router-dom';
import { DRAGONS_ROUTE, MAIN_ROUTE, SHIPS_ROUTE } from '../utils/constantsRouts';


const Header = () => {
    return (
        <div className='w-full p-2 border-b'>
            <Link to={MAIN_ROUTE} className='font-semibold m-2 hover:font-bold'>Main</Link>
            <Link to={SHIPS_ROUTE} className='font-semibold m-2 hover:font-bold'>Ships</Link>
            <Link to={DRAGONS_ROUTE} className='font-semibold m-2 hover:font-bold'>Dragons</Link>

        </div>
    );
};

export default Header;