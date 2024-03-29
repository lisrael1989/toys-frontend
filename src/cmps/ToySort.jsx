import React from 'react'

export function ToySort({ sortBy = { by: 'name', asc: true }, onSetSort }) {

  function handleSortChange(by) {
    const updatedSort = { ...sortBy, by }
    onSetSort(updatedSort)
  }

  function handleToggleDirection() {
    const updatedSort = { ...sortBy, asc: !sortBy.asc }
    console.log("🚀 ~ file: ToySort.jsx:12 ~ handleToggleDirection ~ updatedSort:", updatedSort)
    onSetSort(updatedSort)
  }

  return <section className="toy-sort">
    <h3 className='sort-title'></h3>
    <button onClick={() => handleSortChange('name')}>Sort By Name</button>
    <button onClick={() => handleSortChange('price')}>Sort By price</button>
    <button onClick={handleToggleDirection}>Change direction {sortBy.asc ? '^' : 'v'}</button>
  </section>
}