var nameSelfWebring = "0xsy";
var quoteSelfWebring = "🎀 Cuteness is a defense mechanism. Please do not engage.";
var imgurlSelfWebring = "https://i.pinimg.com/736x/72/05/2d/72052d9d64d420b1453cfbc3cc0fdf5a.jpg";

var templateWebring = document.createElement("selfinsertwebring");
templateWebring.innerHTML = 
<style>
  #templateWebring {
    width: 300px;
    height: 164px;
    margin: auto;
    background-image: url('https://webring.koinuko.pink/img/bg.png');
    background-size: cover;
    font-family: Verdana;
    color: #452134;
    text-align: center;
    border: 2px solid #DD28A7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  #webringdesc {
    font-size: 18px;
    font-weight: bold;
    color: #BF3C8E;
    line-height: 1.4;
  }

  #webringiconbox {
    display: none;
  }
</style>

<div id='templateWebring'>
  <div id='webringdesc'>
    <p>${quoteSelfWebring}</p>
  </div>
</div>
;
document.getElementById("selfinsertwebring").appendChild(templateWebring);
