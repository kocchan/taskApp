import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState(0);

  // const initialState = [
  //   {
  //   }
  // ]
  const [todos, setTodos] = useState([]);
  const targetTime = 1000;

  const handleNewTask = (e) => {
    setTask(e.target.value)
  }
  const handleNewTime = (event) => {
    setTime(Number(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (task === "" || time <= 0) {
      return
    } else {
      setTodos(todos => [...todos, { task, time, isCompleted: false }])
      calculateTotal()
      setTask("")
      setTime(0)
      return
    }
  }

  let sTime = 0;
  let [sumTime, setSumTime] = useState(0);

  const calculateTotal = () => {
    sTime = sumTime + time
    setSumTime(sTime)
  }
  console.log("todos:", todos)




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>学習内容</span>
          <input type="text" placeholder='' value={task} onChange={handleNewTask} />
        </div>
        <div>
          <span>学習時間</span>
          <input type="number" placeholder='0' value={time} onChange={handleNewTime} />
          <span>時間</span>
        </div>
        <div>
          <span>入力されている学習内容:</span>
          <span>{task}</span>
        </div>
        <div>
          <span>入力されている時間:</span>
          <span>{time}</span>
          <span>時間</span>
        </div>
        <button type="submit">登録</button>
      </form>

      <ul>
        {todos.length === 0 ? (
          <li>未入力</li>
        ) : (
          todos.map((todo, index) => (
            <li key={index}>{todo.task}: {todo.time}(時間)</li>
          ))
        )}
      </ul>
      <div>
        <span>合計時間:</span>
        <span>{sumTime}</span>
        <span>/{targetTime}(h)</span>

      </div>
    </div>
  )
}

export default App
