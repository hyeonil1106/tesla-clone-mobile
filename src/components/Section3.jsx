import React from 'react';
// import videoPath from '../assets/media/video01.mp4'; 비디오가 없을때
const Section3 = () => {
  return (
    <section id="s3">
      <video
        // src={videoPath} 비디오가 없을 때는 이렇게 경로를 직접 입력
        src="/src/assets/media/video01.mp4"
        controls
        loop
        autoPlay
        muted
        playsInline
      ></video>
      <div className="s3-text">
        <h2 className="nanum-gothic-extrabold">풀 셀프 드라이빙 (감독형)</h2>
        <div className="btn-wrap">
          <button className="btn-blue">자세히보기</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
