import { useEffect } from "react";
import { useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT')
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout])

  useEffect(() => {
    console.log('SETTING INTERVAL')

    setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100)
  }, []);

  return (
    <progress id="question time" max={timeout} value={remainingTime} />
  )
}