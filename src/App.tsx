

import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const {count }= useAppSelector((state)=> state.reducer)
  const dispatch = useAppDispatch();
 

  return (
    
  <div>
    <button className="btn bordered" onClick={()=>dispatch(incrementByAmount(5))}>Increment by amount </button> <br></br>
    <button className="btn bordered" onClick={()=>dispatch(increment())}>Increment </button>
<div>{count}</div>
    <button onClick={()=>dispatch(decrement())}>Decrement </button>
  </div>
    
  )
}

export default App
