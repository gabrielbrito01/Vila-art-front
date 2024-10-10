import React from 'react';
import './Feira.css';

const Feira = () => {
  return (
    <div className="feira">
      <div className="feira-header">
        <h1>Feira de Artesanato</h1>
        <p>Descubra a beleza e autenticidade das criações dos artesãos locais.</p>
      </div>

      <section className="feira-content container">
        <div className="feira-info">
          <h2>Sobre a Feira</h2>
          <p>
            A Feira de Artesanato da Vila é um evento que reúne os melhores artesãos de Campina Grande. Aqui, você pode
            explorar uma variedade de produtos feitos à mão, desde peças decorativas até utensílios práticos para o
            dia a dia. Visite a feira e apoie o trabalho dos nossos talentosos artistas!
          </p>
          <button className="btn-primary">Ver Mais Produtos</button>
        </div>

        <div className="feira-image">
          <img src="https://example.com/artesanato-feira.jpg" alt="Feira de Artesanato" />
        </div>
      </section>
    </div>
  );
};

export default Feira;
