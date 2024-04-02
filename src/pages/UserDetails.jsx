import { useEffect, useState } from "react"
import { userService } from "../services/user.service.js"
import { Link, useNavigate, useParams } from "react-router-dom"



export function UserDetails() {

  const user = useSelector(storeState => storeState.userModule.loggedinUser)
  const [userReviews, setUserReviews] = useState([])

  useEffect(() => {
    loadReviews()
  }, [user])

  async function loadReviews() {
    try {
      const reviews = await reviewService.query({ userId: user._id });
      setUserReviews(reviews)

    } catch (err) {
      console.log('cannot get reviews :', err)
    }
  }


  if (!user) return <div>Loading...</div>


  return (
    <section className="user-details">
      <h1>hello {user.fullname}</h1>
      {!!userReviews.length && (
        userReviews.map(r => (
          <li className="review-card" key={r._id}>
            your review:"{r.txt}", was posted in regards to "{r.aboutToy.name}"
          </li>
        ))
      )}

      {!userReviews.length && <span>you havent posted any reviews yet</span>}
    </section>
  )
}