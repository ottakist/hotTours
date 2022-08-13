import React, { useContext, useState } from 'react';
import { tourContext } from './App';

const Tour = ({id,name,info,image,price}) => {
  const [show,setShow] =useState(false)
  const removeTour= useContext(tourContext)
  return (<article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}$</h4>
      </div>
      <p>{show?info:`${info.substring(0,200)}...`} <button onClick={()=>setShow(!show)}>{show?"show less":"show more"}</button></p>
        <button className='delete-btn' onClick={()=>{removeTour(id)}}>Not interested</button>
    </footer>
  </article>)
};

export default Tour;
