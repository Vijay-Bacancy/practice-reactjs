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
    const [item, setItem] = useState({})

    const nameChangeHandler = (e) => {
        setItem(prevItem => {
            return {name: e.target.value, price: prevItem.price}
        })
    }
    const priceChangeHandler = (e) => {
        setItem(prevItem => {
            return {name: prevItem.name, price: e.target.value}
        })
    }

    const addHandler = () => {
        setItems(prevItems => [...prevItems, {id: Math.random().toString(), name: item.name, price: item.price}])
        console.log(items)
        setItem({name: '', price: 0})
    }
    const removeHandler = (id) => {
        setItems(items.filter(item => item.id !== id))
        console.log(items)
    }
    const updateHandler = (id) => {
        const index = items.findIndex(item => item.id === id)
        const oldItem = items[index]
        const updateItem = {...oldItem, name: item.name, price: item.price}
        items[index] = updateItem
        setItems(items)
        setItem({name: '', price: 0})
        console.log(items)
    }
    return (
        <div>
            <input type="text" value={item.name} onChange={nameChangeHandler}/>
            <input type="number" value={item.price} onChange={priceChangeHandler}/>
            <button onClick={addHandler}>Add</button>
            <Items items={items} removeItem={removeHandler} updateItem={updateHandler}/>
        </div>
    );
}

export default Home;