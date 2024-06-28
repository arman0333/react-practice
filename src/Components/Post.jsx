import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';
function Post() {
    const [data, setData] = useState([]);
    const [pageNo,setPageNo] = useState(5);
    useEffect(() => {
        axios
        .get(`https://picsum.photos/v2/list?page=${pageNo}&limit=12`)
        .then((res)=> setData(res.data))
    }, [pageNo]);
    
    return (
    //     <div className='flex flex-wrap justify-center items-center  h-screen w-screen'>
    //         <div className='flex flex-wrap justify-center rounded-lg h-[25%] w-[100%]  gap-12 m-8 p-7'>
    //             {data.map((item, index) => (
    //                 <img className='h-80 w-60 rounded-lg' key={index} src={item.download_url} alt="" />
    //             ))}
    //         </div>
    //         <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    //     </div>
    <div className='flex flex-col h-screen w-screen items-center justify-between'>
    <div className='flex flex-wrap justify-center items-center flex-grow w-full gap-12 p-7'>
        {data.map((item, index) => (
            <img className='h-80 w-60 rounded-lg' key={index} src={item.download_url} alt="" />
        ))}
    </div>
    <div className='mb-8'>
        <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>  
    </div> 
);
}

export default Post;
