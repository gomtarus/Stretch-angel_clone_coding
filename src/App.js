import "./App.css";

import Header from "./components/page/Header";
import Banner from "../src/components/page/Banner";
import MainProductList from "../src/components/page/MainProductList";

function App() {
  return (
    <>
      <Header />
      {/*메뉴*/}
      <Banner />
      {/*배너 슬라이드*/}
      <MainProductList />
      {/*메인제품리스트*/}
    </>
  );
}

export default App;
