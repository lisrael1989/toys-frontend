import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { MultiSelect } from '../cmps/MultiSelect';

import { toyService } from "../services/toy.service.js"
import { saveToy } from "../store/actions/toy.actions.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"


export function ToyEdit() {
  const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
  const { toyId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (toyId) {
      toyService.getById(toyId).then(toy => {
        setToyToEdit(toy)

      })
    }
  }, [])


  function handleChange(ev) {
    const field = ev.target.name
    const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
    setToyToEdit(prevToy => ({ ...prevToy, [field]: value }))
  }
  // function handleChange({ target }) {
  //   let { value, type, name: field } = target
  //   value = type === 'number' ? +value : value
  //   setToyToEdit((prevtoy) => ({ ...prevtoy, [field]: value }))
  // }

  function onSetLabel(label) {
    const labels = toyToEdit.labels.includes(label) ? toyToEdit.labels.filter(l => l !== label) : [label, ...toyToEdit.labels]
    setToyToEdit(prevToy => ({ ...prevToy, labels }))
  }


  function onSave(ev) {
    ev.preventDefault()

    const newToy = {
      ...toyToEdit,
      inStock: (toyToEdit.inStock === 'true') ? true : false
    }

    saveToy(newToy)
      .then(() => {
        showSuccessMsg('Toy saved successfully')
        navigate('/toy')
      })
      .catch(err => {
        showErrorMsg('Can not save toy, please try again')
      })
  }

  function isInStock() {
    return toyToEdit.inStock
  }

  if (!toyToEdit) return <div>Loading...</div>


  return (
    <section className="toy-edit">

      <form onSubmit={onSave} className="container edit-form" action="">

        <label htmlFor="name">name : </label>
        <input
          className="edit-input name-input"
          value={toyToEdit.name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Enter name..."
        />
        <label htmlFor="price">Price : </label>
        <input
          className="edit-input price-input"
          value={toyToEdit.price}
          onChange={handleChange}
          type="number"
          name="price"
          id="price"
          placeholder="Enter price"
        />
        <div>
          <div className='multi-select-edit'>
            <MultiSelect onSetLabel={onSetLabel} toyToEdit={toyToEdit} />
          </div>
          <div>
            <h3> In- Stock:</h3>
            <select value={isInStock()} onChange={handleChange} name="inStock" className='edit-input'>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className='edit-btns'>
            <button onClick={onSave} className="save-toy-btn">Save</button>
            <button><Link to="/toy">Cancel</Link> </button>
          </div>
        </div>
      </form>
    </section>
  )
}