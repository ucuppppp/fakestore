import React from "react";

const StarRating = ({ rating }) => {
  const percentage = (rating / 5) * 100; // Konversi rating ke persen

  return (
    <div className="relative text-[var(--secondary)] text-xs sm:text-sm  md:text-base lg:text-sm xl:text-base flex dark:text-[var(--primary)]">
      {/* Background bintang kosong */}
      <div className="flex">
        {"★★★★★".split("").map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
      {/* Overlay bintang penuh */}
      <div
        className="absolute top-0 left-0 flex text-[var(--primary)] overflow-hidden dark:text-[var(--secondary)]"
        style={{ width: `${percentage}%` }}
      >
        {"★★★★★".split("").map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
