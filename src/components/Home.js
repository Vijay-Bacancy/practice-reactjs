import { useContext, useState } from 'react';
import { ItemContext } from '../store/Store';
import Items from './Items';

function Home(props) {
    // console.log("Home render")
    const [item, setItem] = useState({})
    const itemCtx = useContext(ItemContext)
    const nameChangeHandler = (e) => {
        setItem(prevItem => {
          return { name: e.target.value, price: prevItem.price }
        })
      }
      const priceChangeHandler = (e) => {
        setItem(prevItem => {
          return { name: prevItem.name, price: e.target.value }
        })
      }
    return (
        <div>
            <input type="text" value={item.name} onChange={nameChangeHandler}/>
            <input type="text" value={item.price} onChange={priceChangeHandler}/>
            <button onClick={() => itemCtx.addHandler(item)}>Add</button>
            <Items enteredItem={item}/>            
        </div>
    );
}

export default Home;