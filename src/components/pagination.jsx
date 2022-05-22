export const PaginationComponent =({
    currentpage,
    lastpage,
    onpagechange
})=>{
    const arr = new Array(lastpage).fill(0)
    return (
        <div>
            {arr.map((item,page)=><button onClick={()=>onpagechange(page+1)} disabled={(page+1)===currentpage}>{page+1}</button>)}
        </div>
    )
}