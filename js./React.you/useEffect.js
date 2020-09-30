const[todo, setTodo] = useState([]);
const[todoTitle, setTodoTitle] = useState("")

useEffect(() => {
  var save = localStorage.getItem("todos") || []
  setTodo(JSON.parse(save))
    }, [todo]);



useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todo))
}, [todo]);