import Header from "../Header/Header";
import classes from './_Layout.module.css'

const Layout = (props) => {
    return ( 
        <div className="layout">
            <Header/>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
     );
}
 
export default Layout;
