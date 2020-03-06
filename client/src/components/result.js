import React from "react";
import pagedown from "../assets/Icons/SVG/Vector.svg";
import bImg from "../assets/Logo/bottom.svg";
function result() {
  return (
    <div className="result">
      <img className="result__img" src={pagedown} alt="pagedown" />
      <div className="result__info">
        <h2 className="result__title">Ideal Posting Dates</h2>
        <div className="result__chart">
          <iframe
            frameborder="0"
            scrolling="no"
            src="//plot.ly/~sdlee94/1.embed"
          ></iframe>
        </div>
        <p className="result__description">
          Posting on high traffic days would help you; the higher the number,
          the better for you.
        </p>
      </div>
      <div className="result__data">
        <div className="result__first">
          <h2 className="result__data-title">Title Word Count</h2>
          <div className="result__spanWrap">
            <span className="result__span1">Too litte</span>
            <span className="result__span2">Good</span>
            <span className="result__span3">Too Much</span>
          </div>
          <h2>Title Word Count: </h2>
        </div>

        <div className="result__second">
          <h2 className="result__data-title">Image Count</h2>
          <div className="result__spanWrap">
            <span className="result__span1">Too litte</span>
            <span className="result__span2">Good</span>
            <span className="result__span3">Too Much</span>
          </div>
          <h2>Total Image Count: </h2>
        </div>
      </div>
      <div className="result__third">
        <div>
          <h2 className="result__data-title">Content Word Count</h2>
          <div className="result__spanWrap">
            <span className="result__span1">Too litte</span>
            <span className="result__span2">Good</span>
            <span className="result__span3">Too Much</span>
          </div>
          <h2>Total Word Count: </h2>
        </div>

        <div className="result__third-img">
          <img src={bImg} alt="bottom" />
        </div>
      </div>
    </div>
  );
}
export default result;
