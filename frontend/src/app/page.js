'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import "react-calendar/dist/Calendar.css";


//type ValuePiece = Date | null;

//type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {

  const [value, onChange] = useState(new Date());

  return (
    <ChakraProvider>
      <header>
        <h1>Wella</h1>
      </header>
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>
        <GridItem colSpan={1}>
        </GridItem>
        <GridItem colSpan={3}>
          <div display='flex' flexDirection='row' flexWrap='wrap' alignItems='flex-start' mx='10px' p='10px'>
            <main border='1px' borderRadius='3px' display='flex' w='100%' flexBasis='420px' flexDirection='column' alignItems='stretch' pt='1em'>
              <Calendar
                mx='0'
                my='auto'
                border='1px'
                borderStyle='solid'
                borderRadius='3'
                borderColor='red'
                w='100%'
                onChange={onChange}
                showWeekNumbers
                value={value}
              />
            </main>
          </div>
        </GridItem>
        <GridItem colSpan={1}>
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}
