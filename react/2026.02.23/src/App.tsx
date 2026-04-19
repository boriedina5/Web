//Importokat használatuktól függően kommentelni kell
//import { useEffect, useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import { useEffect, useState } from 'react';
import './App.css'
import { Button, TextField } from '@mui/material'; //mui
import { defaultUser, type IUser } from './utils/user-util';
import type { ITodoItem } from './utils/todo-types';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';

//App komponens: [NewTodo, Todolist [TodoItem]]
function App(){
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  function add(newItem: ITodoItem){
    if(todoItems.some(it => it.name === newItem.name)){
      console.warn("Name is already included in the array")
      return;
    }
  }
  
  useEffect(() => console.log(todoItems), [todoItems])
  return <div className="app">
    <NewTodo/>
      
    <TodoList/>
  </div>
}




//Form
/*function Register(){
  const [newUser, setNewUser] = useState<IUser>(defaultUser);

  function handleChange(key: "username" | "email" | "password", val: string){
    const userCopy = {...newUser};
    userCopy[key] = val;
    setNewUser(userCopy);
  }

  function handleRegister(){
    console.log(newUser);
  }
  
  /*useEffect(()=> console.log(newUser), [newUser]) - ne minden változás, ink gombnyomás ^*/
  /*return <div>
    <TextField placeholder="Username..." value={newUser.username}
    onChange={(e) => handleChange("username", e.target.value)}
    /> {/* mui-ból importáljuk 
    <TextField placeholder="Email..." value={newUser.email}
    onChange={(e) => handleChange("email", e.target.value)}
    />
    <TextField placeholder="Password..." type= "password" value={newUser.password}
    onChange={(e) => handleChange("password", e.target.value)}
    />
    <Button onClick={handleRegister}>Register</Button>
  </div>

}
*/

/*function App() {
  /*const [count, setCount] = useState<number>(0) //hook = useState - react libary-be van importálva a useState
  useEffect(()=> console.log(count), [count]) //tényleges az log-olja ki, ami aktuális | X console.log 
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
}
*/

//x és y értékének növeléssel gombokkal--------------------------------------------
/*function xAndyExample(){
const [x, setX] = useState<number>(0);
const [y, setY] = useState<number>(0);
useEffect(() => console.log(`{x:${x}, y: ${y}}`), [x, y]) //bármelyik érték változik callback fv meghívódik
return (
  <div>
      <button onClick={() => setX(x + 1)}>x+</button>
      <button onClick={() => setX(x - 1)}>x+</button>
      <button onClick={() => setY(y + 1)}>y+</button>
      <button onClick={() => setY(y - 1)}>y+</button>
  </div>
);
}*/
//Gomb ""villanykapcsolót" kapcsol fel-le
//Betöltéskor le van kapcsolva


/*function App(){
  const [light, setLight] = useState<boolean>(false); //light - állapotváltozó
  return <div>
    <div 
    onClick= {() => setLight(!light)} //nem csak a gombnak lehet onClick eventje
    style={{  
      width: 300,
      height: 300,
      border: "5px solid black",
      borderRadius: "50%",
      backgroundColor: light ? 'yellow' : 'gray', // szín váltás
    }}></div>
  </div>
}*/
//Marad a villanykapcsoló, kattintásra elindul egy folyamat 1 msp-ként kapcsolja fel vagy le + nő a méret
/*function App(){
  const[show, setShow] = useState<boolean>(false);
  const [light, setLight] = useState<boolean>(false); //light - állapotváltozó
  const [extraSize, setExtraSize] = useState<number>(0);
  useEffect(() => { //változáskövetés
    if(show){ //fel kapcsolva a fény show
      setExtraSize(extraSize + 10);
      setTimeout(() => setLight(!light), 1000)
    }
    else{//le kapcsolva a fény show
      setExtraSize(0)
      setLight(false)
    }
  }, [show, light])//állaőotváltozók
  return <div>
    <div 
    onClick= {() => setShow(!show)} //nem csak a gombnak lehet onClick eventje
    style={{  
      width: 300 + extraSize,
      height: 300 + extraSize,
      border: "5px solid black",
      borderRadius: "50%",
      backgroundColor: light ? 'yellow' : 'gray', // szín váltás
    }}></div>
  </div>
}*/
//Ugyanez csak random szín
/*function LightChange(){
  const colors = [
  "#3F7CAC",
  "#E94F37",
  "#F6BD60",
  "#6A4C93",
  "#2EC4B6",
  "#FF9F1C",
  "#8AC926",
  "#FF595E",
  "#1982C4",
  "#B5179E"
]
function getRandom(){
  const r = Math.floor(Math.random() * 10);
  return colors.at(r)
}
  const[show, setShow] = useState<boolean>(false);
  const [light, setLight] = useState<boolean>(false); //light - állapotváltozó
  const [extraSize, setExtraSize] = useState<number>(0);
  useEffect(() => { //változáskövetés
    if(show){ //fel kapcsolva a fény show
      setExtraSize(extraSize + 10);
      setTimeout(() => setLight(!light), 1000)
    }
    else{//le kapcsolva a fény show
      setExtraSize(0)
      setLight(false)
    }
  }, [show, light])//állaőotváltozók
  return <div>
    <div 
    onClick= {() => setShow(!show)} //nem csak a gombnak lehet onClick eventje
    style={{  
      width: 300 + extraSize,
      height: 300 + extraSize,
      border: "5px solid black",
      borderRadius: "50%",
      backgroundColor: light ? getRandom() : 'gray', // szín váltás
    }}></div>
  </div>
}*/


export default App; //exportáljuk a fv-ket
