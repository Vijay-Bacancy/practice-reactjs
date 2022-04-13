import React from 'react';
import Item from './Item';

function Items(props) {
    return (
        <div>
            <h3>products</h3>
            {props.items.map(item => {
                return <Item item={item} removeItem={props.removeItem} updateItem={props.updateItem}/>
            })}
        </div>
    );
}

export default Items;