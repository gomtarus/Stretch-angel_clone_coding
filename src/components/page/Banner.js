import "../css/common.css";
import styles from "../css/Banner.module.css";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Banner() {
  const StyledSlider = styled(Slider)`
    .slick-list {
      width: 1920px;
    }

    .slick-prev,
    .slick-next {
      opacity: 0;
      background-color: white;
      transition: 0.5s;
    }
    //초기 상태는 투명에 배경 하얀색
    //배경 지정안해주면 hover시 사라짐

    .slick-prev::before,
    .slick-next::before {
      opacity: 1;
      display: none;
    }
    .slick-slide div {
      cursor: pointer;
    }

    &:hover {
        .slick-prev,
        .slick-next {
          opacity: 1;
        }
      }
    }
    //hover시 투명 0.9로
    //---------------

    .custom-dots {
      width: 100%;
      bottom: 40px;
      list-style: none;
      text-align: center;
      position: absolute;
    }

    .custom-dots li {
      display: inline-block;
      padding: 0px 5px;
      cursor: pointer;
    }

    .custom-dots li button {
      width: 20px;
      height: 4px;
      border: none;
      color: transparent;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.3);
    }

    .custom-dots li.slick-active button {
      background-color: white;
    }
  `;

  const PrevBtn = styled.div`
    width: 65px;
    height: 65px;
    margin-left: 100px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    transition: 0.3s;
    z-index: 99;
  `;

  const NextBtn = styled.div`
    width: 65px;
    height: 65px;
    margin-right: 100px;
    background-color: white;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    transition: 0.3s;
    z-index: 99;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    dotsClass: "custom-dots",
    nextArrow: (
      <NextBtn>
        <img
          src={require("../img/main/banner/btn_slide.png")}
          className={styles.arrow}
          style={{ transform: "rotate(180deg)" }}
          alt="next"
        />
      </NextBtn>
    ),
    prevArrow: (
      <PrevBtn>
        <img
          src={require("../img/main/banner/btn_slide.png")}
          className={styles.arrow}
          alt="prev"
        />
      </PrevBtn>
    ),
  };
  // 기본 설정

  return (
    <div className={styles.banner_wrap}>
      <StyledSlider {...settings}>
        <img
          src={require("../img/main/banner/main_bn_pc01.jpg")}
          alt="배너_1"
        />
        <img
          src={require("../img/main/banner/main_bn_pc02.jpg")}
          alt="배너_2"
        />
        <img
          src={require("../img/main/banner/main_bn_pc03.jpg")}
          alt="배너_3"
        />
        <img
          src={require("../img/main/banner/main_bn_pc04.jpg")}
          alt="배너_4"
        />
      </StyledSlider>
    </div>
  );
}

export default Banner;
