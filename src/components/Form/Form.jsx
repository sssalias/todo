import Input from "../UI/Input/Input";
import Button from '../UI/Button/Button'
import classes from './Form.module.css'
import { useState } from "react";

 const Form = (props) => {

    const [value, setValue] = useState('')

    const onChangeInputValue = (e) => {
        setValue(e.target.value)
    }

    const getInputValue = () => {
        if (value !== '') {
            props.event(value)
            return setValue('')
        }
    }

    return ( 
        <div className={classes.form}>
            <Input value={value} change={onChangeInputValue} label="Текст задачи" type="text"/>
            <Button click={getInputValue}>Добавить задачу</Button>
        </div>
     );
 }
  
 export default Form;
