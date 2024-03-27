import React from 'react'
import { NavLink } from 'react-router-dom'
import { utilService } from '../services/util.service'


export function ToyPreview({ toy, onRemove }) {


  return (<>

    <button onClick={() => onRemove(toy._id)} className="btn-remove">X</button>
    <article className="toy-preview">
      <h3 className="toy-name">{toy.name}</h3>
      <h4 className='toy-price'> ${`${toy.price}`}</h4>
      {/* <img src={`public/Img/toys-img/${utilService.getRandomIntInclusive(1, 10)}.jpg`} alt="toy-img" /> */}
      <img className="toy-img" src={`public/Img/3.webp`} alt="toy-img" />
      <h4 className='toy-labels'>
        {toy.labels.map(label => (<span key={label}>{label}</span>))}
      </h4>
      <div className='inStock'>
        {(toy.inStock) ? ' In Stock  ' : 'Not in Stock'}
      </div>



    </article>
  </>
  );
}
