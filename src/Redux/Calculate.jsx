import React,{useState} from 'react'
import mystore from './Store'
import { useSelector } from 'react-redux'

const Calculate = () => {
 let[num,setnum] = useState(0);

  const add = () =>{
    
    setnum( num = num +1);
    mystore.dispatch({
        type:"number",
        numberdata:num,
    })
  }

  const sub = () =>{
    if(num > 0){
        setnum(num = num -1);
        mystore.dispatch({
            type:"number",
            numberdata:num,
        })
    }
    else{
        alert("Value can not be less than zero");
    }
  }

  const reset = () =>{
    setnum(num = 0);
    mystore.dispatch({
        type:"number",
        numberdata:num,
    })
  }

  const fullname = useSelector((mystore)=>{
    return mystore;
})

const btn ={
    margin:"2rem",
    height:"50px",
    width:"250px",
    backgroundColor:"darkblue",
    color:"white",
    borderStyle:"none",
    borderRadius:"5px",
    fontSize:"24px",
}

  return (
    <div >
        <h2 style={{color:"black"}}>COUNTER CREATE THE REDUX</h2>
        <button onClick={add} style={btn}>Increment </button>
        <button onClick={sub} style={btn}>Decrement</button>
        <button onClick={reset} style={btn}>Reset</button>
        <p style={{fontSize:"32px"}}>{fullname.number}</p>
    </div>
  )
}

export default Calculate
