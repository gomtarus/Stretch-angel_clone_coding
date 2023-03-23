import "../css/common.css";
import styles from "../css/MainProductList.module.css";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { useState } from "react";

import tempData from "../db/itemDB.json";

import Footer from "../page/Footer";

function MainProductList() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
  };
  // 기본 설정

  const StyledSlider = styled(Slider)`
    position: relative;
    max-width: 1740px;
  `;

  //슬라이드
  let [tapActive, setTapActive] = useState("");
  let [tapColor] = useState({ color: "#111" });

  const tapClick = (e) => {
    setTapActive(e.target.id);
  };

  const m_tap01 = tempData.bagType.map((list, idx) => {
    return (
      <li
        key={idx}
        id={idx}
        className={idx == tapActive ? styles.m_tap01_active : null}
        style={idx == tapActive ? tapColor : null}
        onClick={tapClick}
      >
        {list.itemType}
      </li>
    );
  });

  //tap 클릭 시 li의 고유 id값을 가져옴
  //이 id는 tapActive의 값이 됨
  //만약 버튼 클릭 시 idx와 tapActive 의 값이 일치 할 때
  //aaa스타일을 가지고있지 않는다면 추가한다.

  //-----------------------------------------------------
  let [tapSwitch] = useState({ zIndex: "999" });

  const idx_conver = (num) => {
    let i = num % 8;
    return i + 1;
  };

  const m_slider01 = tempData.bagType.map((list, idx) => {
    return (
      <div
        key={idx}
        id={idx}
        className={styles.m_slider_group}
        style={idx == tapActive ? tapSwitch : null}
      >
        <StyledSlider {...settings}>
          {tempData.bagItem.map((list, num) => {
            if (list.itemType === tempData.bagType[idx].itemType) {
              return (
                <>
                  <div className={styles.item_box}>
                    <div className={styles.item_img}>
                      <div className={styles.item_idx}>0{idx_conver(num)}</div>
                      <img
                        src={require(`../img/item/bag/${tempData.bagItem[num].itemName}_1.jpg`)}
                        alt={list.itemName}
                      />
                      <img
                        src={require(`../img/item/bag/${tempData.bagItem[num].itemName}.jpg`)}
                        alt={list.itemName}
                      />
                      <div className={styles.item_like}></div>
                    </div>
                    <ul>
                      <li>{list.itemName}</li>
                      <li>
                        <span className={styles.discount}>
                          {list.discount}%
                        </span>
                        <span className={styles.dis_price}>
                          {(list.price - list.price * (list.discount * 0.01))
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </span>
                        <span className={styles.price}>
                          {list.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </span>
                      </li>
                    </ul>
                  </div>
                </>
              );
            }
          })}
        </StyledSlider>
      </div>
    );
  });

  //BAG 아이템 슬라이드
  //-----------------------------------------------------
  //슬라이드
  let [tapActive1, setTapActive1] = useState("");
  let [tapColor1] = useState({ color: "#111" });
  let [tapSwitch1] = useState({ zIndex: "999" });

  const tapClick1 = (e) => {
    setTapActive1(e.target.id);
  };

  function conver_price(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  }

  const m_tap02 = tempData.CLOTHES_Type.map((list, idx) => {
    return (
      <li
        key={idx}
        id={idx}
        className={idx == tapActive1 ? styles.m_tap01_active : null}
        style={idx == tapActive1 ? tapColor1 : null}
        onClick={tapClick1}
      >
        {list.itemType}
      </li>
    );
  });

  const m_slider02 = tempData.CLOTHES_Type.map((list, idx) => {
    return (
      <div
        key={idx}
        id={idx}
        className={styles.m_slider_group}
        style={idx == tapActive1 ? tapSwitch1 : null}
      >
        <StyledSlider {...settings}>
          {tempData.CLOTHES_Item.map((list, num) => {
            if (list.itemType === tempData.CLOTHES_Type[idx].itemType) {
              return (
                <>
                  <div className={styles.item_box}>
                    <div className={styles.item_img}>
                      <div className={styles.item_idx}>0{idx_conver(num)}</div>
                      <div
                        className={styles.CLOTHES_new}
                        style={
                          list.new == 0
                            ? {
                                background:
                                  "url(../img/item/new.jpg) no-repeat center",
                              }
                            : null
                        }
                      ></div>
                      <div
                        className={styles.CLOTHES_pick}
                        style={
                          list.pick == 0
                            ? {
                                background:
                                  "url(../img/item/pick.jpg) no-repeat center",
                              }
                            : null
                        }
                      ></div>
                      <img
                        src={require(`../img/item/clothes/${tempData.CLOTHES_Item[num].itemName}_1.jpg`)}
                        alt={list.itemName}
                      />
                      <img
                        src={require(`../img/item/clothes/${tempData.CLOTHES_Item[num].itemName}.jpg`)}
                        alt={list.itemName}
                      />
                      <div className={styles.item_like}></div>
                    </div>
                    <ul>
                      <li>{list.itemName}</li>
                      <li>
                        <span
                          className={styles.discount}
                          style={
                            list.discount == 0
                              ? { padding: "0 0 10px 0" }
                              : null
                          }
                        >
                          {list.discount == 0 ? "" : list.discount + "%"}
                        </span>
                        <span className={styles.dis_price}>
                          {(list.price - list.price * (list.discount * 0.01))
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </span>
                        <span className={styles.price}>
                          {list.discount == 0 ? "" : conver_price(list.price)}
                        </span>
                      </li>
                    </ul>
                  </div>
                </>
              );
            }
          })}
        </StyledSlider>
      </div>
    );
  });

  //CLOTHES 아이템 슬라이드
  //-----------------------------------------------------

  const m_new01 = tempData.newItem.map((list, idx) => {
    return (
      <li>
        <div className={styles.new_item_box}>
          <div className={styles.item_new}></div>
          <img
            src={require(`../img/item/new/${tempData.newItem[idx].itemName}.jpg`)}
            alt={"test"}
          />
        </div>
        <ul className={styles.new_item_info}>
          <li>{list.itemName}</li>
          <li>
            <span className={styles.discount}>{list.discount}%</span>
            <span className={styles.dis_price}>
              {(list.price - list.price * 0.1)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
            <span className={styles.price}>
              {list.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </span>
          </li>
        </ul>
      </li>
    );
  });

  //NEW 아이템 리스트
  //-----------------------------------------------------

  return (
    <>
      <div className={styles.main_wrap}>
        <div className={styles.m_title}>
          <span>BAG</span>
          <ul className={styles.ul_tap_1}>{m_tap01}</ul>
        </div>
        {/*BAG*/}
        <div className={styles.m_slider}>{m_slider01}</div>
        {/*BAG slick*/}
        {/*첫 번쨰 아이템 리스트*/}
        <div className={styles.m_title}>
          <span>New</span>
        </div>
        {/*NEW*/}
        <div className={styles.m_item_list_wrap}>
          <ul>{m_new01}</ul>
        </div>
        {/*두 번쨰 아이템 리스트*/}
        <div className={styles.m_title}>
          <span>CLOTHES</span>
          <ul className={styles.ul_tap_1}>{m_tap02}</ul>
        </div>
        {/*CLOTHES*/}
        <div className={styles.m_slider}>{m_slider02}</div>
        {/*BAG slick*/}
        {/*두 번쨰 아이템 리스트*/}
        <div className={styles.evnet_banner}>
          <img
            src={require(`../img/main/banner/event_banner.jpg`)}
            alt="이벤트 배너"
          />
        </div>
        {/*이벤트 배너*/}
        <Footer />
      </div>
    </>
  );
}

export default MainProductList;
