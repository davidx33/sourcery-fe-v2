import type { NextPage } from 'next';
import Navbar from './Navbar';
import Hero from './Hero';
import VCorNot from './VCorNot';
import Interested from './Interested';

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <VCorNot/>
      <Interested/>
    </div>
  )
}

export default Home
