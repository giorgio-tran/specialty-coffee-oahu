import { useState, useEffect } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import './index.css'

const App = () => {
  const cafesList = [
    {
      name: 'Alii Coffee',
      website: 'https://www.aliicoffee.com/',
      description: 'Great ambience, roast their own coffee.',
      location: 'Kakaako',
    },
    {
      name: 'The Curb',
      website: 'https://thecurbkaimuki.com',
      description: 'Good selection of coffees from various regions around the world',
      location: 'Kaimuki',
    },
    
  ]

  //states
  const [newFilter, setNewFilter] = useState('')
  const [cafes, setCafes] = useState([])
  const [addIsOpen, setAddIsOpen] = useState(false)

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
  }

  const handleCafes = () => {
      setCafes(cafesList)
      console.log(cafes)
  }
  
  return (
    <>
      <Header 
        title="Specialty Coffee Oahu" 
        inputValue={newFilter}
        onChangeFunction={handleFilterChange}
      />
      <Content 
        content_add_openState={addIsOpen}
        content_add_openModal={() => setAddIsOpen(true)}
        content_add_closeModal={() => setAddIsOpen(false)}
        content_cafes={cafesList}
        content_filter={newFilter}
      />
    </>
  )
}

export default App
