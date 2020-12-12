import React, { useEffect, useContext, useState } from "react";
import { contx } from './match/Maatch'

export const Choosefile = () => {

  const { fetc } = useContext(contx);

  const [sta, setsta] = useState([]);
  const [hyt, sethyt] = useState("Pakistan");

  useEffect(() => {
    async function data() {
      const data = await fetch("https://api.covid19api.com/summary");
     //  const { countries } = await (data.json()); change api
      const { Countries } = await (data.json());
        console.log(Countries);
      //  setsta(countries); for change api
          setsta(Countries);
      
    }
    data();
  }, [])

  fetc(hyt);
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
       
        
      <select className=" bg-grey p-2 w-75 " placeholder="Select Country" onChange={(e) => sethyt(e.target.value)}>
        <option disabled>--Select Country--</option>
        <option hidden>--Select Country--</option>
        <option >Global</option>
        {sta.map((dat, ind) => { return <option key={ind}>{dat.Country}</option> })}

      </select>



    </div>
  );
};

export default Choosefile;
