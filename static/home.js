


document.onload = function() {
  let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
  // do something when the page loads

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

};


// searchBtn.addEventListener("click", () => {
//   // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });
// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

function myTest(data){
  console.log(data);
  let pmap = new Map();

const regexp = /(\d\d\d\d-\d\d-\d\d) \| \$(\d+\.\d+)/g;

summary = data.split("|");
 
console.log(summary[summary.length - 1]);


var array = [...data.matchAll(regexp)];

if(array.length == 0){
  const regexp2 = /(\d\d\d\d-\d\d-\d\d) \| \$(\d+)/g;
  array = [...data.matchAll(regexp2)];
}

for(let i=0; i<array.length; i++){
	pmap.set(array[i][1], array[i][2]);
}

console.log(pmap);

pricedatamap = new Map([...pmap.entries()].sort());


console.log(pricedatamap);
const xValues = [];
const yValues = [];
let i = 0;
for (const [key, value] of pricedatamap) {
  xValues.push(key);
  i++;
  yValues.push(value);
  // do something with key and value
}
console.log(xValues);
console.log(yValues);
if(xValues != [] && yValues != []){
  document.getElementById("placeholdercat").style = "display: none;";
  document.getElementById("placeholdertext").style = "display: none;";
  document.getElementById("pricethingy").style = "display: block;";
  
  
  document.getElementById("besttime").innerHTML = summary[summary.length - 1];
  console.log("hee");
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: yValues,
        borderColor: "black",
        fill: false
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Dollars'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }]
    },
    options: {
      legend: {display: false}
    }
    
  });
}



}


