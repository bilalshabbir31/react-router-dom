import { useContext } from "react";
import { AppContext } from "../App";

const ContactUs = () => {
  
  const { username } = useContext(AppContext);

  return <div>ContactUs {username}</div>;
};

export default ContactUs;
