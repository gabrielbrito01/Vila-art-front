import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faMapMarkerAlt, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const changeSlide = () => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % totalSlides;
      slides[currentSlide].classList.add('active');
    };

    const slideInterval = setInterval(changeSlide, 5000); 
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="home">
      {}
      <div className="slideshow">
        <div className="slide active">
          <img src="https://lh4.googleusercontent.com/proxy/7hbEhftNbHW2bTxyEfusQG02DhEaKy61ieguoeKxZEpFj5jLmkLC_V09lT_gry2YHPmtuPjpTvzriBuyu0s_na1LY82cKHH4ZjFxUJe-MvnDcsUHpAx0qPw3pbiCZc3su2GdAp8WlK0Cot293eTq-EBRDs1UuK8Pya6cP7LtHSzaaQOk6LGcZwWF78DVbDnWLhtB_GbQqIISeKjTzSBdqCkX6usuzSOJ4n1XSACrfXrkRT-f4xyCLICH-B33wbKBcA"
               alt="Vila do Artesanato" className="slide-image" />
        </div>
        <div className="slide">
          <img src="https://lh3.googleusercontent.com/proxy/FIpdy9pkP-Ib04905gW4ylPBamNF06s8GYjbkNiFl6A4MDBmg3eddxlVq6eJsL7SOj4XsFIELEhXBEm-dxxX8vq2hCKfEhC3muo9slABCf4SpZMJLwr0xX083ddtbxG167kgdV5QnaGIk1o57Sm1ZOoPl9SOW4ddKvw1NBsTVQUXtKUDbq8-gG9HV_g1uvW9grybIctk7Ceo3Jlm22v-FTzNsXhWfMAtbhYT4zZ9wgUPDCtF_gUzn-b3siZg9vBVuIM"
               alt="Artesanato em Exposição" className="slide-image" />
        </div>
      </div>

      {}
      <section className="highlights container">
        <div className="highlight-item">
          <FontAwesomeIcon icon={faShoppingBasket} size="3x" className="icon" />
          <h3>Feira de Artesanato</h3>
          <p>Explore produtos únicos criados pelos talentosos artesãos locais.</p>
          {}
          <Link to="/feira" className="btn-primary">Saiba Mais</Link>
        </div>

        <div className="highlight-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="icon" />
          <h3>Localização</h3>
          <p>Estamos localizados no coração de Campina Grande, próximo ao centro histórico.</p>
          {}
          <a href="https://goo.gl/maps/direcao-vila" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Mapa</a>
        </div>

        <div className="highlight-item">
          <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" className="icon" />
          <h3>Apoie os Artesãos</h3>
          <p>Ao comprar na Vila, você apoia diretamente os artesãos e suas famílias.</p>
          {}
          <Link to="/apoio" className="btn-primary">Apoiar</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
