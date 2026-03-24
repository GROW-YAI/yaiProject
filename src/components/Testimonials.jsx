function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: '/images/product-images/𝔸𝐯𝐚𝐭𝐚𝐫 𝔽𝐫𝐨𝐦 𝐭𝐡𝐞 ℍ𝐚𝐧𝐝𝐬 𝕐𝐨𝐮𝐫….jpg',
      name: 'Olivia Smith',
      text: 'Nana Apeko bedbug spray and power works wonders. Bedbugs, cocoches ,mosquitoes, chicken body louse have no place to hide. Theresa Ndenyi, Aboaso',
      cardClass: 'card-1'
    },
    {
      id: 2,
      image: '/images/product-images/Pfp by Robert Gallardo.jpg',
      name: 'Suleman Bukari',
      text: 'The product is indeed a household companion. All household pest are eliminated. Agya Boadi driver, Breman UGC',
      cardClass: 'card-2'
    },
    {
      id: 3,
      image: '/images/product-images/003ffc41-caa2-49e1-b0ad-e3113e07dda9.jpg',
      name: 'Kofi Siriboe',
      text: "The product was introduced to me for Bedbugs control. However it doesn't kill only bedbugs. Apart from bedbugs, cockroaches and house flies away. I have introduced it to school and college heads. Nana Collins, Taine Hene",
      cardClass: 'card-3'
    }
  ];

  return (
    <div>
      <div className="title-container">
        <div className="line"></div>
        <span className="title-text">Testimonials</span>
        <div className="line"></div>
      </div>

      <div className="testim-container">
        {testimonials.map((testimonial) => (
          <div className={`card ${testimonial.cardClass} avatar`} key={testimonial.id}>
            <img src={testimonial.image} alt="avatar" />
            <i className="fas fa-quote-left"></i>
            <p>{testimonial.text}</p>
            <p className="name">{testimonial.name}</p>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            {testimonial.id === 3 ? (
              <i className="fas fa-star-half-alt"></i>
            ) : (
              <i className="fas fa-star"></i>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;