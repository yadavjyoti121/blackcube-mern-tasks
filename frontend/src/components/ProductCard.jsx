const ProductCard = ({ product, onLikeToggle, onEdit }) => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  const isLiked = user && product.likes ? product.likes.includes(user._id) : false;

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image || 'https://placehold.co/600x450?text=Blackcube'} alt={product.title} />
      </div>

      <div className="product-card__body">
        <h3>{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="price">Rs. {product.price}</p>
      </div>

      <div className="product-card__actions">
        <button
          onClick={() => onLikeToggle(product._id)}
          className={`icon-action${isLiked ? ' is-active' : ''}`}
        >
          {isLiked ? 'Liked' : 'Like'} ({product.likes?.length || 0})
        </button>

        {user && product.createdBy === user._id && (
          <button onClick={() => onEdit(product)} className="btn btn--warning">Edit</button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
