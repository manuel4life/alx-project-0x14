import React from "react";

interface MovieCardProps {
  title: string;
  year: string;
  imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
