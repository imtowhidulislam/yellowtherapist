import React, { useEffect, useState } from 'react'

const Day = () => {
    const [Day, setDay] = useState(['Mon','Tues','Wed','Thus','Fri','Sat','Sun']); 
    const [Month, setMonth] = useState(['Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb',
]); 
    const [currDay, setCurrDay] = useState("Sat");
    const [currMonth, setCurrMonth] = useState("Jan");
    const [currYear, setCurrYear] = useState(0);

    const getDay = () => {
        const Days = new Date().getDay();
        console.log(Days);

        const specificDay = Day.find((day) => day);
        console.log(specificDay);
        setCurrDay(specificDay);
    }
    const getMonth = () => {
        const Months = new Date().getMonth();
        const specificMonth = Month.find((month) => month[Months]);
        setCurrMonth(specificMonth);
        console.log(specificMonth);
        console.log(Months);
    }
    const getYear = () => {
        const year = new Date().getFullYear();
        setCurrYear(year);
    }
    useEffect(() => {
        getDay();
        getMonth();
        getYear();
        console.log(currDay,currMonth);
    },[]);
  return (
    <div className='flex items-center justify-center gap-2'>
        <div>{currDay}</div>
        <div>{currMonth}</div>
        <div>{currYear}</div>
    </div>
  )
}

export default Day;