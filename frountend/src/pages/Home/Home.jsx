import React, { useContext, useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { StoreContext } from '../../Context/StoreContext'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


export const Home = () => {
  const value=useContext(StoreContext);
  console.log({value});
  const [category , setCategory] = useState("All")
  return (
    <div> 
      <Header/>
      <ExploreMenu  category = {category} setCategory = {setCategory}/>
      <FoodDisplay category = {category} />
      <AppDownload/>
    </div>
  )
}
