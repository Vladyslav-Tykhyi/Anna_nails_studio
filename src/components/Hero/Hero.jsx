import s from "./Hero.module.css";
import HeroText from "./HeroText/HeroText";
import HeroBtn from "./HeroBtn/HeroBtn";

const Hero = () => {
  return (
    <div id="home" className={s.hero}>
      <HeroText />
      <HeroBtn />
    </div>
  );
};

export default Hero;
