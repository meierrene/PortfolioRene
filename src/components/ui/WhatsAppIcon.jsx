import "./WhatsAppIcon.css";
import { whatsappData } from "../../utils/portfolioData";
const WhatsAppIcon = () => {
  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${whatsappData.number}&text=${whatsappData.message}&type=phone_number&app_absent=0`}
      rel="noopener noreferrer"
      className="float"
      target="_blank"
    >
      <i className="fa fa-whatsapp my-float"></i>
    </a>
  );
};

export default WhatsAppIcon;
