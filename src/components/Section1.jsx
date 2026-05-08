import React from 'react';

const Section1 = () => {
  return (
    <section id="s1">
      <div className="s1-cardlist">
        <div className="s1-card item01">
          <h3 className="nanum-gothic-bold">미드사이즈 SUV</h3>
          <div className="bottom-text">
            <h2 className="nanum-gothic-extrabold">Model Y</h2>
            <div className="btn-wrap">
              <button className="btn-blue">주문하기</button>
              <button className="btn-white">자세히 알아보기</button>
            </div>
          </div>
        </div>
        <div className="s1-card item02">
          <h3 className="nanum-gothic-bold">유틸리티 트럭</h3>
          <div className="bottom-text">
            <h2 className="nanum-gothic-extrabold">CYBERTRUCK</h2>
            <div className="btn-wrap">
              <button className="btn-blue">주문하기</button>
              <button className="btn-white">자세히 알아보기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="indicator">
        <div className="active"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Section1;
