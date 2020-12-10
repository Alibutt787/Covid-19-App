import React,{useEffect,useContext , useState} from "react";
import {contx} from './match/Maatch'

export const Choosefile = () => {

  const {fetc} = useContext(contx);

  const [sta, setsta] = useState([]);
  useEffect(() => {
    async function data(){
      const data =await fetch("https://covid19.mathdro.id/api/countries");
       const {countries}=await(data.json());
       setsta(countries);
      
    }
    data();
  }, [])

const [hyt, sethyt] = useState("Pakistan");

 fetc(hyt); 
  return (
    <div style={{justifyContent:"center" ,display:"flex"}}>
    
      <select  className=" bg-lightgrey p-2 w-75  " onChange={(e) => sethyt(e.target.value)}>
      <option disabled>--Select Country--</option>
        <option hidden>--Select Country--</option>
          {sta.map((dat ,ind)=>{return <option key={ind}>{dat.name}</option>})}
           <option >pakistan</option>
     
     </select>
     
    

    </div>
  );
};

export default Choosefile;
