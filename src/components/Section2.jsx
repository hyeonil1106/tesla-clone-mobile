import React from 'react';

const Section2 = () => {
  return (
    <section id="s2">
      <div className="s2-card item01">
        <div className="s2-img"></div>
        <div className="s2-text">
          <h2 className="nanum-gothic-extrabold">Tesla 경험하기</h2>
          <p className="nanum-gothic-regular">지금 시승 신청하세요</p>
          <div className="btn-wrap">
            <button className="btn-white">시승 신청하기</button>
          </div>
        </div>
      </div>
      <div className="s2-card item02">
        <div className="s2-img"></div>
        <div className="s2-text">
          <h2 className="nanum-gothic-extrabold">엑세서리</h2>
          <p className="nanum-gothic-regular">차량 액세서리 및 Tesla 브랜드 상품을 만나보세요.</p>
          <div className="btn-wrap">
            <button className="btn-white">지금 쇼핑하기</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
