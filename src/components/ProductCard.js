import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>Preço: {product.price}</p>
    </div>
  );
};

export default ProductCard;
