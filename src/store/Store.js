import { createContext, useReducer, useState } from "react";

export const ItemContext = createContext()

const MENU_ITEMS =[
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

const itemReducer = (state, action) => {
    if(action.type==="ADD"){
        state = [...state, {
            id: Math.random().toString(),
            name: action.item.name,
            price: action.item.price
        }]
        console.log(state)
        return state
    }
    else if(action.type==="REMOVE"){
        state = state.filter(item => item.id !== action.id)
        return state
    }
    else if(action.type==="UPDATE"){
        console.log("updating item")
        const index = state.findIndex(item => item.id === action.item.id)
        const oldItem = state[index]
        const updateItem = { ...oldItem, name: action.item.name, price: action.item.price }
        state[index] = updateItem
        state = [...state]
        console.log(state)
        return state
    }
    else{
        console.log("get items")
        console.log(state)
        return state
    }
}

const ItemContextProvider = (props) => {

    const [itemState, dispatch] = useReducer(itemReducer, MENU_ITEMS)

    const addHandler = (item) => {
        dispatch({type: "ADD", item: item})
    }

    const removeHandler = (id) => {
        dispatch({type: "REMOVE", id: id})
    }
    const updateHandler = (item) => {
        dispatch({type: "UPDATE", item: item})
    }
    const getItems = () => {
        return itemState
    }
    const ItemCtx = {
        addHandler:addHandler, 
        removeHandler:removeHandler, 
        updateHandler:updateHandler,
        getItems: getItems 
    }

    
    return <ItemContext.Provider value={ItemCtx}>
        {props.children}
    </ItemContext.Provider>    
    
}

export default ItemContextProvider