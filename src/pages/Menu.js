import { useContext } from "react"
import { AppContext } from "../App"

const Menu = () => {

  const {username}= useContext(AppContext)

  return (
    <div>This is Menu {username} </div>
  )
}

export default Menu