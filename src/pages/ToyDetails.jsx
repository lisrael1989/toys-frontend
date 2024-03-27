import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service.js"

import { showErrorMsg } from '../services/event-bus.service'

export function ToyDetails() {
    const [toy, setToy] = useState(null)

    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    })

    function loadToy() {
        toyService.getById(toyId)
            .then(setToy)
            .catch((err) => {
                showErrorMsg('Cant load toy')
                navigate('/toy')
            })
    }



    if (!toy) return <div>Loading...</div>
    return (
        <section className="toy-details">
            <h2>Toy name : {toy.name}</h2>
            <h2>Price: ${toy.price}</h2>
            {/* <img src=".1.png" alt="" /> */}
            <h2>labels: <span>{toy.labels.join(' | ')}</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h2>Created at: <span>{toy.createdAt}</span></h2>
            <h2>In Stock: <span>{(toy.inStock) ? 'yes' : 'no'}</span></h2>

            <button><Link to={`/toy/edit/${toy._id}`}>Edit</Link> &nbsp; </button>
            <button><Link to={`/toy`}>Back</Link></button>

        </section>
    )
}