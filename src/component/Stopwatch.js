import { useEffect, useState } from "react";

const Stopwatch=()=>{
  const [hour,sethour]=useState(0)
  const [min,setmin]=useState(0)
  const [sec,setsec]=useState(0)
  const [milisec,setmilisec]=useState(0)
  const [stop,setstop]=useState(false)


  const onstart=()=>{
setstop(true)
setmilisec(milisec + 1);
  }

  const onstop=()=>{
setstop(false)
  }

  const onreset=()=>{

  }
  useEffect (()=>{
let interval = null
if(!stop){
  interval=setInterval(()=>{
    if(min > 59){
      sethour(hour+1);
      setmin(0)
      clearInterval(interval)
    }
    if(sec > 59){
      setmin(min+1);
      setsec(0)
      clearInterval(interval)
    }
    if(milisec > 59){
      setmin(min+1);
      setsec(0)
      clearInterval(interval)
    }
  })
}
  })
  return(
<div>
<h1>{hour}:{min}:{sec}:{milisec}</h1>
<button onClick={onstart}>Start</button>
<button onClick={onstop}>Stop</button>
<button onClick={onreset}>Reset</button>
</div>
  )
}
export default Stopwatch;