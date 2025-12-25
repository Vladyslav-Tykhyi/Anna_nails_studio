import Logo from "../../Logo/Logo";
import s from "./FooterBox.module.css";

import FooterNav from "./FooterNav/FooterNav";

const FooterBox = () => {
  return (
    <div className={s.footer_contact_box}>
      <div className={s.footer_nav_box}>
        <div className={s.footer_logo}>
          <Logo />
        </div>
        <FooterNav />
      </div>
    </div>
  );
};

export default FooterBox;
