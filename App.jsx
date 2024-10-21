import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [button_name, setButtonName] = useState("Add")

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let data = JSON.parse(localStorage.getItem("todos"))
      setTodos(data)
    }
  }, [])

  const handleEdit = (e, id) => {
    let t = todos.filter(item => {
      return item.id === id;
    })
    setTodo(t[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id;
    })

    setTodos(newTodos)
    setButtonName("Update")
    saveToLocalStorage();
  }

  const handleDelete = (e, id) => {

    let index = todos.findIndex(item => {
      return item.id === id;
    })

    let user_choice = confirm(` Are you sure ??\n You want to delete todo --> ${todos[index].todo} `)
    if (user_choice) {
      setTimeout(() => {

        let newTodos = [...todos]
        if (!newTodos[index].isCompleted) {
          newTodos[index].isCompleted = !newTodos[index].isCompleted
          setTodos(newTodos)
        }

      }, 50)

      setTimeout(() => {
        let newTodos = todos.filter(item => {
          return item.id !== id;
        })

        setTodos(newTodos)

      }, 500);

    }
    saveToLocalStorage();
  }

  const handleAdd = () => {
    setButtonName("Add")
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLocalStorage();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLocalStorage();
  }


  return (
    <>
      <div className='mt-5 m-3 rounded-lg p-3 bg-purple-500 text-black text-lg'>
        <div className="text-center text-2xl font-bold text-white flex justify-center content-center gap-2 ">
          <video className='size-8 hover:invert rounded-md' autoplay loop muted >
          {/* className='size-8 invert' */}
            <source src="src\moving board.mp4" type="video/mp4" />
          </video>Todo List
        </div>

        <div className='m-2 flex justify-center align-middle'>
          <input type="text" placeholder='Add todos' className='w-[70%] p-2 rounded-md' onChange={handleChange} value={todo} />
          <button onClick={handleAdd} disabled={todo.length <=3 } className='ml-2 bg-white font-bold text-xl text-purple-500 border-2 border-purple-300 p-1 px-2 rounded-md hover:text-purple-900 hover:border-purple-900 disabled:bg-purple-200' >
            {button_name}
          </button>
        </div>

        <h2 className='mt-6 text-2xl text-white font-bold'>Your Todos</h2>

        {/* Showing todos from here -- Start */}

        {todos.length === 0 && <div className='text-center text-purple-200 text-sm'>No todos yet to display</div>}
        <div className="todos">

          {todos.map(item => {

            return <div key={item.id} className="todo flex mt-2">
              <div className="border border-black bg-white flex justify-center content-center p-2 rounded-md w-full" >

                <input type="checkbox" onChange={handleCheckbox} className='mx-2' name={item.id} id="" />

                <div className={item.isCompleted ? "line-through" : ""} >{item.todo}</div>
                <div className='mx-5'>
                  <button onClick={(e) => { handleEdit(e, item.id) }} className="mx-2 px-2 border-2 border-white bg-purple-500 text-white hover:px-3 hover:text-purple-200 transform-none">Edit</button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className="mx-2 px-2 border-2 border-white bg-purple-500 text-white hover:px-3 hover:text-purple-200 transform-none" >Delete</button>
                </div>
              </div>
            </div>

          })}
        </div>

        {/* Showing todos from here -- End */}
      </div>
    </>
  )
}

export default App;