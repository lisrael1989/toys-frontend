import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { utilService } from "../services/util.service.js"
import { useSelector } from "react-redux"
import { reviewService } from "../services/review.service.js"

export function ToyDetails() {
    const [review, setReview] = useState(utilService.getEmptyReview())
    const [toy, setToy] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.loggedinUser)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        loadToy()
        loadReviews()
    }, [toyId])

    async function loadToy() {
        try {
            const toy = await toyService.getById(toyId)
            setToy(toy)
        } catch (err) {
            console.log('Had issues in toy details', err)
            showErrorMsg('Cannot load toy')
            navigate('/toy')
        }
    }

    async function loadReviews() {
        try {

            const reviews = await reviewService.query({ toyId: toyId });
            setReviews(reviews);
        } catch (err) {
            console.log('Had issues loading reviews', err);
            showErrorMsg('Cannot load reviews');
        }
    }

    function handleReviewChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setReview((review) => ({ ...review, [field]: value }))
    }

    // async function onSaveMsg(ev) {
    //     ev.preventDefault()
    //     try {
    //         const savedMsg = await toyService.addMsg(toy._id, msg.txt)
    //         setToy((prevToy) => ({
    //             ...prevToy,
    //             msgs: [...(prevToy.msgs || []), savedMsg],
    //         }))
    //         setMsg(utilService.getEmptyMsg())
    //         showSuccessMsg('Msg saved!')
    //     } catch (err) {
    //         console.log('problem with saving the msg :', err)
    //     }
    // }

    async function onSaveReview(ev) {
        ev.preventDefault()

        try {
            const savedReview = await reviewService.add({ txt: review.txt, toyId: toy._id })
            setReviews(prevReviews => [savedReview, ...prevReviews]);
            setReview(utilService.getEmptyReview())
            showSuccessMsg('Review saved!')
        } catch (err) {
            console.log('error saving the review :', err)
        }
    }

    // async function onRemoveMsg(msgId) {
    //     try {
    //         const removedMsgId = await toyService.removeMsg(toy._id, msgId)
    //         setToy((prevToy) => ({
    //             ...prevToy,
    //             msgs: prevToy.msgs.filter((msg) => removedMsgId !== msg.id),
    //         }))
    //         showSuccessMsg('Msg removed!')
    //     } catch (err) {
    //         console.log('error:', err)
    //     }
    // }

    async function onRemoveReview(reviewId) {
        try {
            await reviewService.remove(reviewId)
            setReviews(prev => prev.filter(r => r._id !== reviewId))
            showSuccessMsg('Review removed!')
        } catch (err) {
            console.log('problem with removing review', err)
        }
    }


    // before 
    // const { txtM } = msg
    const txtR = review.txt
    if (!toy) return <div className="center-spinner"> <div className="lds-facebook"><div></div><div></div><div></div></div></div>

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


            {/* <section className="messages">
                <h4>Chat </h4>
                <ul>
                    {toy.msgs &&
                        toy.msgs.map((msg) => (
                            <li key={msg.id}>
                                By: {msg.by ? msg.by.fullname : 'Unknown User'}, {msg.txt}
                                <button type="button" onClick={() => onRemoveMsg(msg.id)}>
                                    ❌
                                </button>
                            </li>
                        ))}
                </ul>

                <form className="login-form" onSubmit={onSaveMsg}>
                    <input
                        type="text"
                        name="txt"
                        value={txtM}
                        placeholder="Enter Your Message"
                        onChange={handleMsgChange}
                        required
                        autoFocus
                    />
                    <button>Send</button>
                </form>
            </section> */}

        </section>

        <section className="reviews">
            <h5 className="toy-description-heading">Reviews</h5>
            <ul>
                {!!reviews.length && reviews.map((review) => (
                    <li key={review._id}>
                        By: {review.user.fullname}, {review.txt} {/* Use user.fullname here */}
                        <button type="button" onClick={() => onRemoveReview(review._id)}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>

            <form className="login-form" onSubmit={onSaveReview}>
                <input
                    type="text"
                    name="txt"
                    value={txtR}
                    placeholder="Write a Review"
                    onChange={handleReviewChange}
                    required
                />
                <button>Submit Review</button>
            </form>

        </section>
    </>
    )
}