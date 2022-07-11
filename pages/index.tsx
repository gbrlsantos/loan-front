import type { NextPage } from 'next'

import ScreenProvider from './context/ScreenContext'

import Navbar from './components/Common/Navbar'

import Screens from './Screens'

const Home: NextPage = () => { 
  return (
    <ScreenProvider>
      <Navbar />
      <Screens />
    </ScreenProvider>
  )
}

export default Home
