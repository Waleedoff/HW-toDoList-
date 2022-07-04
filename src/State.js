import React, { useState } from 'react'

 function State() {
  //  const [name,setName] = useState("waled");  // useState ==> you can change the value
      let [counter,setCounter] = useState(0);  // setCounter is function == like setCounter())
      let [count,setImg] = useState(0);
      let imgs = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnDrNjdQiUJWqFwgwdgBjYBPM1lmpTvorXwCrYxsgNY-eBJl4h4_SsrU5m1np8bIAdsg&usqp=CAU','https://thepoweraddict.com/wp-content/uploads/2021/01/patrick-tomasso-5hvn-2WW6rY-unsplash.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnDrNjdQiUJWqFwgwdgBjYBPM1lmpTvorXwCrYxsgNY-eBJl4h4_SsrU5m1np8bIAdsg&usqp=CAU']

    
      const clickMe = () => {
        setCounter(counter++)
    }
    const clickImg = () => {
        setImg(count++)
    }
    
    if (count > imgs.length -1 ) {
            
    }
    else 
    {
        
    }

  return (
    <div>
        {/* <button onClick={()=>{setName("mohammed")}}>click me</button>  */}

        <button onClick={clickMe}>Click Me</button>

        {/* <button onClick={()=>{setCounter(setCounter++)}}>click me</button>  */}
        {counter}

        
        <button onClick = {clickImg}>imgChang</button>
        <img src={imgs}/>
    </div>
  )
}
  

export default State