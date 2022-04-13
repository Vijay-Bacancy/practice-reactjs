import React, { useState } from 'react';
import Items from './Items';

function Home(props) {
    const [items, setItems] = useState([])
    const [title, setTitle] = useState('')

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const addHandler = () => {
        setItems(prevItems => [...prevItems, {title: title, id: Math.random().toString()}])
        console.log(items)
        setTitle('')
    }
    const removeHandler = (id) => {
        setItems(items.filter(item => item.id !== id))
        console.log(items)
    }
    const updateHandler = (id) => {
        const index = items.findIndex(item => item.id === id)
        const oldItem = items[index]
        const updateItem = {...oldItem, title: title}
        items[index] = updateItem
        setItems(items)
        setTitle('')
        console.log(items)
    }
    return (
        <div>
            <input type="text" value={title} onChange={titleChangeHandler}/>
            <button onClick={addHandler}>Add</button>
            <Items items={items} removeItem={removeHandler} updateItem={updateHandler}/>
        </div>
    );
}

export default Home;