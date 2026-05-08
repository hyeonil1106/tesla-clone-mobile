import React from 'react';

const Header = () => {
  return (
    <header className="nanum-gothic-regular">
      <nav>
        <p className="logo nanum-gothic-bold">TESLA</p>
        <p className="menu-icon nanum-gothic-bold">메뉴</p>
      </nav>
      <div className="header-content">
        <h2 className="nanum-gothic-extrabold">Model 3</h2>
        <div className="btn-wrap">
          <button className="btn-blue">주문하기</button>
          <button className="btn-white">시승신청</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
