import { useContext } from "react";
import { AppContext } from "../App"
import ChangeUsername from "../components/ChangeUsername"

const Home = () => {

  
  const {username} = useContext(AppContext);

  return (
    <div>This is Home {username}
      <br/>
      <ChangeUsername/>
    </div>
  )
}

export default Home