import Items from './Items';

function Home(props) {
    // console.log("Home render")
    const nameChangeHandler = (e) => {
        props.setItem(prevItem => {
          return { name: e.target.value, price: prevItem.price }
        })
      }
      const priceChangeHandler = (e) => {
        props.setItem(prevItem => {
          return { name: prevItem.name, price: e.target.value }
        })
      }
    return (
        <div>
            <input type="text" value={props.item.name} onChange={nameChangeHandler}/>
            <input type="text" value={props.item.price} onChange={priceChangeHandler}/>
            <button onClick={props.addHandler}>Add</button>
            <Items items={props.items} removeItem={props.removeHandler} updateItem={props.updateHandler}/>
        </div>
    );
}

export default Home;