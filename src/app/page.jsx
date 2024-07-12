import React from 'react'
import Banner from './components/Banner'
import Statement from './components/Statement'
import Block from './components/Block'
import NewsSection from './components/NewsSection'


export default function page() {
  return (
    <div>
      <Banner/>
      <Statement/>
      <Block/>
      <NewsSection/>
    </div>
  )
    
}
