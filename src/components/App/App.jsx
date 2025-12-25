import Feedbacks from "../Feedbacks/Feedbacks";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import Hero from "../hero/hero";
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
