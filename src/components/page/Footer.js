import "../css/common.css";
import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.f_main_wrap}>
        <div className={styles.f_main}>
          <div className={styles.f_main_left}>
            <ul>
              <li className={styles.info_logo}>
                <img
                  src={require(`../img/main/header/top_logo.png`)}
                  alt="로고"
                />
              </li>
              <li>
                <span className={styles.info_title}>COMPANY</span>
                <span className={styles.info}> 주식회사 OOOO</span>
                <span className={styles.info}> · </span>
                <span className={styles.info_title}>CEO</span>
                <span className={styles.info}> 홍길동</span>
                <span className={styles.info}> · </span>
                <span className={styles.info_title}>BUSINESS LICENSE</span>
                <span className={styles.info}> 111-222-33333</span>
                <span className={styles.info}> · </span>
                <span className={styles.info_title}>MAIL ORDER LICENSE</span>
                <span className={styles.info}> 2023-서울강남-00000</span>
                <span className={styles.info}>
                  <a href="!#" className={styles.info_chk}>
                    [사업자정보확인]
                  </a>
                </span>
              </li>
              <li>
                <span className={styles.info_title}> ADDRESS</span>
                <span className={styles.info}> 12345 서울특별시 강남구</span>
                <span className={styles.info}> · </span>
                <span className={styles.info_title}>
                  {" "}
                  CHIEF PRIVACY OFFICER
                </span>
                <span className={styles.info}> 김영희</span>
              </li>
              <li>
                <span className={styles.info_title}> MAIL</span>
                <span className={styles.info}> test@test.com</span>
                <span className={styles.info}> · </span>
                <span className={styles.info_title}> CS CENTER</span>
                <span className={styles.info}> 02-000-0000</span>
              </li>
              <li
                style={{ padding: "10px 0px", fontSize: "13px", color: "#999" }}
              >
                Copyright © 주식회사 OOO, ALL Rights Reseved.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.f_bottom}></div>
      </div>
    </>
  );
}
export default Footer;
