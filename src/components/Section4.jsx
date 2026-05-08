import React from 'react';
import icon01 from '../assets/icons/icon01.svg';
import icon02 from '../assets/icons/icon02.svg';

const Section4 = () => {
  return (
    <section id="s4">
      <div className="s4-img"></div>
      <div className="s4-text">
        <div className="s4-text-1">
          <h2 className="nanum-gothic-extrabold">충전</h2>
          <p className="nanum-gothic-regular">
            주변에서 이용 가능한 Tesla 슈퍼차저 및 데스티네이션 차저
            네트워크를 확인해 보세요
          </p>
        </div>
        <div className="s4-text-2">
          <div className="s4-text-icons">
            <div className="s4-text-icons-num">
              <h2 className="nanum-gothic-extrabold">7,342</h2>
              <img src={icon02} alt="번개 아이콘" />
            </div>
            <p className="nanum-gothic-regular">수퍼차저</p>
          </div>
          <div className="s4-text-icons">
            <div className="s4-text-icons-num">
              <h2 className="nanum-gothic-extrabold">711</h2>
              <img src={icon01} alt="충전아이콘" />
            </div>
            <p className="nanum-gothic-regular">데스티네이션 차져</p>
          </div>
        </div>
        <div className="btn-wrap">
          <button className="btn-black">충전 네트워크보기</button>
          <button className="btn-white">자세히 알아보기</button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
