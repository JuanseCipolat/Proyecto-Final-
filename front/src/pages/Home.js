import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/components/pages/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [lanzamientos, setLanzamientos] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/noticias');
        setNoticias(response.data);
      } catch (error) {
        console.error("Error fetching noticias:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    const fetchLanzamientos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/productos');
        setLanzamientos(response.data);
      } catch (error) {
        console.error("Error fetching lanzamientos:", error);
      }
    };

    fetchNoticias();
    fetchReviews();
    fetchLanzamientos();
  }, []);

  return (
    <div>
      <main>
        <section className="news-carousel">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {noticias.map((noticia) => (
              <SwiperSlide key={noticia.id}>
                <img src={noticia.imagen} alt={noticia.titulo} />
                <div className="carousel-caption">
                  <h3>{noticia.titulo}</h3>
                  <button onClick={() => navigate('/Noticias')}>Leer más</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="home-sections">
          <div className="ultimoslanzamientos">
            <h2>Últimos Lanzamientos</h2>
            {lanzamientos.map((lanzamiento) => (
              <div key={lanzamiento.id} className="lanzamiento">
                <h3>{lanzamiento.titulo}</h3>
                <p>{lanzamiento.contenido}</p>
              </div>
            ))}
          </div>

          <div className="reviews-main">
            <h2>Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id} className="review">
                <h3>{review.titulo}</h3>
                <p>{review.contenido}</p>
                <a href="#" onClick={() => navigate('/Reviews')} className="leer-mas">Leer más</a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
