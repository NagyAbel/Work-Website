import "./reviews.css";
import reviewsData from "../../assets/reviews.json";
import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

function shuffleReviews(reviews) {
  const result = [];
  const remaining = [...reviews];

  while (remaining.length > 0) {
    const last = result[result.length - 1]?.name;

    const available = remaining.filter(
      (review) => review.name !== last
    );

    const pool = available.length > 0 ? available : remaining;

    const index = Math.floor(Math.random() * pool.length);
    const selected = pool[index];

    result.push(selected);

    remaining.splice(
      remaining.indexOf(selected),
      1
    );
  }

  return result;
}

function Reviews() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const reviews = useMemo(() => {
    const shuffled = shuffleReviews(reviewsData.reviews);
    return [...shuffled, ...shuffled];
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let animation;

    const scroll = () => {
      container.scrollLeft += 1;

      // Restart smoothly when the first copy ends
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animation = requestAnimationFrame(scroll);
    };

    animation = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <section className="reviews">
      <h2>{t("review_title")}</h2>

      {/* Wrapper added here for seamless left & right fade overlays */}
      <div className="reviews-wrapper">
        <div
          className="reviews-container"
          ref={containerRef}
        >
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <div className="avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>

                <h3>{review.name}</h3>
              </div>

              <p>"{review.message}"</p>

              <div className="stars">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        className="fiverr-button"
        href="https://www.fiverr.com/userrx11" // Replace with your link
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("fiverr_button_text") /* Or use plain text like "See all reviews on Fiverr" */}
      </a>
    </section>
  );
}

export default Reviews;