import { useState } from "react";
import Layout from "./components/Layout/Layout";
import List from "./components/List/List";
import Form from "./components/Form/Form";

const App = (props) => {

  const [todoList, setTodoList] = useState([])

  const appendTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text
    }
    return setTodoList([...todoList, newTask])
  }

  const deleteTask = (id) => {
    return setTodoList(todoList.filter(el => el.id !== id))
  }

  return ( 
    <div>
      <Layout>
        <Form event={appendTask}/>
        <List event={deleteTask} data={todoList} />
      </Layout>
    </div>
   );
}
 
export default App;