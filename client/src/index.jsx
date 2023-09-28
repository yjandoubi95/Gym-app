import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from './components/Navbar.jsx'
import Shoplist from './components/shop/Shoplist.jsx'
import SubsecribesLists from './Subscribes/SubsecribesLists.jsx'
import CreateProd from './components/CreateProd.jsx'
import Home from './components/shop/Home.jsx'
import Update from './components/Update.jsx'


const App = () => {
  const [subsData , setSubsData] = useState([])
  const [shopData, setShopData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [currentData , setCurrentData] = useState([])

  const fetchSHop = async () => {
    await axios.get('/prod/prodGetAll')
      .then(
        (res) => {
          console.log(res.data)
          setShopData(res.data)
          setCurrentData(res.data)
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
  }, [!refresh])

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
  await axios.put(`/prod/prodUpdate/${id}` ,body)
  .then(
    ()=>{
      console.log('Updated');
      setRefresh(!refresh)
    }
  )
  .catch(
    (error)=>{
      console.log(error);
    }
  )
 }
const Searsh = (term)=>{
  const searshed = currentData.filter((e)=>{
    return e.name === term
  })
  setShopData (searshed)
}
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const fetchSub =  () => {
  axios.get('/sub/subGetAll')
   .then(
     (res) => {
       console.log(res.data)
       setSubsData(res.data)
     }
   )
   .catch(
     (error) => {
       console.log(error);
     }
   )
}

const dropSub =  (id) => {
  axios.delete(`/sub/subdelete/${id}`)
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
useEffect(() => {
  fetchSHop()
  fetchSub()
 }, [refresh])
  return (
    <div>
      <Navbar Searsh = {Searsh}/>

      
      <Shoplist shopData={shopData} delete={drop} UpdateOne = {UpdateOne}/>
      <CreateProd create={Create}/>
      
      {/* <SubsecribesLists subsData = {subsData} dropSub={dropSub}/> */}

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
