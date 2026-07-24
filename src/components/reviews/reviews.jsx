import "./reviews.css";
import reviewsData from "../../assets/reviews.json";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function shuffleReviews(reviews) {
  const result = [];
  const remaining = [...reviews];

  while (remaining.length > 0) {
    const last = result[result.length - 1]?.name;
    const available = remaining.filter((review) => review.name !== last);
    const pool = available.length > 0 ? available : remaining;
    const index = Math.floor(Math.random() * pool.length);
    const selected = pool[index];

    result.push(selected);
    remaining.splice(remaining.indexOf(selected), 1);
  }

  return result;
}

function Reviews() {
  const containerRef = useRef(null);
  const isTouchingRef = useRef(false);
  
  // Drag-to-scroll state refs
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  
  const [isDragging, setIsDragging] = useState(false);
  const { t } = useTranslation();

  const reviews = useMemo(() => {
    const shuffled = shuffleReviews(reviewsData.reviews);
    return [...shuffled, ...shuffled];
  }, []);

  // 1. Auto-scroll animation frame loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;

    const scroll = () => {
      // Pause ONLY when actively dragging with mouse or holding/swiping on touch screens
      if (!isTouchingRef.current && !isMouseDownRef.current) {
        container.scrollLeft += 0.8; // Speed factor

        // Infinite wrap-around logic
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleTouchStart = () => { isTouchingRef.current = true; };
    const handleTouchEnd = () => { isTouchingRef.current = false; };

    // Prevent default scroll behavior on wheel/trackpad scroll
    const handleWheel = (e) => {
      e.preventDefault();
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // 2. Mouse Drag-to-Scroll Handlers
  const handleMouseDown = (e) => {
    const container = containerRef.current;
    if (!container) return;

    isMouseDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current) return;
    e.preventDefault();
    const container = containerRef.current;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity multiplier
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <section className="reviews">
      <h2>{t("review_title")}</h2>

      <div className="reviews-wrapper">
        <div
          className={`reviews-container ${isDragging ? "dragging" : ""}`}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
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

              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>

      <a
        className="fiverr-button"
        href="https://www.fiverr.com/userrx11"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("fiverr_button_text")}
      </a>
    </section>
  );
}

export default Reviews;