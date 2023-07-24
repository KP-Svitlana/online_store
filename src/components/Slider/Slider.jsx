import { useState, useCallback, useEffect } from "react";
import slide1 from '../../assets/img/SignUpPage_desktop_1x.png';
import slide2 from '../../assets/img/SignUpPage_desktop_2x.png';
import './style.css';

const Slider = () => {
  const slides = [
    {
      imageUrl: slide1,
      text: 'Перший слайд з текстом',
    },
    {
      imageUrl: slide2,
      text: 'Другий слайд з текстом',
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="slider">
      <div className="slider-slides">
        {slides.map(({ imageUrl, text }, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
            <div className="slide-text">{text}</div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button className="slider-prev" onClick={prevSlide}>Previous</button>
        <button className="slider-next" onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
