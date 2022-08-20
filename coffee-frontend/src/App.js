import React, { useState, useEffect } from 'react'
import coffeeShopService from './services/coffeeShops'
import Content from './components/Content'
import Header from './components/Header'
import AddModal from './components/Add/AddModal'
import CoffeeShopModal from './components/CoffeeShop/CoffeeShopModal'
import EditModal from './components/Edit/EditModal'
import Footer from './components/Footer/Footer'
import './index.css'

const App = () => {

  //states
  const [newFilter, setNewFilter] = useState('')
  const [coffeeShops, setCoffeeShops] = useState([])
  const [coffeeShopId, setCoffeeShopId] = useState(0)
  const [addIsOpen, setAddIsOpen] = useState(false)
  const [editIsOpen, setEditIsOpen] = useState(false)
  const [coffeeShopIsOpen, setCoffeeShopIsOpen] = useState(false)
  //connects to mongoDB
  useEffect(() => {
    coffeeShopService
      .getAll()
      .then(initialCoffeeShops => {
        console.log('connected to db')
        setCoffeeShops(initialCoffeeShops)
      })
  }, [])
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleCoffeeShopSubmit = (event, coffeeShop) => {
    coffeeShopService
      .create(coffeeShop)
      .then(returnedCoffeeShop => {
        setCoffeeShops(coffeeShops.concat(returnedCoffeeShop))
      })
  }

  const handleEditSubmission = (event, coffeeShop) => {
    coffeeShopService
      .update(coffeeShopId, coffeeShop)
      .then(
        //update the list of coffeeShops
        returnedCoffeeShop => {
          setCoffeeShops(coffeeShops.map(coffeeShop => 
            coffeeShop.id !== coffeeShopId
              ? coffeeShop
              : returnedCoffeeShop
          ))
        }
      )
      .then(() => {
        //close modal
        setEditIsOpen(false)
      })
  }

  const handleDelete = (event) => {
    event.preventDefault()
    coffeeShopService
      .remove(event.target.id)
      .then(() => {
        setCoffeeShopIsOpen(false)
        setCoffeeShops(coffeeShops.filter(coffeeShop => coffeeShop.id !== event.target.id))
      })
  }

  const handleEdit = () => {
    setEditIsOpen(true)
  }

  const handleCoffeeShop = (event) => {
    setCoffeeShopId(event.currentTarget.id)
    setCoffeeShopIsOpen(true)
  }
  
  return (
    <div className='w-screen h-screen flex justify-center bg-beige m-0 overflow-y-auto'>
      <div className='px-10 flex flex-col justify-between'>
        <div>
          <Header 
            title="Specialty Coffee Oahu" 
            inputValue={newFilter}
            onChangeFunction={handleFilterChange}
          />
          <Content 
            coffeeShops={coffeeShops}
            filter={newFilter}
            openAddModal={() => setAddIsOpen(true)}
            onClickCoffeeShop={handleCoffeeShop}
          />
        </div>
        <Footer />
        <AddModal 
          open={addIsOpen}
          close={() => setAddIsOpen(false)}
          handleCoffeeShopSubmit={handleCoffeeShopSubmit}
        />
        <CoffeeShopModal 
          open={coffeeShopIsOpen}
          close={() => setCoffeeShopIsOpen(false)}
          coffeeShop={coffeeShops.filter(coffeeShop => coffeeShop.id === coffeeShopId)[0]}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <EditModal
          open={editIsOpen}
          close={() => setEditIsOpen(false)}
          handleEditSubmission={handleEditSubmission}
        />
      </div>
    </div>
  )
}

export default App
