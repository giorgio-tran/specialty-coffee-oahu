import { useState } from 'react'
import Content from './components/Content'
import Header from './components/Header'

const App = () => {
  const cafes = [
    {
      name: 'Alii Coffee',
      website: 'https://www.aliicoffee.com/',
      description: 'Great ambience, roast their own coffee.',
      location: '',
    },
    {
      name: 'The Curb',
      website: 'https://thecurbkaimuki.com',
      description: 'Good selection of coffees from various regions around the world',
      location: '',
    },
    
  ]

  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
  }
  console.log(newFilter)
  
  return (
    <>
      <Header 
        title="Specialty Coffee Oahu" 
        inputValue={newFilter}
        onChangeFunction={handleFilterChange}
      />
      <Content />
    </>
  )
}

export default App
