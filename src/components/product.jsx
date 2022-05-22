import axios from "axios";
import { useEffect, useState } from "react"
import { PaginationComponent } from "./pagination";
import './produc.css'
import { Sorting } from "./sorting";

export const Product = ()=>{
    const [data,setData] = useState([]);
    const [page,setPage] =useState(1)
    const [rating,setRating]=useState('asc')
    const [alpha,setAlpha] = useState('name');
    const [order,setOrder] = useState('asc');
    function handleSort(){
        if(alpha=='name' && order=='desc'){
          //console.log(alpha,order)
          getData(page,alpha,order)
        }
        else if(alpha=='name' && order=='asc'){
            //console.log(alpha,order)
            getData(page,alpha,order)
          }
          else if(alpha=='reviews' && order=='asc'){
           // console.log(alpha,order)
            getData(page,alpha,order)
          } else if(alpha=='reviews' && order=='desc'){
            //console.log(alpha,order)
            getData(page,alpha,order)
          }
          else if(alpha=='cuisine' && order=='asc'){
           // console.log(alpha,order)
            getData(page,alpha,order)
          } else if(alpha=='cuisine' && order=='desc'){
            //console.log(alpha,order)
            getData(page,alpha,order)
          } else if(alpha=='rating' && order=='asc'){
           // console.log(alpha,order)
            getData(page,alpha,order)
          } else if(alpha=='rating' && order=='desc'){
            //console.log(alpha,order)
            getData(page,alpha,order)
          }
          else if(alpha=='votes' && order=='asc'){
            //console.log(alpha,order)
            getData(page,alpha,order)
          } else if(alpha=='votes' && order=='desc'){
            //console.log(alpha,order)
            getData(page,alpha,order)
          }
    }
    useEffect(()=>{
        getData(page,alpha,rating);
    },[page,rating])

    const getData = (page,alp,ord)=>{
        axios.get(`http://localhost:8080/categories`,{
             params:{
               _page:page,
               _limit:5,
               _sort:alp,
               _order:ord

         }}
        
        ).then((res)=>{
            setData(res.data)
        })
    }
    


    const handlePage=()=>(setPage(page))
    console.log(data)
    
    
    return (
        
        <>

        <div className="div12">
            
        <div>
          Sort By:{" "}
          <select onChange={(e)=>{setAlpha(e.target.value)}}
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="reviews">Reviews</option>
            <option value="name">Name</option>
            <option value="rating">Rating</option>
            <option value="cuisine">Region</option>
            <option value="votes">Votes</option>
         
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
        <button className="sort" onClick={handleSort}>sort</button>
        </div>
      


            
        {/* <div>
        <select  onChange={(e)=>setselectbtn(e.target.value)}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="Region">Region</option>
          <option value="Reviews">Reviews</option>
          <option value="Rating">Rating</option>
          <option value="Votes">Votes</option>
          <option value="Min_price">price</option>
         
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" /> */}
         {/* <div>
            <button disabled={rating==="asc"} onClick={()=>setRating("asc")}>Sort by desc Rating</button>
            <button disabled={rating==="desc"} onClick={()=>setRating("desc")}>Sort by Asc Rating</button>
        </div> */}
       <div>
            <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
            
            <PaginationComponent currentpage={page} lastpage={5} onpagechange={setPage}></PaginationComponent>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
            </div>
     
        {
        data.map((el)=>{
                return (
                    <div className="div1" >
                        {el.rating}
                        <img className="image"  src={el.image} alt="" />
                        <p  className="para">Name:{el.name}</p>
                        <p className="para"><span> Region: {el.cuisine}</span> <span>Reviews: {el.reviews}</span></p>
                        <p className="para"><span>Min_price:{el.minPrice}</span> <span>Votes:{el.votes}</span></p>
                        <p className="para">{el.paymentMethods}</p>
                    </div>
                )
            })
        }
          
            
        </>
    )
}
