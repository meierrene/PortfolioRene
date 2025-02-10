import "./CustomButton.css";

const CustomButton = (props) => {
  return (
    <div className="custom-btn">
      <button>{props.children}</button>
    </div>
  );
};

export default CustomButton;
