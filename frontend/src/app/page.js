'use client';

import './page.module.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react';
import Image from 'next/image';
import './App.css';
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
    <div className="App">
       <header className="navbar">
      <div className="brand">
        <Image src="/image-2.png" alt="Icon"  width={50} height={50}/>
        <Link href="/">
          WELLA
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/features">
              Features
            </Link>
          </li>
          <li>
              <button className="signIn">Sign In</button>
          </li>
        </ul>
      </nav>
    </header>

    {/* <header className="App-header">
      <h2>The weather scheduling for you</h2>
      <p>Experience the freedom of planning that adapts to the weather conditions, keeping you one step ahead.</p>
      <button className="explore">Explore all features</button>
      <button className="start">Get Started</button>
      <div className="container">
        <Image src="/image-3.png" alt="Calendar"  width={900} height={900} />
      </div>
    </header> */}
        <header className="App-header">
        <div className="header-content">
          <h2>The weather scheduling for you</h2>
          <p>Experience the freedom of planning that adapts to the weather conditions, keeping you one step ahead.</p>
          <button className="explore">Explore all features</button>
          <button className="start">Get Started</button>
        </div>
        <div className="container" style={{ marginRight: '-10%', marginTop: '5%'}}>
          <Image src="/image-3.png" alt="Calendar" width={900} height={900} />
        </div>
      </header>

      <section className="features">
        {/* <h2>Features</h2>
        <ul>
          <li>Easy access</li>
          <li>Real time tracking</li>
          <li>Optimizing schedule</li>
          <li>Sign in</li>
          <li>Notify schedule</li>
        </ul> */}
      </section>
      <section class="waves">
        <svg  width="100%" height="263%" viewBox="0 0 2160 263" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Wave" fill-rule="evenodd" clip-rule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="white"/>
        </svg>
      </section>


      <footer className="App-footer">
        <p>&copy; 2023 Wella. All rights reserved • Privacy Policy • Terms and Conditions</p>
      </footer>
      
    </div>
 );

}

export default App;    
