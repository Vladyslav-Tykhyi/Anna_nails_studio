import s from "./BurgerMenu.module.css";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../Logo/Logo";
import BurgerNavigation from "./BurgerNavigation/BurgerNavigation";

const BurgerMenu = ({ setIsOpen }) => {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <div className={s.innerContainer}>
          <Logo />
          <IoCloseOutline
            onClick={() => setIsOpen((prev) => !prev)}
            className={s.btn}
          />
        </div>
        <BurgerNavigation setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default BurgerMenu;
