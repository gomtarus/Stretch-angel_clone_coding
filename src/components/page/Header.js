import "../css/common.css";
import styles from "../css/Header.module.css";

import * as Scroll from "react-scroll";

import { useState, useEffect } from "react";

function Main() {
  var React = require("react");
  var Scroll = require("react-scroll");

  var Link = Scroll.Link;
  var Button = Scroll.Button;
  var Element = Scroll.Element;
  var Events = Scroll.Events;
  var scroll = Scroll.animateScroll;
  var scrollSpy = Scroll.scrollSpy;

  const [popup, setPopup] = useState({ display: "block" });
  const [popupCount, setPopupCount] = useState(0);
  //팝업 닫기  & 팝업 카운트
  const [position, setPosition] = useState(0);
  const [opacity, setOpacity] = useState({ opacity: "0.5" });
  //스크롤 & 투명도
  const [scrollHide, setScrollGroup] = useState({ display: "none" });
  //스크롤그룹

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (position > 500) {
      setScrollGroup({ display: "block" });
    }
    if (position > 40) {
      setPopup({ display: "none" });
      setOpacity({ opacity: "1" });
    } else {
      if (popupCount === 0) {
        setPopup({ display: "block" });
      }
      //팝업 카운트가 0일때만 다시 살려주기
      setOpacity({ opacity: "0.5" });
      setScrollGroup({ display: "none" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const close_Popup = () => {
    setPopup({ display: "none" });
    setPopupCount(1);
  };

  //--------------------------
  const MoveToTop = () => {
    scroll.scrollToTop();
  };

  const MoveToBottom = () => {
    scroll.scrollToBottom();
  };

  //--------------------------

  return (
    <div className={styles.main_wrap}>
      <div className={styles.scroll_group} style={scrollHide}>
        <img
          src={require("../img/main/header/q_r_top.png")}
          alt="위로"
          style={{ marginBottom: "15px" }}
          onClick={MoveToTop}
        />
        <img
          src={require("../img/main/header/q_r_bt.png")}
          alt="아래로"
          onClick={MoveToBottom}
        />
      </div>
      <div className={styles.top_wrap}>
        <div className={styles.event_popup_wrap} style={popup}>
          <div className={styles.event_popup}>
            <span>
              지금 신규 회원 가입 시 7,000포인트를 바로 증정해 드립니다!
            </span>
            <div
              className={styles.event_popup_close}
              onClick={close_Popup}
            ></div>
          </div>
        </div>
        {/*팝업*/}
        <div className={styles.header_wrap}>
          <div className={styles.header_main} style={opacity}></div>
          <div className={styles.header}>
            <a href="#!">
              <img
                className={styles.logo}
                src={require("../img/main/header/top_logo.png")}
                alt="메인로고"
              />
            </a>
            {/*로고*/}
            <div className={styles.top_nav}>
              <ul className={styles.menu_wrap}>
                <li>
                  <a href="#!">BEST</a>
                  <div className={styles.menu_cover1}>
                    <ul className={styles.menu_1}>
                      <li>
                        <a href="#!">BAG</a>
                      </li>
                      <li>
                        <a href="#!">TOP</a>
                      </li>
                      <li>
                        <a href="#!">BOTTOM</a>
                      </li>
                      <li>
                        <a href="#!">ONEPIECE</a>
                      </li>
                      <li>
                        <a href="#!">OUTER</a>
                      </li>
                      <li>
                        <a href="#!">ACC</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#!">ALL</a>
                  <div className={styles.menu_cover1}>
                    <ul className={styles.menu_1}>
                      <li>
                        <a href="#!">
                          BAG
                          <img
                            className={styles.more_arrow}
                            src={require("../img/main/header/more_arrow.png")}
                            alt="더보기"
                          />
                        </a>
                        <div
                          className={styles.menu_cover2}
                          style={{ top: "-10px" }}
                        >
                          <ul className={styles.menu_2}>
                            <li>
                              <a href="#!">HOBO</a>
                            </li>
                            <li>
                              <a href="#!">PANINI</a>
                            </li>
                            <li>
                              <a href="#!">BUCKET</a>
                            </li>
                            <li>
                              <a href="#!">CROSS</a>
                            </li>
                            <li>
                              <a href="#!">TOTE</a>
                            </li>
                            <li>
                              <a href="#!">BACKPACK</a>
                            </li>
                            <li>
                              <a href="#!">ETC</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#!">
                          CLOTHES
                          <img
                            className={styles.more_arrow}
                            src={require("../img/main/header/more_arrow.png")}
                            alt="더보기"
                          />
                        </a>

                        <div
                          className={styles.menu_cover2}
                          style={{ top: "25px" }}
                        >
                          <ul className={styles.menu_2}>
                            <li>
                              <a href="#!">
                                TOP
                                <img
                                  className={styles.more_arrow}
                                  src={require("../img/main/header/more_arrow.png")}
                                  alt="더보기"
                                />
                              </a>
                              <div
                                className={styles.menu_cover3}
                                style={{ top: "-1px" }}
                              >
                                <ul className={styles.menu_3}>
                                  <li>
                                    <a href="#!">T-shirt</a>
                                  </li>
                                  <li>
                                    <a href="#!">Sweatshirt</a>
                                  </li>
                                  <li>
                                    <a href="#!">{"Hoody&Zi..."}</a>
                                  </li>
                                  <li>
                                    <a href="#!">Knit</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="#!">
                                BOTTOM
                                <img
                                  className={styles.more_arrow}
                                  src={require("../img/main/header/more_arrow.png")}
                                  alt="더보기"
                                />
                              </a>
                              <div
                                className={styles.menu_cover3}
                                style={{ top: "34px" }}
                              >
                                <ul className={styles.menu_3}>
                                  <li>
                                    <a href="#!">T-shirt</a>
                                  </li>
                                  <li>
                                    <a href="#!">Sweatshirt</a>
                                  </li>
                                  <li>
                                    <a href="#!">{"Hoody&Zi..."}</a>
                                  </li>
                                  <li>
                                    <a href="#!">Knit</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="#!">ONEPIECE</a>
                            </li>
                            <li>
                              <a href="#!">OUTER</a>
                            </li>
                            <li>
                              <a href="#!">SET UP</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#!">
                          ACC
                          <img
                            className={styles.more_arrow}
                            src={require("../img/main/header/more_arrow.png")}
                            alt="더보기"
                          />
                        </a>
                        <div
                          className={styles.menu_cover2}
                          style={{ top: "55px" }}
                        >
                          <ul className={styles.menu_2}>
                            <li>
                              <a href="#!">Bag Acc</a>
                            </li>
                            <li>
                              <a href="#!">{"Cap&Buck..."}</a>
                            </li>
                            <li>
                              <a href="#!">Socks</a>
                            </li>
                            <li>
                              <a href="#!">ETC</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#!">HOBO</a>
                </li>
                <li>
                  <a href="#!">PANINI</a>
                </li>
                <li>
                  <a href="#!">BUCKET</a>
                </li>
                <li>
                  <a href="#!">CROSS</a>
                </li>
                <li>
                  <a href="#!">CLOTHES</a>
                  <div className={styles.menu_cover1}>
                    <ul className={styles.menu_1}>
                      <li>
                        <a href="#!">
                          TOP
                          <img
                            className={styles.more_arrow}
                            src={require("../img/main/header/more_arrow.png")}
                            alt="더보기"
                          />
                        </a>
                        <div
                          className={styles.menu_cover2}
                          style={{ top: "-10px" }}
                        >
                          <ul className={styles.menu_2}>
                            <li>
                              <a href="#!">T-shirt</a>
                            </li>
                            <li>
                              <a href="#!">Sweatshirt</a>
                            </li>
                            <li>
                              <a href="#!">{"Hoody&Zi..."}</a>
                            </li>
                            <li>
                              <a href="#!">Knit</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#!">
                          BOTTOM
                          <img
                            className={styles.more_arrow}
                            src={require("../img/main/header/more_arrow.png")}
                            alt="더보기"
                          />
                        </a>
                        <div
                          className={styles.menu_cover2}
                          style={{ top: "24px" }}
                        >
                          <ul className={styles.menu_2}>
                            <li>
                              <a href="#!">Pants</a>
                            </li>
                            <li>
                              <a href="#!">Short-Pants</a>
                            </li>
                            <li>
                              <a href="#!">Leggings</a>
                            </li>
                            <li>
                              <a href="#!">Skirt</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a href="#!">ACC</a>
                      </li>
                      <li>
                        <a href="#!">OUTER</a>
                      </li>
                      <li>
                        <a href="#!">SET UP</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#!">OUTLET</a>
                  <div className={styles.menu_cover1}>
                    <ul className={styles.menu_1}>
                      <li>
                        <a href="#!">CLOTHES</a>
                      </li>
                      <li>
                        <a href="#!">BAG</a>
                      </li>
                      <li>
                        <a href="#!">ACC</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#!">COMMUNITY</a>
                  <div className={styles.menu_cover1}>
                    <ul className={styles.menu_1}>
                      <li>
                        <a href="#!">공지사항</a>
                      </li>
                      <li>
                        <a href="#!">이용안내 FAQ</a>
                      </li>
                      <li>
                        <a href="#!">이벤트</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/*네비*/}
            <div className={styles.top_menu}>
              <ul>
                <li>
                  <img
                    src={require("../img/main/header/top_wish.png")}
                    alt="찜"
                  />
                </li>
                <li>
                  <img
                    src={require("../img/main/header/top_search.png")}
                    alt="검색"
                  />
                </li>
                <li>
                  <img
                    src={require("../img/main/header/top_cart.png")}
                    alt="장바구니"
                  />
                </li>
                <li>
                  <img
                    src={require("../img/main/header/top_my.png")}
                    alt="로그인"
                  />
                </li>
              </ul>
            </div>
            {/*메뉴그룹*/}
          </div>
        </div>
        {/*헤더*/}
      </div>
    </div>
  );
}

export default Main;
