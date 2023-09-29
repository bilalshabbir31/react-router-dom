import { useContext, useState } from "react";
import { AppContext } from "../App";

const ChangeUsername = () => {
  
  const {setUsername} = useContext(AppContext);

  const [newusername, setNewusername] = useState("");

  const handleChange = (event) => {
    setNewusername(event.target.value)
  }
  return (
    <div>
      <input onChange={handleChange}/>
      <button onClick={()=> setUsername(newusername)}>Change Username</button>
    </div>
  )
}

export default ChangeUsername