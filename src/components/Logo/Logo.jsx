import s from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/">
      <img src="/logo.png" className={s.logo} />
    </a>
  );
};

export default Logo;
