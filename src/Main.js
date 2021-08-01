import React,{useState,useEffect} from 'react'
import max from "./img/max.png"
import min from "./img/min.png"
import pressure from "./img/pressure.png"
import humudity from "./img/humudity.png"

export default function Main(){

const key ="495b4c597fd44fa0d2676614e9198571";

const[all_data,setAllData]=useState('');
const[city_name,setCityName]=useState('nagpur');

useEffect(()=>{
const getTemp=async()=>{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&unit=metric&appid='+key)

.then(res=>res.json())
.then(abc=>{
setAllData(abc.main);

})
};

getTemp();

},[city_name])

// var =10;

return(

<div className="container mt-3">
  <div className="row mb-3">
    <div className="col-md-7">
      <input type="text" class="form-control" value={city_name} onChange={(e)=>{setCityName
      (e.target.value)}} placeholder="enter city name"/>
    </div>

  </div>
  <div class="row">
    <div class="col-3 box">
      <h4 scope="col">Max Temp</h4>
      <img src={max} width="130px" height="120px"></img>
      {typeof all_data=="undefined" ? "loading" : all_data.temp_max}
    </div>

    <div class="col-3 box">
      <h4 scope="col">Min Temp</h4>
      <img src={max} width="130px" height="120px"></img>
      {typeof all_data=="undefined" ? "loading" : all_data.temp_min}
    </div>

    <div class="col-3 box">
      <h4 scope="col">Pressure</h4>
      <img src={pressure} width="130px" height="120px"></img>
      {typeof all_data=="undefined" ? "loading" : all_data.pressure}
    </div>

    <div class="col-3 box">
      <h4 scope="col">Humudity</h4>
      <img src={humudity} width="130px" height="120px"></img>
      {typeof all_data=="undefined" ? "loading" : all_data.humidity}
    </div>
  </div>
</div>

);
}