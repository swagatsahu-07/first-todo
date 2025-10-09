import { createContext } from "react";

 
const todoContext = createContext(null)


const Wrapper = (props) => {
  return  props.children
}

export default Wrapper