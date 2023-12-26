'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react';
import Link from 'next/link';

//type ValuePiece = Date | null;

//type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {

  const [value, onChange] = useState(new Date());

  return (
    <main className={styles.main}>
      <h2>Wella</h2>
      <Calendar onChange={onChange} value={value} />
      <Link href="/homePage">
        Go to New Page
      </Link>
    </main>
  )
}
