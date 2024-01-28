'use client';

import './page.module.css';
import { useState } from 'react';
import React from 'react';
import './App.css';
import HomePage from './auth/page.js';
import Link from 'next/link';


//type ValuePiece = Date | null;

//type Value = ValuePiece | [ValuePiece, ValuePiece];

// export default function Home() {

//   const [value, onChange] = useState(new Date());

//   return (
//     <main className={styles.main}>
//       <h2>Wella</h2>
//       {/* <Calendar onChange={onChange} value={value} /> */}
//       <Link href="/homePage">
//         Go to New Page
//       </Link>
//     </main>
//   )
// }

function App() {
 return (
   <div id="main-app">
     <p>The logic for checking user logged in or not yet to be completed</p>
   </div>
 );

}

export default App;    
