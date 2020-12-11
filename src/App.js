import React from 'react'
import Caard from './Card/Card'
import Choosefile from './chooseFile/choosefile'
import { Footer } from './Footer'
import { Maatch } from './chooseFile/match/Maatch'


function App() {

  return (
    <Maatch>
      <>
        <div className="w-2 pt-4 d-sm-flex  text-center " >
          <img style={{ width: "250px", justifyContent: "center",borderRadius:"50px", height: "150px" }} 
          src="https://media4.giphy.com/media/Q66Otqclp5Xmzg2B8X/giphy.gif"
          alt="Corna Gif " />
          <p className="pt-4   " style={{ fontSize: "30px" }}
          ><b>COVID-19 APP</b></p></div>
        <br />
        <div className=" container">
          <Choosefile />
          <br />


          <Caard />

          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
        <Footer />
      </>
    </Maatch>
  );
}
export default App;
