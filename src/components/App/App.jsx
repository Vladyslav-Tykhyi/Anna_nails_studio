import Feedbacks from "../Feedbacks/Feedbacks";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Location from "../Location/Location";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <Hero />
      <Feedbacks />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
