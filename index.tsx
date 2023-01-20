import type { NextPage } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VCorNot from './components/VCorNot';
import Interested from './components/Interested';
import Footer from "./components/Footer"

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <VCorNot/>
      <Interested/>
      <Footer/>
    </div>
  )
}

export default Home
