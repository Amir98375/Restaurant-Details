import axios from "axios";
import { useEffect, useState } from "react"

export const Product = ()=>{
    const [data,setData] = useState([]);
    const [page,setPage] =useState(1)
    useEffect(()=>{
        getData(page);
    },[page])
    const getData = (page)=>{
        axios.get(`http://localhost:8080/categories`,{
             params:{
               _page:page,
               _limit:6

         }}
        
        ).then((res)=>{
            setData(res.data)
        })
    }
    const handlePage=()=>(setPage(page))
    console.log(data)
    return (
        
        <>
  
        {
        data.map((el)=>{
                return (
                    <div style={{'width':'100%','overflow':'hidden','height':'400px','border':'1px solid grey'}}>
                        {el.id}
                        <img style={{'width':'100%','height':'50%'}} src={el.image} alt="" />
                        <p>{el.name}</p>
                        <p><span> Region: {el.cuisine}</span> <span>reviews: {el.reviews}</span></p>
                        <p><span>min_price:{el.minPrice}</span> <span>Votes:{el.votes}</span></p>
                        <p>{el.paymentMethods}</p>
                    </div>
                )
            })
        }
                  <div>
            <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
        </>
    )
}