import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


import { ToyList } from '../cmps/ToyList.jsx'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { loadToys, removeToy, setFilterBy, setSortBy } from '../store/actions/toy.actions.js'

import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ToySort } from '../cmps/ToySort.jsx'

export function ToyIndex() {
  const toys = useSelector((state) => state.toyModule.toys)
  const filterBy = useSelector(state => state.toyModule.filterBy)
  const sortBy = useSelector(state => state.toyModule.sortBy)
  // const isLoading = useSelector(storeState => storeState.toyModule.isLoading)


  useEffect(() => {
    loadToys(filterBy, sortBy)
      .then(() => {
      })
      .catch((err) => {
        showErrorMsg('Oops.. something went wrong, try again')
      })
  }, [filterBy, sortBy])


  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }

  function onSetSort(sort) {
    setSortBy(sort)
  }


  function onRemove(toyId) {
    removeToy(toyId)
      .then(() => {
        showSuccessMsg('Toy removed successfully')
      })
      .catch(err => {
        showErrorMsg('Cant remove toy, try again.')
      })
  }


  if (!toys || !toys.length) return <div>Loading...</div>

  return (
    <div className="toy-app">
      <main className="main-control-container" >
        {/* <button className='add-btn' onClick={onAddToy}>Add Toy</button> */}

        <ToyFilter
          filterBy={filterBy}
          onSetFilter={onSetFilter} />

        <ToySort
          sortBy={sortBy}
          onSetSort={onSetSort} />

        <button><NavLink to="/toy/edit" className="btn-add">Add Toy</NavLink> </button>

        <ToyList
          toys={toys}
          onRemove={onRemove}

        />

        <hr />
      </main>
    </div>
  )
}