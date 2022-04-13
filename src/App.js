import { useState } from 'react';
import './App.css';
import Home from './components/Home';

function App() {
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

const addHandler = () => {
    setItems(prevItems => [...prevItems, { id: Math.random().toString(), name: item.name, price: item.price }])
    console.log(items)
    setItem({ name: '', price: 0 })
}
const removeHandler = (id) => {
    setItems(items.filter(item => item.id !== id))
    console.log(items)
}
const updateHandler = (id) => {
    const index = items.findIndex(item => item.id === id)
    const oldItem = items[index]
    const updateItem = { ...oldItem, name: item.name, price: item.price }
    items[index] = updateItem
    setItems(items)
    setItem({ name: '', price: 0 })
    console.log(items)
}
  return (
    <div className="App">
      <h2>Restro</h2>
      <Home 
        items={items} 
        item = {item}
        setItem = {setItem}
        addHandler={addHandler}
        removeHandler = {removeHandler}
        updateHandler = {updateHandler}
      />
    </div>
  );
}

export default App;
