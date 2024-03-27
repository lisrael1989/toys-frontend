import { GoogleMap } from "../cmps/GoogleMap";

export function AboutUs() {
  return (
    <section className="about-page">
      <h1 className="about-title">Welcome to Litvak Toy Store!</h1>
      <p>Litvak Toy Store is where dreams and play intertwine, serving the community with joy and imagination for over a decade. Our mission is simple: to spark creativity and bring smiles to children's faces through the power of play.</p>
      <h2>Our Philosophy</h2>
      <p>We believe in the transformative power of play. It's not just about toys; it's about fostering imagination, learning, and fun. Our carefully curated collection reflects this belief, offering toys that entertain, educate, and inspire.</p>
      <h2>Our Collection</h2>
      <p>From classic toys to the latest innovations, Litvak Toy Store has something for every child. Whether it’s a plush toy for a tender hug, a puzzle for a challenging joy, or eco-friendly toys for sustainable play, we've got you covered.</p>
      <h2>Community and Sustainability</h2>
      <p>As a cornerstone of our community, we host events that bring families together and support initiatives for accessible play. Our commitment to sustainability means choosing products and practices that are kind to our planet.</p>
      <h2>Visit Us</h2>
      <p>Looking for the perfect gift or a new adventure in play? Litvak Toy Store is your destination for all things fun. Join us in creating lasting memories and exploring the endless possibilities of imagination.</p>
      <h1 className="slogan-about">At Litvak Toy Store, every toy starts a story.</h1>

      <div>
        {<GoogleMap />}


      </div>
    </section>

  )
}
