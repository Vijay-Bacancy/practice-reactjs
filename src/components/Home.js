import React, { useState } from 'react';
import Items from './Items';

function Home(props) {
    // console.log("Home render")
    let MENU_ITEMS = [
        {
          id: 'i1',
          name: 'chinese',
          price: 200
        },
        {
          id: 'i2',
          name: 'italian',
          price: 250
        },
        {
          id: 'i3',
          name: 'panjabi',
          price: 150
        },
        {
          id: 'i4',
          name: 'gujarati',
          price: 100
        }
    ]; 
    const [items, setItems] = useState(MENU_ITEMS)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const namePriceHandler = (e) => {
        setPrice(e.target.value)
    }

    const addHandler = () => {
        setItems(prevItems => [...prevItems, {id: Math.random().toString(), name: name, price: price}])
        console.log(items)
        setName('')
        setPrice(0)
    }
    const removeHandler = (id) => {
        setItems(items.filter(item => item.id !== id))
        console.log(items)
    }
    const updateHandler = (id) => {
        const index = items.findIndex(item => item.id === id)
        const oldItem = items[index]
        const updateItem = {...oldItem, name: name, price: price}
        items[index] = updateItem
        setItems(items)
        setName('')
        setPrice(0)
        console.log(items)
    }
    return (
        <div>
            <input type="text" value={name} onChange={nameChangeHandler}/>
            <input type="number" value={price} onChange={namePriceHandler}/>
            <button onClick={addHandler}>Add</button>
            <Items items={items} removeItem={removeHandler} updateItem={updateHandler}/>
        </div>
    );
}

export default Home;