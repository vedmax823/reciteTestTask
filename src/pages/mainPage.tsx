import { Fragment } from "react";
import Header from "../components/header";
import MainCardComponent from "../components/main-card-component";
import { DRAGONS_ROUTE, SHIPS_ROUTE } from "../utils/constants";

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <main className="mt-6 flex justify-around w-full">
        <MainCardComponent 
            link="https://i.imgur.com/ngYgFnn.jpg"
            to={SHIPS_ROUTE}
            name="Ships"
        />
        <MainCardComponent 
            link="https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg"
            to={DRAGONS_ROUTE}
            name="Dragons"
        />
      </main>
    </Fragment>
  );
};

export default MainPage;
