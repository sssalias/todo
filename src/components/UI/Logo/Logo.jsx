import classes from './_Logo.module.css'

const Logo = (props) => {
    const logoData = ['TODO', 'React']
    return ( 
        <div className={classes.logo}>
            {logoData.map((el, i) => {
                return <span key={i}>{el}</span>
            })}
        </div>
     );
}
 
export default Logo;