import './_Button.module.css'

const Button = (props) => {
    return ( 
        <button onClick={props.click}>
            {props.children}
        </button>
     );
}
 
export default Button;