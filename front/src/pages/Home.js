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
  const [retro, setRetro] = useState([]);
  const [shop, setShop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const noticiasRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/noticias`);
        setNoticias(noticiasRes.data);

        const reviewsRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/reviews`);
        setReviews(reviewsRes.data);

        const retroRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/retro`);
        setRetro(retroRes.data);

        const shopRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
        setShop(shopRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <main>
        {/* Carousel de Noticias */}
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

        {/* Secciones del Home */}
        <div className="home-sections">
          {/* Sección Reviews */}
          <div className="section-container">
            <h2>Reviews</h2>
            <div className="item-list">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="item-card">
                  <img src={review.imagen} alt={review.titulo} className="small-image" />
                  <h3>{review.titulo}</h3>
                  <p>{review.contenido.substring(0, 100)}...</p>
                  <button onClick={() => navigate('/Reviews')}>Leer más</button>
                </div>
              ))}
            </div>
          </div>

          {/* Sección Retro */}
          <div className="section-container">
            <h2>Retro</h2>
            <div className="item-list">
              {retro.slice(0, 3).map((item) => (
                <div key={item.id} className="item-card">
                  <img src={item.imagen} alt={item.titulo} className="small-image" />
                  <h3>{item.titulo}</h3>
                  <p>{item.contenido.substring(0, 100)}...</p>
                  <button onClick={() => navigate('/Retro')}>Leer más</button>
                </div>
              ))}
            </div>
          </div>

          {/* Sección Shop */}
          <div className="section-container">
            <h2>Shop</h2>
            <div className="item-list">
              {shop.slice(0, 3).map((producto) => (
                <div key={producto.id} className="item-card">
                  <img src={producto.imagen} alt={producto.titulo} className="small-image" />
                  <h3>{producto.titulo}</h3>
                  <p>{producto.descripcion.substring(0, 100)}...</p>
                  <button onClick={() => navigate('/Shop')}>Ver producto</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
