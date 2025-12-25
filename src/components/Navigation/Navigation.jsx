import s from "./Navigation.module.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "course" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#location", label: "location" },
];

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {links.map(({ href, label }) => (
          <li key={href} className={s.list_item}>
            <a
              href={href}
              className={s.list_item_link}
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
