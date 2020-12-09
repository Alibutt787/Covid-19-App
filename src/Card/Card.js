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
      
const car ={ 
            nam : data.Country,
            conf:data.TotalConfirmed,
            reco:data.TotalRecovered,
            dat:data.Date,
            death:data.TotalDeaths}
         
          setApi(car);
           }
        else {return "loading....."}


          })

         

        }
       
  hy();
})
 console.log(Api);
   if(!Api)
   {return "Loading...."}
  return (
    <div className="d-md-flex  justify-content-center  ">
      <div className="card m-3 shadow  text-left"  style={{ height:"250px",  borderBottom:" 8px solid blue"}} >
  
  <div className="card-body"    >
  <h3>{Api.nam} Update🔊</h3>
  < h5 className="card-title mt-1"><b> Total Cases  </b><br/> </h5>

<b>
<h1>{Api.conf}</h1>
  <CountUp start={0} end={Api.conf} duration={4.5} separator=","/>
</b>  
    <p className=" mt-2 card-text"><b>Merciful God,</b> hear our fervent prayer for all who Recover/suffer from the coronavirus.</p>
   
  </div>
  </div>

   


  <div className="card m-3 shadow  text-left"  style={{ height:"250px",  borderBottom:" 8px solid green"}} >
  
  <div className="card-body"    >

  < h5 className="card-title mt-1"><b> Total Recovered  </b><br/> </h5>
  <b>
  <h1>{Api.reco}</h1>
  <CountUp start={0} end={Api.reco} duration={.5} separator=","/>
  </b>
  
    <p className=" mt-2 card-text"><b>During pandemic</b> we pray for the sick, the frightened, those who have died through this pedamic</p>
  
  </div>
  </div>






  <div className="card m-3 shadow  text-left"  style={{ height:"250px",  borderBottom:" 8px solid Brown"}} >
  
  <div className="card-body"    >
  
  <h5 className="card-title mt-1"><b>Total Deaths  </b> <br/> </h5>
  <b>
  <h1>{Api.death} </h1>
  <CountUp start={0} end={Api.death} duration={.5} separator=","/>
  </b>
  
    <p className=" mt-2 card-text"><b>Beautiful Allah !</b> forgave all miskates of those people who lost thier lifes, during this pandemic.</p>
   
  </div>
  </div>
</div>
  )
}
export default Caard;