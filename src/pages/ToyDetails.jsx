import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service.js"
// import { utilService } from "../services/util.service.js"

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
    return (<>

        <section className="toy-details">

            <div>
                <h2>Toy name : {toy.name}</h2>
                <h2>Price: ${toy.price}</h2>
                <h2>Labels: <span>{toy.labels.join(' | ')}</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h2>Created at: <span>{'Today'}</span></h2>
                <h2> <span>{(toy.inStock) ? 'In Stock' : 'Not In Stock'}</span></h2>
                <button className="btn-details"><Link to={`/toy/edit/${toy._id}`}>Edit</Link> &nbsp; </button>
                <button className="btn-details"><Link to={`/toy`}>Back</Link></button>
            </div>
            <div>
                <img className="img-details" src={`/Img/toys-img/3.png`} alt="toy-img" />

            </div>

        </section>


    </>
    )
}