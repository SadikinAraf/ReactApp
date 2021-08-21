import React from 'react';
import Card1 from './component/card';
import Card2 from './component/card2'
const desc = "Lorem ipsum dolor sit consectetur adipisicing elit. Deleniti eius rem in tempora accusamus dolorem sunt adipisci placeat quod cumque?"
function App(){
return(
  <div>
    <div className="cardHolder1">
    <Card1 classCss="one com" name = "Card 1" desc={desc} btext="Click me"></Card1>
    <Card1 classCss="two com" name = "Card 2" desc={desc} btext="Click me"></Card1>
    <Card1 classCss="three com" name = "Card 3" desc={desc} btext="Click me" ></Card1>
    </div>
    
  <Card2 name="Sadikin"></Card2>
  </div>
)
}
export default App;