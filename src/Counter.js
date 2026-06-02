import { useEffect, useState } from "react";
import React from "react";

function Counter(){
    const [count,setCount]=useState(0);
    
        useEffect(
            ()=>{
                setTimeout(
                    ()=>{
                        console.log("Fetching Initial Count");
                        setCount(5);
                    },10000);
            },[] ); 
        
        
        return(
            <div style={{textAlign:"center",marginTop:"50px"}}>
                <h2>Counter:{count}</h2>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={()=>setCount(count-1)}>Decrement</button>
                <button onClick={()=>setCount(count*2)}>Double</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        );
}

export default Counter;