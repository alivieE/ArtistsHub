import React, { useState, useEffect } from "react";
import s from "./FeedBacks.module.css";
import Rating from "./Rating";

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
                    <li>
                      <Rating value={feedback.rating.toFixed(0)}></Rating>
                      <p className={s.description}>{feedback.descr}</p>                      
                      <p className={s.name}>{feedback.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      );
}

export default FeedBacks;
