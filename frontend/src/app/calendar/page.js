'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Calendar.css';

function CalendarComponent() {
  const [value, onChange] = useState(new Date());
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
