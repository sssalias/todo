import Logo from "../UI/Logo/Logo";
import classes from './Header.module.css'

const Header = () => {
    return ( 
        <header>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <Logo/>
                    <nav>
                        <a href="/">О нас</a>
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;