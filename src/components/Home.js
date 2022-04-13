import { useContext } from 'react';
import { ItemContext } from '../store/Store';
import Items from './Items';

function Home(props) {
    // console.log("Home render")
    const itemCtx = useContext(ItemContext)
    const nameChangeHandler = (e) => {
        itemCtx.setItem(prevItem => {
          return { name: e.target.value, price: prevItem.price }
        })
      }
      const priceChangeHandler = (e) => {
        itemCtx.setItem(prevItem => {
          return { name: prevItem.name, price: e.target.value }
        })
      }
    return (
        <div>
            <input type="text" value={itemCtx.item.name} onChange={nameChangeHandler}/>
            <input type="text" value={itemCtx.item.price} onChange={priceChangeHandler}/>
            <button onClick={itemCtx.addHandler}>Add</button>
            <Items/>            
        </div>
    );
}

export default Home;