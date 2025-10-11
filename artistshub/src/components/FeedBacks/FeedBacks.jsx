import React, { useState, useEffect } from "react";
import s from "./FeedBacks.module.css";
import StarRating from "./Rating.jsx";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FeedBacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://sound-wave.b.goit.study/api/feedbacks?limit=5&page=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedbacks(data.data);
      });
  }, []);
  return (
    <div className={s.section}>
      <div className="container">
        <ul>
          {feedbacks.length > 0 &&
            feedbacks.map((feedback) => {
              return (
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >
                  <li>
                    <StarRating
                      value={feedback.rating}
                      isChange={false}
                    ></StarRating>
                    <p className={s.description}>{feedback.descr}</p>
                    <p className={s.name}>{feedback.name}</p>
                  </li>
                </Swiper>     
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default FeedBacks;
