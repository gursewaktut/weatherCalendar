'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Calendar.css';

function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">

      {/* <header className="App-header">
      <h2>The weather scheduling for you</h2>
      <p>Experience the freedom of planning that adapts to the weather conditions, keeping you one step ahead.</p>
      <button className="explore">Explore all features</button>
      <button className="start">Get Started</button>
      <div className="container">
        <Image src="/image-3.png" alt="Calendar"  width={900} height={900} />
      </div>
    </header> */}

      <Calendar onChange={onChange} value={value} />



    </div>
  )
}

export default CalendarComponent;
