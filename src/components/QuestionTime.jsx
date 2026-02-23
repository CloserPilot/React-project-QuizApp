import { useEffect } from "react";
import { useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT')
    const timer = setTimeout(onTimeout, timeout);

    //CleanUp: Funcion que se ejecuta cuando el componente se desmonta o cambia dependencias
    return ()=>{
      clearTimeout(timer);
    }
  }, [onTimeout, timeout])

  useEffect(() => {
    console.log('SETTING INTERVAL')
    const timer = setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);
    
    //CleanUp: Funcion que se ejecuta cuando el componente se desmonta o cambia dependencias
    return ()=>{
      clearInterval(timer);
    }
  }, []);

  return (
    <progress id="question time" max={timeout} value={remainingTime} />
  )
}