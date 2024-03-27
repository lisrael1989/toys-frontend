import React from 'react'
import { NavLink } from 'react-router-dom'


export function ToyPreview({ toy, onRemove }) {



  return (<>
    <button onClick={() => onRemove(toy._id)} className="btn-remove">X</button>

    <article className="toy-preview">
      <h3 className="toy-name">{toy.name}</h3>
      <h4 > {`${toy.price}`}</h4>
      <img src={`img/${toy.name}.png`} />


      <h4 > 🧸</h4>
      <h4 className='toy-labels'>
        {toy.labels.map(label => (<span key={label}>{label}</span>))}
      </h4>
      <div>
        In Stock: {(toy.inStock) ? 'Yes' : 'No'}
      </div>



    </article>
  </>
  );
}
