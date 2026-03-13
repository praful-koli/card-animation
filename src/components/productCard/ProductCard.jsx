import './ProductCard.css';

function ProductCard({ product }) {
  const { name, price, category, hp, type, rarity, image, attack, description } = product;

  const rarityClass = rarity.toLowerCase().replace(' ', '-');

  return (
    <div className={`card ${rarityClass}`}>
      <div className="card-inner">

        {/* Card Header */}
        <div className="card-header">
          <div className="card-name-hp">
            <span className="card-name">{name}</span>
            <span className="card-hp">HP <strong>{hp}</strong></span>
          </div>
          <div className="card-type-badge">{type} {category}</div>
        </div>

        {/* Image Zone */}
        <div className="card-image-zone">
          <div className="image-frame">
            <div className="shine-overlay"></div>
            <img src={image} alt={name} className="card-img" />
          </div>
          <div className="rarity-tag">{rarity}</div>
        </div>

        {/* Description */}
        <div className="card-description">
          <p>{description}</p>
        </div>

        {/* Attack */}
        <div className="card-attack">
          <div className="attack-cost">{type}{type}</div>
          <div className="attack-info">
            <span className="attack-name">{attack}</span>
            <span className="attack-damage">120</span>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <div className="price-tag">
            <span className="price-label">Price</span>
            <span className="price-value">{price}</span>
          </div>
          <button className="add-to-cart-btn" onClick={() => alert(`${name} added to cart! 🎉`)}>
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
