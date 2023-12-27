import React from 'react'
import SingleTask from './SinglTask'
const TaskContainer = () => {
  return (
   <div style = {{border : "5px solid blue", marginTop:"50px"}}>
<SingleTask task = "go to school"/>
<SingleTask task = "read the poem"/>
<SingleTask task = "do the excersize"/>
<SingleTask task = "say good morning to every one"/>

    </div>
  )
}

export default TaskContainer