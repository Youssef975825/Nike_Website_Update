import React, { useEffect, useRef } from 'react';

const reviewsData = [
  { name: 'Sarah K', image: 'image/girl_dp1.jpg', comment: 'The design is mind-blowing! It literally feels like wearing futuristic gear straight out of the metaverse. Super comfortable too.' },
  { name: 'Alex M', image: 'image/man_dp1.jpg', comment: 'The 3D aesthetic of the store matched the actual quality of the sneakers. Fast shipping and top-tier materials!' },
  { name: 'David L', image: 'image/man_dp2.jpg', comment: 'Unmatched cushioning and sleek neon details. Every time I wear them, people ask where I got them.' },
  { name: 'Nico Williams', image: 'image/man_dp3.jpg', comment: 'Unmatched cushioning and sleek neon details. Every time I wear them, people ask where I got them.' },
  { name: 'Lara S', image: 'image/gir_dp3.jpg', comment: 'Unmatched cushioning and sleek neon details. Every time I wear them, people ask where I got them.' },
  { name: 'Mary J', image: 'image/gir_dp2.jpg', comment: 'Unmatched cushioning and sleek neon details. Every time I wear them, people ask where I got them.' },
];

// Horizontal gap between cards, matching the Tailwind `gap-6` utility (1.5rem = 24px).
// Used to calculate exactly how far to shift scrollLeft when recycling a card.
const CARD_GAP_PX = 24;

export const ReviewSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Constant horizontal scroll speed, in pixels per animation frame.
  const scrollSpeed = 0.8;

  // Tracks whether auto-scrolling is currently paused (e.g. on hover).
  const isPausedRef = useRef(false);

  // Holds the requestAnimationFrame id so it can be cancelled on unmount.
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Main animation loop: advances scrollLeft by a fixed amount each frame.
    // Instead of duplicating the review data, the loop "recycles" DOM nodes:
    // once the first card has fully scrolled out of view on the left, it is
    // physically moved to the end of the track (appendChild), and scrollLeft
    // is decreased by that card's width in the same frame. Both changes
    // happen together, so nothing visibly jumps and the list only ever
    // contains the original set of cards.
    const animate = () => {
      if (!isPausedRef.current && carousel) {
        carousel.scrollLeft += scrollSpeed;

        // Keep recycling while the first card is fully scrolled past
        // (handles the rare case of more than one card needing a shift
        // in the same frame).
        let firstChild = carousel.firstElementChild as HTMLElement | null;
        while (firstChild) {
          const firstChildFullWidth = firstChild.offsetWidth + CARD_GAP_PX;
          if (carousel.scrollLeft < firstChildFullWidth) break;

          carousel.appendChild(firstChild);
          carousel.scrollLeft -= firstChildFullWidth;

          firstChild = carousel.firstElementChild as HTMLElement | null;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Small timeout delay to ensure elements are fully rendered and dimensions are accessible locally
    const timer = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animate);
    }, 100);

    // Pause on hover, resume when the mouse leaves.
    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };
    const handleMouseLeave = () => {
      isPausedRef.current = false;
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="Review" className="w-full py-24 bg-gray-50 dark:bg-gray-900 transition-colors relative">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center uppercase mb-16 dark:text-white flex items-center justify-center">
        Customer's <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent ml-3">Review</span>
      </h1>

      {/* Marquee container: the no-scrollbar utility keeps the scrollbar
          fully hidden while requestAnimationFrame drives the automatic,
          continuous scroll and recycles cards from front to back. */}
      <div
        ref={carouselRef}
        className="review-carousel no-scrollbar max-w-5xl mx-auto flex overflow-x-auto gap-6 px-6 pb-12"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE / legacy Edge
          // Force instant scroll updates. If a global CSS rule sets
          // `scroll-behavior: smooth` (common in Tailwind boilerplates), it
          // would fight the per-frame scrollLeft updates below and cause
          // stutter instead of smooth continuous motion.
          scrollBehavior: 'auto',
        }}
      >
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className="review-slide min-w-[300px] sm:min-w-[380px] flex-shrink-0 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-md hover:scale-[1.2] cursor-pointer">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">{review.name}</h3>
                  <div className="text-yellow-400 text-xs mt-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Fallback for WebKit-based browsers (Chrome, Safari, Edge), since
          the `scrollbarWidth` / `msOverflowStyle` inline styles above only
          cover Firefox and legacy IE/Edge. */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};