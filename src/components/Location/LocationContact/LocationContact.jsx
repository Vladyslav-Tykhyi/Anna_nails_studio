import s from "./LocationContact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const LocationContact = () => {
  return (
    <ul className={s.location_list}>
      <li className={s.location_list_item}>
        <MdOutlineEmail aria-hidden className={s.location_icon} />
        <div className={s.location_contact_wrapper}>
          <span className={s.location_item_subtitle}>Email</span>
          <a href="mailto:hello@booksy.com" className={s.location_item_contact}>
            hello@booksy.com
          </a>
        </div>
      </li>
      <li className={s.location_list_item}>
        <LuPhone aria-hidden className={s.location_icon} />
        <div className={s.location_contact_wrapper}>
          <span className={s.location_item_subtitle}>Phone</span>
          <a href="tel:+31621325656" className={s.location_item_contact}>
            +31 (6) 21 32 56 56
          </a>
        </div>
      </li>
      <li className={s.location_list_item}>
        <IoLocationOutline aria-hidden className={s.location_icon} />
        <div className={s.location_contact_wrapper}>
          <span className={s.location_item_subtitle}>Office</span>
          <a
            className={s.location_item_contact}
            href="https://maps.app.goo.gl/xRNvAqdzCMYCDbGG8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Werkmansbeemd 55, 4907 EW Oosterhout
          </a>
        </div>
      </li>
    </ul>
  );
};

export default LocationContact;
