import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  const phoneNumber = '5519984308466';
  const urlMessage =
    'Hi%20Ren%C3%A9%21%0AI%20found%20you%20in%20your%20portfolio%21';

  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${urlMessage}&type=phone_number&app_absent=0`}
      rel="noopener noreferrer"
      className="float"
      target="_blank"
    >
      <i className="fa fa-whatsapp my-float"></i>
    </a>
  );
};

export default WhatsAppIcon;
