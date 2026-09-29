import React from 'react'

function AboutUs() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="eyebrow">Rooted in care</div>
      <h2 id="about-heading">A little more green. A lot more joy.</h2>
      <div className="about-grid">
        <p>
          At Paradise Nursery, we believe every room deserves something living. Our
          small team selects healthy, characterful plants from responsible growers and
          helps them arrive at your home ready to thrive.
        </p>
        <p>
          Whether you are growing your first pothos or building an indoor jungle, we
          make plant care approachable with clear guidance, thoughtful packaging, and
          friendly support at every step.
        </p>
      </div>
      <div className="values" aria-label="Our values">
        <span>Responsibly grown</span>
        <span>Carefully packed</span>
        <span>Beginner friendly</span>
      </div>
    </section>
  )
}

export default AboutUs
