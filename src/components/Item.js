import React from 'react';

function Item(props) {
    return (
        <div>
            <h3>{props.item.title}</h3>
            <button onClick={() => props.removeItem(props.item.id)}>remove</button>
            <button onClick={()=> props.updateItem(props.item.id)}>update</button>
        </div>
    );
}

export default Item;