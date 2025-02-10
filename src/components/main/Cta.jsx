import React, { useRef } from "react";
import { ctaEmailData } from "../../utils/portfolioData";
import CustomButton from "../UI/CustomButton";
import "./Cta.css";

const Cta = () => {
  const title = useRef();
  const content = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(title.current.value);
    const body = encodeURIComponent(
      content.current.value.replace(/\n/g, "%0D%0A")
    );
    window.open(`mailto:${ctaEmailData}?subject=${subject}&body=${body}`);

    title.current.value = "";
    content.current.value = "";
  };

  return (
    <section className="cta-container">
      <div className="content">
        <h2 className="h2-title">Contact me</h2>
        <form className="cta-form" onSubmit={submitHandler}>
          <input
            required
            className="cta-box subject"
            type="text"
            placeholder="Subject"
            ref={title}
          />
          <textarea
            required
            className="cta-box content"
            rows="5"
            placeholder="Write your message here..."
            ref={content}
          ></textarea>
          <CustomButton type="submit">Send to me!</CustomButton>
        </form>
      </div>
    </section>
  );
};

export default Cta;
