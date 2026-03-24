function About() {
  return (
    <div id="about">
      <div className="title-container">
        <div className="line"></div>
        <span className="title-text">ABOUT</span>
        <div className="line"></div>
      </div>
      <div className="promo-section">
        <div className="promo-content">
          <div className="promo-text">
            <h2>Nana Apeko Bedbug Spray and Powder</h2>
            <p>
              A powerful organic solution to eliminate bedbugs and household
              pests.
            </p>
            <ul>
              <li>100% Natural Ingredients</li>
              <li>Safe for Home Use</li>
              <li>Effective Against Bedbugs, Cockroaches & Mosquitoes</li>
            </ul>
            <a href="#" className="cta">Learn More</a>
          </div>
          <div className="promo-image">
            <img
              src="/images/product-images/product update 1.png"
              alt="Nana Apeko Bedbug Spray"
            />
            <img
              src="/images/product-images/cluster.png"
              alt="Cluster Image"
              className="image2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;