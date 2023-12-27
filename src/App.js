import TaskContainer from "./components/TaskContainer"
import Inputcontainer from "./components/inputcontainer"
function App(){
  let styleObj = {width:"400px" , height:"500px",backgroundcolor:"red"}


  return(
    <div style={styleObj}>
      {console.log("hellow world")}
      {console.log(styleObj)}
      <Inputcontainer/>
      <TaskContainer/>
      </div>

  )
}
export default App