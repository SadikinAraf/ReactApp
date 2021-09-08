import React from 'react';
import Card1 from './component/card';
import Card2 from './component/card2';
import data1 from './data.json';


const desc = "aaa"
function App(){
  
return(
  <div>
    <div className="cardHolder1">
    <Card1 classCss={data1[0].cName} name ={data1[0].title} desc={data1[0].desc} btext={data1[0].btxt}></Card1>
    <Card1 classCss={data1[1].cName} name = {data1[1].title} desc={data1[1].desc}btext={data1[1].btxt}></Card1>
    <Card1 classCss={data1[2].cName} name = {data1[2].title} desc={data1[2].desc}btext={data1[2].btxt} ></Card1>
    </div>
    
  <Card2 name="Sadikin"></Card2>
  </div>
)
}
export default App;