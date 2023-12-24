import clasess from './Item.module.css'
import Button from '../../UI/Button/Button'

const Item = (props) => {

    const getKey = () => {
        props.event(props.id)
    }

    return ( 
        <div className={clasess.item}>
            <span className={clasess.text}>
                {props.text}
            </span>
            <Button click={getKey}>x</Button>
        </div>
     );
}

export default Item;