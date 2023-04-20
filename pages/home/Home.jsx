import Footer from '@/components/Footer'
import { headers } from 'next/dist/client/components/headers'
import React from 'react'
headers

function Home() {
  return (
    <>
        <headers/>
        <Footer/>
    </>
  )
}

export default Home