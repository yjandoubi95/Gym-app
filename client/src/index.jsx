import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from './components/Navbar.jsx'
import Shoplist from './components/shop/Shoplist.jsx'
import CreateProd from './components/CreateProd.jsx'
import Home from './components/shop/Home.jsx'
import Update from './components/Update.jsx'


const App = () => {

  const [shopData, setShopData] = useState([])
  const [refresh, setRefresh] = useState(false)

  const fetchSHop = async () => {
    await axios.get('/prod/prodGetAll')
      .then(
        (res) => {
          console.log(res.data)
          setShopData(res.data)
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }
  useEffect(() => {
    fetchSHop()
  }, [refresh])

  const drop = async (id) => {
    await axios.delete(`/prod/proddelete/${id}`)
    setRefresh(!refresh)
      .then(
        () => {
          console.log('DELETED');
        }
      )
      .catch(
        () => {
          console.log('error');
        }
      )
  }

 const Create = async(body)=>{
  axios.post('/prod/prodPost/',body)
  .then(
  ()=>{
    setRefresh(!refresh)
    console.log('Created');
  }
  )
  .catch(
  ()=>{
    console.log('error');
  }
  )
 }
 const UpdateOne = async(id , body)=>{
  await axios.put(`/prod/prodUpdate${id}` ,body)
  .then(
    ()=>{
      console.log('Updated');
    }
  )
  .catch(
    ()=>{
      console.log('ERROR');
    }
  )
 }
const Searsh = (term)=>{
  const searshed = shopData.filter((e)=>{
    return e.name === term
  })
  setShopData (searshed)
}

  return (
    <div>
      <Navbar />
      <Shoplist shopData={shopData} delete={drop} update = {UpdateOne}/>
      <CreateProd create={Create}/>
      <Update />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
