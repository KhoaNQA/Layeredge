import React from "react";
import { useNavigate } from "react-router-dom";
import "../BatchCard.css";
import { GoArrowRight } from "react-icons/go";

const BatchCard = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/batch/${id}`); // Navigate to BatchDetail with the batch ID
  };

  return (
    <div
      className="card flex w-full md:p-4 p-2 shadow-lg rounded-md items-center justify-between border border-transparent hover:border-white hover:border-opacity-15 cursor-pointer group/edit"
      onClick={handleClick}
    >
      <div className="max-w-[200px] font-bold text-white text-[min(4vw,0.9rem)] truncate-middle">
        {id}
      </div>
      <a className="group">
        <GoArrowRight
          size={20}
          className="text-gray-400 group-hover:text-white transition-colors duration-200"
        />
      </a>
    </div>
  );
};

export default BatchCard;
