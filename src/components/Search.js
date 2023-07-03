import React, { useState } from 'react'
import './Search.css'
import {Users} from './user'
import Table from './Table';

const Search = () => {
  
    const[query,setQuery]=useState("");

    

    const search = (data)=>{
      return data.filter((item)=> item.location.toLowerCase().includes(query) || item.jobrole.toLowerCase().includes(query));
    }

  return (
    <div className='s-container'>
      <input type="text" placeholder='Search here with location or jobrole' className='search' onChange={(e)=> setQuery(e.target.value)} />
       <p>Candidates applyed for the job </p>
      <Table data = {search(Users)}/>


      
    </div>
  )
}

export default Search
