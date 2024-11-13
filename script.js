//ADD COMMENT    
function addDiscussion() {
  let name = document.getElementById("name--value").value;
  let discussion = document.getElementById("comment--value").value;
  
  //KALO name atau discussion KOSONG ALERT 
  if (name === "" || discussion === "") {
    alert("Please fill the empty field");
    return
  }
      
  const discussionListPost = document.getElementById("discussion--container--list--post");
  const divList = document.createElement("div");
  discussionListPost.append(divList);
          
  const divCard = document.createElement('div');
  divCard.className = "container--flex--row"

  const profilePhoto = document.createElement("img");
  profilePhoto.src = ('src/misc/unknown_icon.png');

  const discussionName = document.createElement("h2");
  discussionName.textContent = name;
  divCard.append(profilePhoto);
  divCard.append(discussionName);

  const discussionValue = document.createElement("h3");
  discussionValue.textContent = discussion;

  const lineBreak = document.createElement("hr");

  divList.append(divCard);
  divList.append(discussionValue);
  divList.append(lineBreak);
  document.getElementById("name--value").value = "";
  document.getElementById("comment--value").value = "";
}


// CHANGE BACKGROUNDS
let bgIMG = [];
const bgHome = document.getElementById("home");

for (let i = 0; i < 10; i++){
  bgIMG.push(`src/bgs/bg${i}.jpg`);
}
function changeBackground() {
  var i = Math.floor((Math.random() * 10));
  bgHome.style.backgroundImage = 'url("'+ bgIMG[i] +'")';
}
window.setInterval(changeBackground, 10000);


// FETCH "ship.json"
let shipJSON = [];

//ASYNC MERUPAKAN FUNCTION UNTUK RETURN PROMISE
async function fetchJSON() {
  //PROMISE an object that links producing & consuming code
  try {
    const response = await fetch('ship.json'); //PRODUCING CODE
    shipJSON = await response.json(); //PRODUCING CODE
    createCard() //CONSUMING CODE
    addEventListenerToCard() //CONSUMING CODE
  } catch (error) {
    console.error("Error loading JSON data:", error); //KALO TIDAK BISA MENGAMBIL AKAN MENAMPILKAN ERROR
  }
}


//LOAD async funtion loadJSON() KETIKA LIVE SERVER NYALA
document.addEventListener("DOMContentLoaded", () => {
  fetchJSON();
});


// //FILTER
// document.querySelectorAll(".shiplist .shiplist--container .shiplist--container--list--class li").forEach((li) => {
//   li.addEventListener("click", () => {
//     const filter = li.getAttribute("data-filter");
//     filterShip(filter);
//   })
// })

// function filterShip(filter) {
//   let container;
//   // console.log(filter)

//   const shiplistContainer = document.getElementById("shiplist--container--ship");
//   const conta = document.getElementById("shiplist--container")

//   const divConta = document.createElement("div");
//   divConta.id = "shiplist--container--ship";
  
//   conta.appendChild(divConta);

//   const divTitle = document.createElement("h3");
  
//   const divFill = document.createElement("div")
//   divFill.classList.add("shiplist--container--ship", "container--flex--row");
  
//   divConta.append(divTitle)
//   divConta.append(divFill)

//   shiplistContainer.remove()
  
//   if (filter === "BB__BC__BBV__BM__IXm") {
//     divTitle.textContent = "BB/BC/BBV/BM/IXm"

//     shipJSON.forEach((ship) => {
      
//       if (ship.type === "Battleship" || ship.type === "Aviation Battleship") { container = divFill; }
//       else { return; }

//       if (container) {
//         const htmlContent = `
//           <div class="shiplist--container--ship--card">
//             <div class="shiplist--container--ship--card--img">
//               <img src="${ship.image.potrait}" alt="${ship.name}" data-index="${ship.id}" draggable="false"/>
//             </div>
//             <div class="shiplist--container--ship--card--title">
//               <h4>${ship.name}</h4>
//             </div>
//           </div>
//         `;

//         container.insertAdjacentHTML("beforeend", htmlContent)
//         addEventListenerToCard();
//       }
//     });
//   }
//   if (filter === "CV__CVL") {
//     divTitle.textContent = "CV/CVL"

//     shipJSON.forEach((ship) => {
//       if (ship.type === "Aircraft Carrier") { container = divFill; }
//       else { return; }

//       if (container) {
//         const htmlContent = `
//           <div class="shiplist--container--ship--card">
//             <div class="shiplist--container--ship--card--img">
//               <img src="${ship.image.potrait}" alt="${ship.name}" data-index="${ship.id}" draggable="false"/>
//             </div>
//             <div class="shiplist--container--ship--card--title">
//               <h4>${ship.name}</h4>
//             </div>
//           </div>
//         `;

//         container.insertAdjacentHTML("beforeend", htmlContent)
//         addEventListenerToCard()
//       }
//     });
//   }
//   if (filter === "CA__CB") {
//     divTitle.textContent = "CA/CB"

//     shipJSON.forEach((ship) => {
//       if (ship.type === "Heavy Cruiser" || ship.type === "Large Cruiser") { container = divFill; }
//       else { return; }

//       if (container) {
//         const htmlContent = `
//           <div class="shiplist--container--ship--card">
//             <div class="shiplist--container--ship--card--img">
//               <img src="${ship.image.potrait}" alt="${ship.name}" data-index="${ship.id}" draggable="false"/>
//             </div>
//             <div class="shiplist--container--ship--card--title">
//               <h4>${ship.name}</h4>
//             </div>
//           </div>
//         `;

//         container.insertAdjacentHTML("beforeend", htmlContent)
//         addEventListenerToCard()
//       }
//     });
//   }
//   if (filter === "CL__IXv") {
//     divTitle.textContent = "CL/IXv"

//     shipJSON.forEach((ship) => {
//       if (ship.type === "Light Cruiser") { container = divFill; }
//       else { return; }

//       if (container) {
//         const htmlContent = `
//           <div class="shiplist--container--ship--card">
//             <div class="shiplist--container--ship--card--img">
//               <img src="${ship.image.potrait}" alt="${ship.name}" data-index="${ship.id}" draggable="false"/>
//             </div>
//             <div class="shiplist--container--ship--card--title">
//               <h4>${ship.name}</h4>
//             </div>
//           </div>
//         `;

//         container.insertAdjacentHTML("beforeend", htmlContent)
//         addEventListenerToCard()
//       }
//     });
//   }
//   if (filter === "DD__DDG") {
//     divTitle.textContent = "DD/DDG"

//     shipJSON.forEach((ship) => {
//       if (ship.type === "Destroyer") { container = divFill; }
//       else { return; }

//       if (container) {
//         const htmlContent = `
//           <div class="shiplist--container--ship--card">
//             <div class="shiplist--container--ship--card--img">
//               <img src="${ship.image.potrait}" alt="${ship.name}" data-index="${ship.id}" draggable="false"/>
//             </div>
//             <div class="shiplist--container--ship--card--title">
//               <h4>${ship.name}</h4>
//             </div>
//           </div>
//         `;

//         container.insertAdjacentHTML("beforeend", htmlContent)
//         addEventListenerToCard()
//       }
//     });
//   }
// }
const shipFilters = {
  "BB__BC__BBV__BM__IXm": { title: "BB/BC/BBV/BM/IXm", types: ["Battleship", "Aviation Battleship"] },
  "CV__CVL": { title: "CV/CVL", types: ["Aircraft Carrier"] },
  "CA__CB": { title: "CA/CB", types: ["Heavy Cruiser", "Large Cruiser"] },
  "CL__IXv": { title: "CL/IXv", types: ["Light Cruiser"] },
  "DD__DDG": { title: "DD/DDG", types: ["Destroyer"] }
};


document.querySelectorAll(".shiplist .shiplist--container .shiplist--container--list--class li").forEach((li) => {
  li.addEventListener("click", () => {
    const filter = li.getAttribute("data-filter");
    filterShip(filter);

    document.querySelectorAll(".shiplist .shiplist--container .shiplist--container--list--class li").forEach((item) => {
      item.classList.remove("active__filter")
    });
    li.classList.add("active__filter");
  });
});


function filterShip(filter) {
  const shiplistContainer = document.getElementById("shiplist--container--ship");
  const conta = document.getElementById("shiplist--container");

  const divConta = document.createElement("div");
  divConta.id = "shiplist--container--ship";
  conta.appendChild(divConta);

  const divTitle = document.createElement("h3");
  divTitle.className = "text--h3";

  const divFill = document.createElement("div");
  divFill.classList.add("shiplist--container--ship", "container--flex--row");

  const selectedFilter = shipFilters[filter];
  divTitle.textContent = selectedFilter.title;
  divConta.append(divTitle);
  divConta.append(divFill);

  shiplistContainer.remove();

  shipJSON.forEach((ship) => {
    if (selectedFilter.types.includes(ship.type)) {
      const htmlContent = `
        <div class="shiplist--container--ship--card">
          <div class="shiplist--container--ship--card--img">
            <img src="${ship.image.potrait}" alt="${ship.name}" data-index="${ship.id}" draggable="false"/>
          </div>
          <div class="shiplist--container--ship--card--title">
            <h4>${ship.name}</h4>
          </div>
        </div>
      `;

      divFill.insertAdjacentHTML("beforeend", htmlContent);
    }
  });

  addEventListenerToCard();
}



//CREATE CARD
function createCard() {
  const containerBB_BBV = document.getElementById("shipBB--BC--BBV--BM--IXm")
  const containerCV = document.getElementById("shipCV--CVL")
  const containerCB_CA = document.getElementById("shipCA--CB");
  const containerCL = document.getElementById("shipCL--IXv")
  const containerDD = document.getElementById("shipDD--DDG")

  shipJSON.forEach((ship) => {
    let container;

    //SORTIR SHIP BERDASARKAN TYPE
    if (ship.type === "Battleship" || ship.type === "Aviation Battleship") { container = containerBB_BBV; }
    else if (ship.type === "Aircraft Carrier") { container = containerCV; }
    else if (ship.type === "Heavy Cruiser" || ship.type === "Large Cruiser") { container = containerCB_CA; }
    else if (ship.type === "Light Cruiser") { container = containerCL; }
    else if (ship.type === "Destroyer") { container = containerDD; }

    if (container) {
      const htmlContent = `
        <div class="shiplist--container--ship--card">
          <div class="shiplist--container--ship--card--img">
            <img src="${ship.image.potrait}" alt="${ship.name}" data-index="${ship.id}" draggable="false"/>
          </div>
          <div class="shiplist--container--ship--card--title">
            <h4>${ship.name}</h4>
          </div>
        </div>
      `;
      
      //MEMASUKKAN HTML CODE PADA CHILD ELEMENT TERAKHIR
      container.insertAdjacentHTML('beforeend', htmlContent)
    }
  });
}


//ADD EVENT LISTENER TO CARD CONTAINER
function addEventListenerToCard() {
  document.querySelectorAll(".shiplist--container--ship--card--img img").forEach((img) => {
    img.addEventListener("click", () => {
      const index = parseInt(img.getAttribute("data-index"));
      openModalBox(index);
    });
  });
}


//OPEN MODAL BOX
const navBar = document.getElementById("navbar");
const modalBox = document.createElement("div");
modalBox.id = "modal";
modalBox.className = "modal";
modalBox.style.display = "none";
document.body.appendChild(modalBox);

function openModalBox(index) {
  const ship = shipJSON.find((ship) => ship.id === index);
  if (!ship) {
    console.error("Ship data not found for ID:", index);
    return;
  }
    
  const modalBoxContent = document.createElement("div");
  modalBoxContent.className = "modal-content";
  
    const htmlContent = `
    <div class="modal--overlay" onclick="closeModalBox()">
      <div class="modal--container--control">
        <h1 class="close--modal" onclick="closeModalBox()">X</h1>
      </div>
    </div>
      <div class="modal--container container--flex--row" data-aos="zoom-in-down">
        <div class="modal--container--table--left container--flex--column">
          <div class="card">
            <img src="${ship.image.full}" alt="${ship.name}" class="image--full" draggable="false"/>
          </div>
          <div class="table--ship--desc">
            <table border="1">
              <tbody>
                <tr>
                  <th colspan="2">Ship Identity</th>
                </tr>
                <tr>
                  <th>Name</th>
                  <th class="name">${ship.name}</th>
                </tr>
                <tr>
                  <th>Faction</th>
                  <th class="nationality">${ship.nationality}</th>
                </tr>
                <tr>
                  <th>Rarity</th>
                  <th class="rarity">${ship.rarity}</th>
                </tr>
                <tr>
                  <th>Classification</th>
                  <th class="type">${ship.type}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal--container--table--right container--flex--column">
          <div class="table--ship--stat">
            <table border="1">
              <tbody>
                <tr>
                  <th class="table--title">-</th>
                  <th class="table--title">Health</th>
                  <th class="table--title">Firepower</th>
                  <th class="table--title">Torpedo</th>
                  <th class="table--title">Aviation</th>
                  <th class="table--title">Anti Air</th>
                  <th class="table--title">Evasion</th>
                  <th class="table--title">Armor Type</th>
                </tr>
                <tr>
                  <th class="table--title">Base</th>
                  <th class="health--base">${ship.stat.base.health}</th>
                  <th class="firepower--base">${ship.stat.base.firepower}</th>
                  <th class="torpedo--base">${ship.stat.base.torpedo}</th>
                  <th class="aviation--base">${ship.stat.base.aviation}</th>
                  <th class="anti_air--base">${ship.stat.base.anti_air}</th>
                  <th class="evasion--base">${ship.stat.base.evasion}</th>
                  <th class="armor" rowspan="4">${ship.armor}</th>
                </tr>
                <tr>
                  <th class="table--title">Level 100</th>
                  <th class="health--level_100">${ship.stat.level_100.health}</th>
                  <th class="firepower--level_100">${ship.stat.level_100.firepower}</th>
                  <th class="torpedo--level_100">${ship.stat.level_100.torpedo}</th>
                  <th class="aviation--level_100">${ship.stat.level_100.aviation}</th>
                  <th class="anti_air--level_100">${ship.stat.level_100.anti_air}</th>
                  <th class="evasion--level_100">${ship.stat.level_100.evasion}</th>
                </tr>
                <tr>
                  <th class="table--title">Level 120</th>
                  <th class="health--level_120">${ship.stat.level_120.health}</th>
                  <th class="firepower--level_120">${ship.stat.level_120.firepower}</th>
                  <th class="torpedo--level_120">${ship.stat.level_120.torpedo}</th>
                  <th class="aviation--level_120">${ship.stat.level_120.aviation}</th>
                  <th class="anti_air--level_120">${ship.stat.level_120.anti_air}</th>
                  <th class="evasion--level_120">${ship.stat.level_120.evasion}</th>
                </tr>
                <tr>
                  <th class="table--title">Level 125</th>
                  <th class="health--level_125">${ship.stat.level_125.health}</th>
                  <th class="firepower--level_125">${ship.stat.level_125.firepower}</th>
                  <th class="torpedo--level_125">${ship.stat.level_125.torpedo}</th>
                  <th class="aviation--level_125">${ship.stat.level_125.aviation}</th>
                  <th class="anti_air--level_125">${ship.stat.level_125.anti_air}</th>
                  <th class="evasion--level_125">${ship.stat.level_125.evasion}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table--ship--equippable">
            <table border="1">
              <tbody>
                <tr>
                  <th class="table--title" colspan="4">Equippable</th>
                </tr>
                <tr>
                  <th class="table--title">Slots</th>
                  <th class="table--title">Efficiency</th>
                  <th class="table--title">Equippable</th>
                  <th class="table--title">Max #</th>
                </tr>
                <tr>
                  <th class="table--title">1</th>
                  <th class="slot_1--efficiency">${ship.equipment.slot_1.efficiency}</th>
                  <th class="slot_1--equiabble">${ship.equipment.slot_1.equiabble}</th>
                  <th class="slot_1--max">${ship.equipment.slot_1.max}</th>
                </tr>
                <tr>
                  <th class="table--title">2</th>
                  <th class="slot_2--efficiency">${ship.equipment.slot_2.efficiency}</th>
                  <th class="slot_2--equiabble">${ship.equipment.slot_2.equiabble}</th>
                  <th class="slot_2--max">${ship.equipment.slot_2.max}</th>
                </tr>
                <tr>
                  <th class="table--title">3</th>
                  <th class="slot_3--efficiency">${ship.equipment.slot_3.efficiency}</th>
                  <th class="slot_3--equiabble">${ship.equipment.slot_3.equiabble}</th>
                  <th class="slot_3--max">${ship.equipment.slot_3.max}</th>
                </tr>
                <tr>
                  <th class="table--title">Augment</th>
                  <th class="augment--efficiency">${ship.equipment.augment.efficiency}</th>
                  <th class="augment--equiabble">${ship.equipment.augment.equiabble}</th>
                  <th class="augment--max">${ship.equipment.augment.max}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> 
  `;

  modalBoxContent.innerHTML = htmlContent;
  modalBox.innerHTML = '';
  modalBox.appendChild(modalBoxContent);
  modalBox.style.display = "flex";
  modalBox.style.overflow = "auto"
  document.body.style.overflow = "hidden";
  navBar.style.display = 'none';
}


//CLOSE MODAL BOX
function closeModalBox() {
  modalBox.style.display = "none";
  document.body.style.overflow = "auto";
  navBar.style.display = '';
}


// let shipPotraitBB = [];
// let shipPotraitBBName = ["Alsace", "Bismarck Zwei","Friedrich der Große","Kearsage","Musashi","New Jersey","Sovetsky Soyuz","Ulrich von Hutten","Vanguard","Warspite"];

// for (let i = 0; i < shipPotraitBBName.length; i++){
//   shipPotraitBB.push(`src/ships/main/BB-BC-BBV-BM-IXm/potrait/shippotrait${i}.png`)
// }

// function createCardBB() {
//   let htmlContent = "";
//   const shiplistContainerShipBB = document.getElementById("shipBB");

//   shipPotraitBB.forEach(function (img, i) {
//     htmlContent +=
//     `<div class="shiplist--container--ship--card">
//         <div class="shiplist--container--ship--card--img">
//           <img src="${img}" alt="" data-type="BB" data-index="${i + 0}" />
//         </div>
//         <div class="shiplist--container--ship--card--title">
//           <h4 class="text--h4">${shipPotraitBBName[i]}</h4>
//         </div>
//     </div>`;
//   });

//   shiplistContainerShipBB.innerHTML = htmlContent;
// }
      
// //CREATE CV-CVL CARD
// let shipPotraitCV = [];
// let shipPotraitCVName = ["Amagi(CV)","Admiral Nakhimov","Hakuryuu","Implacable","Shinano","Yorktown II"];
    
// for (let i = 0; i < shipPotraitCVName.length; i++){
//   shipPotraitCV.push(`src/ships/main/CV-CVL/potrait/shippotrait${i}.png`);
// }
      
// function createCardCV() {
//   let htmlContent = "";
//   const shiplistContainerShipCV = document.getElementById("shipCV");
        
//   shipPotraitCV.forEach(function (img, i) {
//   htmlContent +=
//   `<div class="shiplist--container--ship--card">
//     <div class="shiplist--container--ship--card--img">
//       <img src="${img}" alt="" data-type="CV" data-index="${i + 0}" />
//     </div>
//     <div class="shiplist--container--ship--card--title">
//       <h4 class="text--h4">${shipPotraitCVName[i]}</h4>
//     </div>
//   </div>`;
//   });
// shiplistContainerShipCV.innerHTML = htmlContent;
// }
//     createCardCV();
    
    
//     //CREATE CA-CB CARD
//     let shipPotraitCA = [];
//     let shipPotraitCAName = ["Ägir","Azuma","Brest","Drake","Guam","Hindenburg","Kronshtadt","Napoli","Unzen"];
    
//     for (let i = 0; i < shipPotraitCAName.length; i++){
//       shipPotraitCA.push(`src/ships/vanguard/CA-CB/potrait/shippotrait${i}.png`);
//     }
    
//     function createCardCA() {
//       let htmlContent = "";
//       const shiplistContainerShipCA = document.getElementById("shipCA");
      
//       shipPotraitCA.forEach(function (img, i) {
//         htmlContent +=
//         `<div class="shiplist--container--ship--card">
//         <div class="shiplist--container--ship--card--img">
//         <img src="${img}" alt="" data-type="CA" data-index="${i + 0}" />
//         </div>
//         <div class="shiplist--container--ship--card--title">
//         <h4 class="text--h4">${shipPotraitCAName[i]}</h4>
//         </div>
//         </div>`;
//       });
      
//       shiplistContainerShipCA.innerHTML = htmlContent;
//     }
//     createCardCA();
    
    
//     //CREATE CL CARD
//     let shipPotraitCL = [];
//     let shipPotraitCLName = ["Plymouth","San Diego"];
    
//     for (let i = 0; i < shipPotraitCLName.length; i++){
//       shipPotraitCL.push(`src/ships/vanguard/CL/potrait/shippotrait${i}.png`);
//     }
    
//     function createCardCL() {
//       let htmlContent = "";
//       const shiplistContainerShipCL = document.getElementById("shipCL");
      
//       shipPotraitCL.forEach(function (img, i) {
//         htmlContent +=
//         `<div class="shiplist--container--ship--card">
//         <div class="shiplist--container--ship--card--img">
//         <img src="${img}" alt="" data-type="CL" data-index="${i + 0}" />
//         </div>
//         <div class="shiplist--container--ship--card--title">
//         <h4 class="text--h4">${shipPotraitCLName[i]}</h4>
//         </div>
//         </div>`;
//       });
      
//       shiplistContainerShipCL.innerHTML = htmlContent;
//     }
//     createCardCL();
    
    
//     //CREATE DD CARD
//     let shipPotraitDD = [];
//     let shipPotraitDDName = ["Eldrigde","Laffey II","Mogador","Shimakaze","Yuudachi"];
    
//     for (let i = 0; i < shipPotraitDDName.length; i++){
//       shipPotraitDD.push(`src/ships/vanguard/DD/potrait/shippotrait${i}.png`);
//     }
    
//     function createCardDD() {
//       let htmlContent = "";
//       const shiplistContainerShipDD = document.getElementById("shipDD");
      
//       shipPotraitDD.forEach(function (img, i) {
//         htmlContent +=
//         `<div class="shiplist--container--ship--card">
//         <div class="shiplist--container--ship--card--img">
//         <img src="${img}" alt="" data-type="DD" data-index="${i + 0}" />
//             </div>
//             <div class="shiplist--container--ship--card--title">
//             <h4 class="text--h4" data-index="${i + 0}">${shipPotraitDDName[i]}</h4>
//             </div>
//             </div>`;
//           });
          
//           shiplistContainerShipDD.innerHTML = htmlContent;
//         }
        
//         createCardDD();
//         createCardBB();

// // AKHIRNYA JADI JUGA ALHAMDULILLAH THANK YOU ChatGPT-4o
// const navBar = document.getElementById("navbar");
// const modalBox = document.createElement("div");
// modalBox.id = "modal";
// modalBox.className = "modal";
// modalBox.style.display = "none";  // Set awal display menjadi none
// document.body.appendChild(modalBox);

// function openModalBox(type, imgIndex) {
//   // Tentukan direktori gambar penuh berdasarkan tipe
//   let fullImageSrc;
//   let fullNameArray = [];
  
//   if (type === "BB") {
//     fullImageSrc = `src/ships/main/BB-BC-BBV-BM-IXm/ship${imgIndex}.png`;
//     fullNameArray = shipPotraitBBName;
//   } else if (type === "CV") {
//     fullImageSrc = `src/ships/main/CV-CVL/ship${imgIndex}.png`;
//     fullNameArray = shipPotraitCVName;
//   } else if (type === "CA") {
//     fullImageSrc = `src/ships/vanguard/CA-CB/ship${imgIndex}.png`;
//     fullNameArray = shipPotraitCAName;
//   } else if (type === "CL") {
//     fullImageSrc = `src/ships/vanguard/CL/ship${imgIndex}.png`;
//     fullNameArray = shipPotraitCLName;
//   } else if (type === "DD") {
//     fullImageSrc = `src/ships/vanguard/DD/ship${imgIndex}.png`;
//     fullNameArray = shipPotraitDDName;
//   }
//   const fullName = fullNameArray[parseInt(imgIndex)]

//   const modalBoxContent = document.createElement("div");
//   modalBoxContent.className = "modal-content";
  
//   const htmlContent = `
//     <div class="modal--overlay">
//       <div class="modal--container--control">
//         <h1 class="close--modal" onclick="closeModalBox()">X</h1>  <!-- Tambah onclick untuk menutup modal -->
//       </div>
//     </div>
//     <div class="modal--container container--flex--row">
//       <div class="modal--container--table--left container--flex--column">
//         <div class="card">
//           <img src="${fullImageSrc}" alt="" />  <!-- Menggunakan path full image -->
//         </div>
//         <div class="table--ship--desc">
//           <table border="1">
//             <tbody>
//               <tr>
//                 <th colspan="2">Ship Identity</th>
//               </tr>
//               <tr>
//                 <th>Name</th>
//                 <th>${fullName}</th>
//               </tr>
//               <tr>
//                 <th>Faction</th>
//                 <th>Northern Parliament</th>
//               </tr>
//               <tr>
//                 <th>Rarity</th>
//                 <th>DR ★★★★★★</th>
//               </tr>
//               <tr>
//                 <th>Classification</th>
//                 <th>Aviation Battleship</th>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div class="modal--container--table--right container--flex--column">
//         <div class="table--ship--stat">
//           <table border="1">
//             <tbody>
//               <tr>
//                 <th class="stats">-</th>
//                 <th class="hp">Health</th>
//                 <th class="fp">Firepower</th>
//                 <th class="trp">Torpedo</th>
//                 <th class="avi">Aviation</th>
//                 <th class="aa">Anti Air</th>
//                 <th class="eva">Evasion</th>
//                 <th class="at">Armor Type</th>
//               </tr>
//               <tr>
//                 <th class="stats">Base</th>
//                 <th class="hp">10000</th>
//                 <th class="fp">100</th>
//                 <th class="trp">100</th>
//                 <th class="avi">100</th>
//                 <th class="aa">100</th>
//                 <th class="eva">100</th>
//                 <th class="at" rowspan="4">Medium</th>
//               </tr>
//               <tr>
//                 <th class="stats">Level 100</th>
//                 <th class="hp">10000</th>
//                 <th class="fp">100</th>
//                 <th class="trp">100</th>
//                 <th class="avi">100</th>
//                 <th class="aa">100</th>
//                 <th class="eva">100</th>
//               </tr>
//               <tr>
//                 <th class="stats">Level 120</th>
//                 <th class="hp">10000</th>
//                 <th class="fp">100</th>
//                 <th class="trp">100</th>
//                 <th class="avi">100</th>
//                 <th class="aa">100</th>
//                 <th class="eva">100</th>
//               </tr>
//               <tr>
//                 <th class="stats">Level 125</th>
//                 <th class="hp">10000</th>
//                 <th class="fp">100</th>
//                 <th class="trp">100</th>
//                 <th class="avi">100</th>
//                 <th class="aa">100</th>
//                 <th class="eva">100</th>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div class="table--ship--equippable">
//           <table border="1">
//             <tbody>
//               <tr>
//                 <th class="gear" colspan="4">Equippable</th>
//               </tr>
//               <tr>
//                 <th class="slot">Slots</th>
//                 <th class="eff">Efficiency</th>
//                 <th class="equip">Equippable</th>
//                 <th class="max">Max #</th>
//               </tr>
//               <tr>
//                 <th class="slot">1</th>
//                 <th class="eff">100% -> 100%</th>
//                 <th class="equip">BB Main Gun</th>
//                 <th class="max">1 -> 1</th>
//               </tr>
//               <tr>
//                 <th class="slot">2</th>
//                 <th class="eff">100% -> 100%</th>
//                 <th class="equip">BB Main Gun</th>
//                 <th class="max">1 -> 1</th>
//               </tr>
//               <tr>
//                 <th class="slot">3</th>
//                 <th class="eff">100% -> 100%</th>
//                 <th class="equip">BB Main Gun</th>
//                 <th class="max">1 -> 1</th>
//               </tr>
//               <tr>
//                 <th class="slot">Augment</th>
//                 <th class="eff">N/A</th>
//                 <th class="equip">Hammer, Dual Sword</th>
//                 <th class="max">1 -> 1</th>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   `;

//   modalBoxContent.innerHTML = htmlContent;
//   modalBox.innerHTML = '';
//   modalBox.appendChild(modalBoxContent);
//   modalBox.style.display = "flex";
//   navBar.style.display = 'none';
// }

// function closeModalBox() {
//   modalBox.style.display = "none";
//   navBar.style.display = '';
// }

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".root .shiplist .shiplist--container .shiplist--container--ship .shiplist--container--ship--card .shiplist--container--ship--card--img img").forEach((img) => {
//     img.addEventListener("click", () => {
//       const type = img.getAttribute("data-type");
//       const index = img.getAttribute("data-index");
//       openModalBox(type, index);  // Mengirim tipe dan indeks gambar
//     });
//   });
// });