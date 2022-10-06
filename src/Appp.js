import React, { useState, useEffect,useCallback } from "react";
import './App.css';

function Appp() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [enteredMin, setEnteredMin] = useState(0);
  const [enteredSec, setEnteredSec] = useState(0);


  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [running, setRunning] = useState(true);
  
  const toggleRunning = useCallback(
    () => setRunning(run => !run)
  , []);






  const Countdown = () => {

    useEffect(() => {
      let interval ;
      if(!running) {
        clearInterval(interval);
        return;
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

    }, [start && seconds]);

  }








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

  const startTimerrr = () => {
    setMinutes(enteredMin)
    setSeconds(enteredSec)
    setStart(true)
    setRunning(true)
  }




  return (
    <div className="App">
      <input type="number" /* defaultValue={ minuteenterd ? minutes:""}*/
        onInput={(e) => {
          setMinutes(e.target.value)
          setEnteredMin(e.target.value)
        }}></input>
      <input type="number" /*defaultValue={ secenterd ? seconds:""} */ onInput={(e) => {
        setSeconds(e.target.value)
        setEnteredSec(e.target.value)
      }}></input>

      <button onClick={() => {
        startTimerrr()
        Countdown()
        toggleRunning()
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

export default Appp;
