import Item from './Item/Item';
import classes from './List.module.css'

const List = (props) => {
    return ( 
        <div className={classes.list}>
            {props.data.map(el => {return <Item event={props.event} text={el.text} id={el.id} key={el.id} />})}
        </div>
     );
}

export default List;
