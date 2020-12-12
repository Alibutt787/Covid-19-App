import React, { useEffect, useState, useContext } from 'react'
import { contx } from '../chooseFile/match/Maatch'
function Caard() {

  const { stat } = useContext(contx);
  const [Api, setApi] = useState([]);
  useEffect(() => {
    async function hy() {
      const datta = await fetch('https://api.covid19api.com/summary')
      const object = await (datta.json());

      if (stat === "Global") {

        const car = {
          nam: "Global",
          conf: object.Global.TotalConfirmed,
          newconf: object.Global.NewConfirmed,
          reco: object.Global.TotalRecovered,
          newreco: object.Global.NewRecovered,
          death: object.Global.TotalDeaths,
          newdeath: object.Global.NewDeaths,
          dat: object.Countries[2].Date.substring(0, 10),
        }
        setApi(car);

      }


      else {
        object.Countries.map((data, ind) => {
          if (data.Country === stat) {
            const car = {
              nam: data.Country,
              conf: data.TotalConfirmed,
              newconf: data.NewConfirmed,
              reco: data.TotalRecovered,
              newreco: data.NewRecovered,
              dat: data.Date.substring(0, 10),
              death: data.TotalDeaths,
              newdeath: data.NewDeaths,

            }
            setApi(car);
            console.log(Api);
          }  }) } }
    hy();
  })

  if (Api === undefined) { return "Loading...." }
  return (
    <>
      <h2 className="card m-3  shadow  text-center p-3" style={{ display: "inline-block" }}>{Api.nam} Live <b>Update🔊</b></h2>
      <div className="d-md-flex  justify-content-center  ">
        <div className="card m-3 shadow  text-left" style={{ height: "350px", borderBottom: " 8px solid blue" }} >
          <div className="card-body"   >
            < h5 className="card-title mt-1"  ><b> Total  Confirmed Cases  </b><br /> </h5>
            <h1><b>{Api.conf}</b></h1>
            <b>
              <h3> Today New Cases </h3>
              <h2>{Api.newconf}</h2>
            </b>
            Date:  <b>  {Api.dat}</b>
            <p className=" mt-2 card-text"><b>Merciful God,</b> hear our fervent prayer for all who Recover/suffer from the coronavirus.</p>
          </div>
        </div>




        <div className="card m-3 shadow  text-left" style={{ height: "350px", borderBottom: " 8px solid green" }} >
          <div className="card-body"  >
            < h5 className="card-title mt-1"><b> Total Recovered  </b><br /> </h5>
            <h1><b> {Api.reco}</b></h1>
            <b>
              <h3> Today New Recovered </h3>
              <h2>{Api.newconf}</h2>
            </b>
            Date:  <b>  {Api.dat}</b>
            <p className=" mt-2 card-text"><b>During pandemic</b> we pray for the sick, the frightened, those who have Saved throughout this pedamic</p>
          </div>
        </div>





        <div className="card m-3 shadow  text-left" style={{ height: "350px", borderBottom: " 8px solid Brown" }} >
          <div className="card-body"   >
            <h5 className="card-title mt-1"><b>Total Deaths  </b> <br /> </h5>
            <h1><b>{Api.death}</b></h1>
            <b>
              <h3> Today Deaths </h3>
              <h2>{Api.newdeath}</h2>
            </b>
            Date:  <b>  {Api.dat}</b>
            <p className=" mt-2 card-text"><b>Beautiful Allah !</b> forgave all miskates of those people who lost thier lifes, during this pandemic.</p>
          </div>
        </div>
      </div>




    </>
  )
}
export default Caard;