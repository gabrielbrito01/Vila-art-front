import React from 'react';
import './Apoio.css';

const Apoio = () => {
  return (
    <div className="apoio">
      <div className="apoio-header">
        <h1>Apoie os Artesãos</h1>
        <p>Saiba como você pode ajudar os artesãos locais a continuar com o trabalho incrível que realizam.</p>
      </div>

      <section className="apoio-content container">
        <div className="apoio-info">
          <h2>Por que Apoiar?</h2>
          <p>
            Os artesãos dedicam tempo e talento para criar produtos únicos, com materiais de qualidade e técnicas
            tradicionais. Ao comprar produtos artesanais, você ajuda a preservar a cultura local e oferece suporte
            direto às famílias desses artistas. Seja um apoiador do artesanato e faça parte dessa rede de valorização
            cultural.
          </p>
          <button className="btn-primary">Saiba Como Ajudar</button>
        </div>

        <div className="apoio-image">
          <img src="https://example.com/apoio-artesao.jpg" alt="Apoiar os Artesãos" />
        </div>
      </section>
    </div>
  );
};

export default Apoio;
