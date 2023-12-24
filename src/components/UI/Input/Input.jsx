import classes from './Input.module.css'

const Input = (props) => {
    return ( 
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            <input value={props.value} onChange={props.change} type={props.type}/>
        </div>
     );
}

export default Input;
