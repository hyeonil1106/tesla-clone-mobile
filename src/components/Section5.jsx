import React from 'react';

const Section5 = () => {
  return (
    <section id="s5">
      <div className="s5-cardlist">
        <div className="s5-card item01">
          <div className="s5-card-text">
            <h2 className="nanum-gothic-extrabold">Powerwall</h2>
            <p className="nanum-gothic-regular">정전 시에도 조명은 그대로</p>
            <div className="btn-wrap">
              <button className="btn-blue">자세히 알아보기</button>
            </div>
          </div>
        </div>
        <div className="s5-card item02">
          <div className="s5-card-text">
            <h2 className="nanum-gothic-extrabold">Megapack</h2>
            <p className="nanum-gothic-regular">대규모 에너지 공급을 위한 초대형 배터리 시스템</p>
            <div className="btn-wrap">
              <button className="btn-blue">자세히 알아보기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="indicator">
        <div className="active"></div>
        <div></div>
      </div>
    </section>
  );
};

export default Section5;
