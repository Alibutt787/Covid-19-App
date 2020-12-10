import React,{useEffect,useState,useContext} from 'react'
import CountUp from 'react-countup';
import {contx} from '../chooseFile/match/Maatch'
 function Caard (){

  const {stat} = useContext(contx);
const [Api, setApi] = useState([]);
useEffect(() => {
 async function hy(){
    const datta= await fetch('https://api.covid19api.com/summary')
   // const datta= await fetch("./Card.js/api.json")
    const object=await(datta.json());
       object.Countries.map((data,ind)=>{
         
       if(data.Country===stat){
          
        const car=   { nam : data.Country,
            conf:data.TotalConfirmed,
            newconf:data.NewConfirmed,
            reco:data.TotalRecovered,
            newreco:data.NewRecovered,
            dat:data.Date,
            death:data.TotalDeaths,
            newdeath:data.NewDeaths,

          }  
            setApi(car);
          }
        else {return "loading....."}


          }); 

         

        }
       
  hy();
})
   if(!Api)
   {return "Loading...."}
  return (
    <>
     <h3 className="card m-3  shadow  text-center p-3"  style={{fontFamily: "Ranchers, cursive" ,display:"inline-block"}}>{Api.nam} Update🔊</h3>
    <div className="d-md-flex  justify-content-center  ">
     
      <div className="card m-3 shadow  text-left"  style={{ height:"350px",  borderBottom:" 8px solid blue"}} >
  
  <div className="card-body" style={{ fontFamily: "Nerko One, cursive"}}   >
  
  < h5 className="card-title mt-1"  ><b> Total  Confirmed Cases  </b><br/> </h5>
  <h1><b>{Api.conf}</b></h1>
<b>
<h3> Today New Cases </h3>
<h2>{Api.newconf}</h2>
  <CountUp start={0} end={Api.conf} duration={4.5} separator=","/>
</b>  
    <p className=" mt-2 card-text"><b>Merciful God,</b> hear our fervent prayer for all who Recover/suffer from the coronavirus.</p>
   
  </div>
  </div>

   


  <div className="card m-3 shadow  text-left"  style={{ height:"350px",  borderBottom:" 8px solid green"}} >
  
  <div className="card-body"   style={{ fontFamily: "Nerko One, cursive"}}  >

  < h5 className="card-title mt-1"><b> Total Recovered  </b><br/> </h5>
  <h1><b>{Api.reco}</b></h1>
<b>
<h3> Today New Recovered </h3>
<h2>{Api.newreco}</h2>
  <CountUp start={0} end={Api.conf} duration={4.5} separator=","/>
</b> 
  
    <p className=" mt-2 card-text"><b>During pandemic</b> we pray for the sick, the frightened, those who have died through this pedamic</p>
  
  </div>
  </div>






  <div className="card m-3 shadow  text-left"  style={{ height:"350px",  borderBottom:" 8px solid Brown"}} >
  
  <div className="card-body"  style={{ fontFamily: "Nerko One, cursive"}}   >
  
  <h5 className="card-title mt-1"><b>Total Deaths  </b> <br/> </h5>
  <h1><b>{Api.death}</b></h1>
<b>
<h3> Today Deaths </h3>
<h2>{Api.newdeath}</h2>
  <CountUp start={0} end={Api.conf} duration={4.5} separator=","/>
</b> 
  
    <p className=" mt-2 card-text"><b>Beautiful Allah !</b> forgave all miskates of those people who lost thier lifes, during this pandemic.</p>
   
  </div>
  </div>
</div>
</>
  )
}
export default Caard;