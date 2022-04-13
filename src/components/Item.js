import React, { useContext } from 'react';
import { ItemContext } from '../store/Store';

function Item(props) {
    // console.log("Item render")
    const itemCtx = useContext(ItemContext)
    return (
        <div>
            <h3>{props.item.name} Rs.{props.item.price}</h3>
            <button onClick={() => itemCtx.removeHandler(props.item.id)}>remove</button>
            <button onClick={() => itemCtx.updateHandler(props.item.id)}>update</button>
        </div>
    );
}

export default Item;