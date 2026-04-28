function Catalog() {
  const products = [
    {
      id: 1,
      image: '/images/product-images/product image update 2.png',
      name: 'Double Shield',
      price: 'GH₵80.00',
      link: 'https://paystack.com/buy/double-sheild-ajtukc'
    },
    {
      id: 2,
      image: '/images/product-images/product image update 3.png',
      name: 'Total Terminator',
      price: 'GH₵120.00',
      link: 'https://paystack.com/buy/total-terminator-pvurvg'
    },
    {
      id: 3,
      image: '/images/product-images/product image update 4.png',
      name: 'Twin Force',
      price: 'GH₵100.00',
      link: 'https://paystack.com/buy/twin-force-jqixwr'
    }
  ];

  return (
    <div id="catalog">
      <div className="title-container">
        <div className="line"></div>
        <span className="title-text">CATALOG</span>
        <div className="line"></div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href={product.link}>
              <button>Add to cart</button>
            </a>
          </div>
        ))}
      </div>
      <div className="storeFront">
        <a href="https://paystack.shop/nana-apeko">
          <button><h4>Shop now</h4></button>
        </a>
      </div>
    </div>
  );
}

export default Catalog;