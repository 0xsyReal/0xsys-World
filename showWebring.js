
const webringImages = [
  "https://i.hizliresim.com/czozt3i.gif",
  "https://i.hizliresim.com/aefuz92.png",
  "https://i.hizliresim.com/76irlcf.jpg",
  "https://i.hizliresim.com/8x1dwer.gif",
  "https://i.hizliresim.com/q3xr94q.jpg",
  "https://i.hizliresim.com/s14oj76.jpg",
  "https://i.hizliresim.com/7ow5vfh.gif",
  "https://i.hizliresim.com/1n9y4cq.jpg",
  "https://i.hizliresim.com/k7ktxkb.png",
  "https://i.hizliresim.com/qqg858v.jpg",
  "https://i.hizliresim.com/loaubpb.jpg",
  "https://i.hizliresim.com/700jg0c.jpg",
  "https://i.hizliresim.com/1zpz5zg.jpg",
  "https://i.hizliresim.com/rd0jlh4.jpg",
  "https://i.hizliresim.com/hirmbtj.jpg",
  "https://i.hizliresim.com/4yfidk7.jpg",
  "https://i.hizliresim.com/llqseyh.png",
  "https://i.hizliresim.com/cnmzw17.png",
  "https://i.hizliresim.com/6rvk3cp.jpg"
];


let lastIndex = parseInt(sessionStorage.getItem("lastWebringImageIndex")) || -1;
let newIndex;


do {
  newIndex = Math.floor(Math.random() * webringImages.length);
} while (newIndex === lastIndex && webringImages.length > 1);


sessionStorage.setItem("lastWebringImageIndex", newIndex);


const imgurlSelfWebring = webringImages[newIndex];


const templateWebring = document.createElement("div");
templateWebring.innerHTML = `
<style>
  #templateWebring {
    width: 300px !important;
    text-align: center !important;
    height: 164px !important;
    border: 2px solid #DD28A7 !important;
    margin: auto !important;
    background-image: url('https://webring.koinuko.pink/img/bg.png');
    background-size: cover;
    font-family: 'Comic Sans MS', cursive, sans-serif !important;
    color: #452134 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #webringiconbox {
    border: 2px solid #DD28A7 !important;
    overflow: hidden !important;
    height: 100px !important;
    width: 100px !important;
    margin-top: 8px !important;
  }
  #iconWebring {
    width: 100px !important;
    height: 100px !important;
  }
  #webringdesc {
    font-size: 16px !important;
    font-weight: bold !important;
    color: #D66BA0 !important;
    padding: 5px !important;
    width: 220px !important;
    text-align: center !important;
    text-shadow: 1px 1px 1px #fff5fa;
  }
</style>

<div id="templateWebring">
  <div id="webringiconbox">
    <img id="iconWebring" src="${imgurlSelfWebring}" alt="Webring Icon">
  </div>
  <p id="webringdesc">🎀 Cuteness is a defense mechanism. Please do not engage.</p>
</div>
`;

document.getElementById("selfinsertwebring").appendChild(templateWebring);