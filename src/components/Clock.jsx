import React, { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa';
import Day from './Day';

const Clock = () => {
    const [times, setTimes] = useState("");
    const [phase, setPhase] = useState(0);

    const currentTime = () => {
      const fullHours = new Date().getHours();
      const hour = new Date().getHours() % 12;
      const minute = new Date().getMinutes();
      const second = new Date().getSeconds();
      setTimes(`${hour} : ${minute} : ${second}`);
      setPhase(fullHours);
    };
    useEffect(() => {
      setTimeout(() => {
        currentTime();
      }, 1000);
    }, [times]);
  
  return (
    <div>
        <div>
            <div className="">
          <span className="flex gap-2 items-center justify-center">
            <FaClock />
            <p className="">
              {times}
              <span className=""> {phase <= 12 ? " AM" : " PM"} </span>
            </p>
          </span>
        </div>
        </div>
        <div>
            <Day />
        </div>
    </div>
  )
}

export default Clock