import s from "./Feedbacks.module.css";
import FeedbackSubText from "./FeedbackSubText/FeedbackSubText";

const Feedbacks = () => {
  return (
    <div className={s.container} id="feedbacks">
      <h2 className={s.heading}>Customer Feedbacks</h2>
      <FeedbackSubText />
    </div>
  );
};

export default Feedbacks;
