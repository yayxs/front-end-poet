import React,{  useState,useEffect } from 'react'
import store from '../store/index'
import { addAction} from '../store/actions'
const handleClick = ()=>{
    console.log(`点击了按钮`)
    const action = addAction({num:'456'})
    store.dispatch(action)
}


function Home() {

    useEffect(() => {
        store.subscribe(()=>{
            console.log('-----',store.getState())        
        })
    }, [])
    

    return (
        <div>
            <button onClick={handleClick}>按钮</button>
            <h1>{store.getState().num} </h1>
        </div>
    )
}

export default Home
