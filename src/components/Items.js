import React, { useContext } from 'react';
import { ItemContext } from '../store/Store';
import Item from './Item';

function Items(props) {
    // console.log("Items render")
    const itemCtx = useContext(ItemContext);
    const items = itemCtx.getItems()
    console.log("items: "+items)
    return (
        <div>
            <h3>products</h3>
            {items.map(item => {
                return <Item item={item} enteredItem={props.enteredItem}/>
            })}
        </div>
    );
}

export default Items;