'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './calendar.module.css';

function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  const apiKey = "0322d829d5964399979214551242301";

  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=vancouver&days=10&aqi=no&alerts=no`;
  return (
    <main className={styles.main}>

      <Calendar
        className={styles.calendar}
        tileClassName={styles.tileStyle}
      />

    </main>
  )
}

export default CalendarComponent;
