import React, { useState, useEffect, useRef } from "react";
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const clickCount = useRef(0);
  const [restarted, setReStart] = useState(false);
  const [running, setRunning] = useState(false);
  

  const [enteredMin, setEnteredMin] = useState(0);
  const [enteredSec, setEnteredSec] = useState(0);
  const [start, setStart] = useState(false);






  let interval;


  useEffect(() => {

    if (restarted) {
      clearInterval(interval);

      interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);

    }else{
     

      interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    

    }
   


  }, [running && seconds])



  let timerMinutes = minutes;
  if (minutes > 0 && minutes < 10) {
    timerMinutes = `0${minutes}`;
  }

  let extraminutes


  if (seconds > 60) {
    extraminutes = Math.floor(seconds / 60)
    setMinutes(parseInt(minutes) + parseInt(extraminutes))
    setSeconds(Number(seconds % 60))
  }

  let timerSeconds = seconds < 10 ? `0${seconds}` : seconds;



  return (
    <div className="App">
      <input type="number" id="mins" /* defaultValue={ minuteenterd ? minutes:""}*/
        onInput={(e) => {
          setMinutes(e.target.value)
          setEnteredMin(e.target.value)
        }}></input>
      <input type="number" id="secs"/*defaultValue={ secenterd ? seconds:""} */ onInput={(e) => {
        setSeconds(e.target.value)
        setEnteredSec(e.target.value)
      }}></input>

      <button onClick={() => {
        clickCount.current = clickCount.current + 1
        setStart(true)
        setRunning(true)
        

     if(clickCount.current > 1){
       setStart(false)
       setMinutes(enteredMin)
       setSeconds(enteredSec)
       document.getElementById("mins").value = enteredMin;
       document.getElementById("secs").value = enteredSec;
      setReStart(true)

      clearInterval(interval);


     }

       
      }}>
        Start
      </button>
      <button>
        Pause/Resume
      </button>
      <button>Reset</button>

      <h3>
        Timer {timerMinutes}:{timerSeconds}
      </h3>
    </div>
  );
}

export default App;
