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

  return (
    <>
      <Header title="hello" />
      <Content />
    </>
  )
}

export default App
