import React,{useState} from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Card from './components/card'
import cardData from './components/carddata'
import './style.css'
import './App.css'

function App() {

// let favimg=useState('')

  let [favimage,setfavimage]=useState([])
  function getimage(imgSrc){
    // setfavimage(favimage=imgSrc) //otta image anengil engane ezhutham
    setfavimage([...favimage,imgSrc])
  }
  let userfaviamge=favimage.map((imgSrc,button)=>{
    return(  
      <i onClick={()=>{
        removefavimage(imgSrc)
      }}>
         <img src={imgSrc} />
      </i>
      
    )
  })
  function removefavimage(imgSrc){
    setfavimage([...favimage].filter((currentimage)=>{
      return currentimage !=imgSrc
    }))
  }

 let card=cardData.map((carditem)=>{
    // console.log(carditem.name);
    return(
      <Card
        cardcontent={{
          imgSrc:carditem.imgSrc,
          name:carditem.name,
          phone:carditem.phone,
          email:carditem.email,
        }}
        cardfn={
          getimage
        }
      />

      
    )
  })

  return (
    <>
      {/* <h1>hello</h1> */}
      <Header/>
      <Hero/>\
      <div className='container'>
        <div className='card-Container'>
          {card}
        </div>
        <aside className='favorite'>favorite
        {userfaviamge}
        </aside>
      </div>
      
  
      
      
      <Footer/>
    </>
  )
}

export default App
