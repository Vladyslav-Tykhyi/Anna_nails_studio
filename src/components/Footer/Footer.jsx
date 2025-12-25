import AllRights from "./AllRights/AllRights";
import s from "./Footer.module.css";
import FooterBox from "./FooterBox/FooterBox";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <FooterBox />
      <AllRights />
    </footer>
  );
};

export default Footer;
