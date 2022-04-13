import React, { useContext } from 'react';
import { ItemContext } from '../store/Store';
import Item from './Item';

function Items(props) {
    // console.log("Items render")
    const itemCtx = useContext(ItemContext);
    return (
        <div>
            <h3>products</h3>
            {itemCtx.items.map(item => {
                return <Item item={item}/>
            })}
        </div>
    );
}

export default Items;