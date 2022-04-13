import React from 'react';

function Item(props) {
    // console.log("Item render")
    return (
        <div>
            <h3>{props.item.name} Rs.{props.item.price}</h3>
            <button onClick={() => props.removeItem(props.item.id)}>remove</button>
            <button onClick={()=> props.updateItem(props.item.id)}>update</button>
        </div>
    );
}

export default Item;