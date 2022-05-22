import { useState } from "react"

export const Sorting =()=>{
    const [alpha,setAlpha] = useState('Name');
    const [order,setOrder] = useState('asc');
    function handleSort(){
      console.log(alpha,order)
    }
    return(
        <>
         <div>
          Sort By:{" "}
          <select onChange={(e)=>{setAlpha(e.target.value)}}
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="Reviews">Reviews</option>
            <option value="Name">Name</option>
            <option value="Rating">Rating</option>
            <option value="Region">Region</option>
            <option value="Votes">Votes</option>
         
          </select>
        </div>
        <div>
          Order:
          <select onChange={(e)=>{setOrder(e.target.value)}}
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handleSort}>sort</button>
      
        </>
    )
}