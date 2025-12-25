import s from "./LocationMap.module.css";

const LocationMap = () => {
  return (
    <iframe
      className={s.location_map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.227569462137!2d4.853659976848791!3d51.66021547184857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d37ee299e76f3b%3A0x9a0827569aa7838f!2zQU5OQeKAok5BSUxTIOKAolNUVURJTw!5e1!3m2!1snl!2snl!4v1766508474343!5m2!1snl!2snl"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default LocationMap;
