import { useState } from "react";
import "./slider.css";
import ArrowButton from "./../arrowButton/ArrowButton";

const Slider = ({ children }) => {
  const [activeId, setActiveId] = useState(0);

  const prev = () => {
    setActiveId((activeId) => {
      if (activeId > 0) {
        return activeId - 1;
      }
      return activeId;
    });
  };

  const next = () => {
    setActiveId((activeId) => {
      if (activeId < children.length - 1) {
        return activeId + 1;
      }
      return activeId;
    });
  };
  return (
    <div className="slider-wrapper">
      <ArrowButton direction="left" onClick={prev} disable={activeId === 0} />
      <div className="slider-actions">
        {children.map((slide, idx) => (
          <div
            key={idx}
            className={`slide${idx === activeId ? " active" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <ArrowButton
        direction="right"
        onClick={next}
        disable={activeId === children.length - 1}
      />
    </div>
  );
};

export default Slider;
