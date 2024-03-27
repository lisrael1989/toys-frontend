import React, { useEffect, useState } from 'react'
import { toyService } from '../services/toy.service'
import { useSelector } from 'react-redux'
import LabelSelectFilter from './LabelSelectFilter';

const toyLabel = toyService.getLabels()

export function ToyFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    const toyLabel = toyService.getLabels();

    useEffect(() => {
        console.log(filterByToEdit);
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const { name, value, type } = target;
        console.log(name, value);
        setFilterByToEdit(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? target.checked : value,
        }));
    }

    function onSelectLabels(event) {
        const { target: { value } } = event;
        setFilterByToEdit(prevFilterBy => ({
            ...prevFilterBy,
            labels: typeof value === 'string' ? value.split(',') : value,
        }));
    }

    return <div className="filter-container">

        <form className={'form-filter'}>
            <h1 className='filterby-title'>filter by </h1>
            <label className='filter-label'>
                <span className='filter-label'>Search</span>
                <input
                    value={filterByToEdit.search}
                    onChange={handleChange}
                    type="search"
                    className="search-input"
                    placeholder='By Name'
                    name="txt" />
            </label>
            <label className='filter-label'>
                <span className='filter-label'>Min-price</span>
                <input
                    onChange={handleChange}
                    type="number"
                    className="min-price"
                    name="minPrice" />
            </label>
            <label className='filter-label-instock'>
                <span className='filter-label'>In stock</span>
                <select
                    onChange={handleChange}
                    className='instock-input'
                    name="inStock"
                    value={filterByToEdit.inStock || ''}>
                    <option value=""> All </option>
                    <option value={true}>In stock</option>
                    <option value={false}>Out of stock</option>
                </select>
            </label>
            <div className='labels-filter'>
                <LabelSelectFilter
                    labels={toyLabel}
                    selectedLabels={filterByToEdit.labels || []}
                    onSelectLabels={onSelectLabels}
                />
            </div>

        </form>
    </div>
}



