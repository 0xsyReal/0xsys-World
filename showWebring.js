var nameSelfWebring = "0xsy";
var quoteSelfWebring = "🎀 Cuteness is a defense mechanism. Please do not engage.";
var imgurlSelfWebring = "https://i.pinimg.com/736x/72/05/2d/72052d9d64d420b1453cfbc3cc0fdf5a.jpg";

// Div olarak oluşturulmalı!
var templateWebring = document.createElement("div");
templateWebring.id = "templateWebring";
templateWebring.innerHTML = `
  <style>
    #templateWebring {
      width: 300px;
      height: 164px;
      margin: 20px auto;
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
  </style>
  <div id='webringdesc'>
    <p>${quoteSelfWebring}</p>
  </div>
`;

document.getElementById("selfinsertwebring").appendChild(templateWebring);
