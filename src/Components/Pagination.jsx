import React from 'react'
import Post from './Post'
// import {pageNo} from './Post'




function Pagination({pageNo,setPageNo}) {
  const handleNext = ()=>{
    setPageNo(pageNo+1);
  }
  const handlePrev = ()=>{
  setPageNo(pageNo-1);
  }


  const prevThreeArr = Array.from({length:3},(_,index)=>pageNo-1-index).filter((value)=>value>0).reverse();
  // console.log(prevThreeArr);
  const nextFourArr = Array.from({length:4},(_,index)=>pageNo+index)
  // console.log(nextFourArr);
  const arr = [...prevThreeArr,...nextFourArr];
  // console.log(arr);

return(  <>
    <div className='flex gap-12'>
      {pageNo>1?<button onClick={handlePrev} className='bg-black text-2xl text-white hover:scale-110 p-3 rounded-lg '>
        {"<"}</button>:""}
      
      {arr.map((value)=>{
        return <button onClick={()=>setPageNo(value)} className={value==pageNo?`bg-white text-2xl text-black scale-110 border-black border-2 black p-3 rounded-lg`:`bg-black text-3xl text-white hover:scale-110 p-4 rounded-lg`} >{value}</button>
      })}
      <button onClick={handleNext} className='bg-black text-2xl text-white hover:scale-110 p-3 rounded-lg '>{">"}</button>
    </div>
  </>
  )
}

export default Pagination