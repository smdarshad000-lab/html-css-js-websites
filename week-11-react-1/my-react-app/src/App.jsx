import { useState } from 'react'
import './App.css'

function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count +1)
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}

function App() {
  const {count, increaseCount} = useCounter();

  return 
  <div>
    <button onclick = {increaseCount}> Increase</button>
    <Counter/>
    <Counter/>
  </div>
  
}

function Counter(){

  reutrn
  
  const {count, increaseCount} = useCounter();
  <div>
  <button onclick = {increaseCount}> Increase {count} </button>
</div>
}

export default App

