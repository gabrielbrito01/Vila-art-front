import React from 'react';
import { useParams } from 'react-router-dom';
import artisans from '../data/artisans.json';
import ProductCard from '../components/ProductCard';
import './Artisan.css'; 

const Artisan = () => {
  const { id } = useParams();
  const artisan = artisans.find((a) => a.id === id);

  if (!artisan) return <h2>Artesão não encontrado</h2>;

  return (
    <div className="artisan-detail">
      <div className="artisan-header">
        <img src={`/images/artesao-${artisan.id}.jpg`} alt={artisan.name} className="artisan-image" />
        <h1>{artisan.name}</h1>
        <p>{artisan.description}</p>
      </div>
      <h2>Produtos</h2>
      <div className="product-grid">
        {artisan.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Artisan;
