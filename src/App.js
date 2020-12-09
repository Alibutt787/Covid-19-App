import React from 'react'
import Caard from './Card/Card'
import Choosefile from './chooseFile/choosefile'
import{Footer} from './Footer'
import { Maatch} from './chooseFile/match/Maatch'


function App() {

  return (
   <Maatch>
   <>
      <div className="w-2 pt-4 d-flex " ><img style={{width:"150px" ,justifyContent:"center",height:"120px"}}src="https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlydXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" 
       alt="Corna png" />
       <p className="pt-4  " style={{fontSize:"30px"}}><b>COVID-19 APP</b></p></div>
      <br/>
      <div className=" container">
      <Choosefile/>
       <br/>
       <br/>
   
     <Caard />
     
    <br/>
    <br/>
    <br/>
    <br/>
   <br/>
     
     </div>
     <Footer/>
    </>
</Maatch>
  );
}

export default App;
