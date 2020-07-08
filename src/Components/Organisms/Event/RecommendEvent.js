import React from "react";

const RecommendEvent = () => {
  return (
    <section className="recommendEvent">
      <div className="sectionTitleWrap">
        <h3 className="title">추천 이벤트</h3>
        <div className="indicator">
          <ul className="pagination">
            <li className="active">
              <span className="a11yHidden">첫번째 이벤트</span>
            </li>
            <li>
              <span className="a11yHidden">두번째 이벤트</span>
            </li>
            <li>
              <span className="a11yHidden">세번째 이벤트</span>
            </li>
          </ul>
          <button type="button" className="btnPrev">
            <span className="a11yHidden">이전 이벤트</span>
          </button>
          <button type="button" className="btnNext">
            <span className="a11yHidden">다음 이벤트</span>
          </button>
          <button type="button" className="btnPause">
            <span className="a11yHidden">일시정시</span>
          </button>
          <div className="eventCounter">1 / 3</div>
        </div>
      </div>
      <button type="button" className="btnLeft">
        <span className="a11yHidden">이전 이벤트</span>
      </button>
      <div className="eventContentWrap">
        <ul className="eventList">
          <li>
            <a href="#" className="eventItem">
              <div className="imgWrap">
                <img
                  src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/GcDx0cF1WsWfm11gJYI1J88kzV60DFD9.jpg"
                  alt=""
                />
              </div>
              <div className="eventContent">
                <h4 className="eventTitle">오리지널 티켓 No.16 온워드</h4>
                <p className="eventDate">2020.06.17 ~ 2020.07.14</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="eventItem">
              <div className="imgWrap">
                <img
                  src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/GcDx0cF1WsWfm11gJYI1J88kzV60DFD9.jpg"
                  alt=""
                />
              </div>
              <div className="eventContent">
                <h4 className="eventTitle">오리지널 티켓 No.16 온워드</h4>
                <p className="eventDate">2020.06.17 ~ 2020.07.14</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="eventItem">
              <div className="imgWrap">
                <img
                  src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/GcDx0cF1WsWfm11gJYI1J88kzV60DFD9.jpg"
                  alt=""
                />
              </div>
              <div className="eventContent">
                <h4 className="eventTitle">오리지널 티켓 No.16 온워드</h4>
                <p className="eventDate">2020.06.17 ~ 2020.07.14</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button type="button" className="btnRight">
        <span className="a11yHidden">다음 이벤트</span>
      </button>
    </section>
  );
};
export default React.memo(RecommendEvent);