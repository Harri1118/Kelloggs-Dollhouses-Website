var ID;
var select = 0;
var length = 0;
 fetch('./json/houses.json')
    .then(function(response)
        {
            return response.json();
        }
    )
    .then(function(houses){
      
        let placeholder = document.querySelector("#gallery");
        let out = "";
        for(let house of houses){
            out += `
            
            <img id="icon${house.id}" 
            onclick=on(${house.id}) 
            src=${house.icon}  class="image">
            
            `;
            length++;
        }
        placeholder.innerHTML = out;

        
      
 
    })

function on(id) {
    document.getElementById("overlay").style.display = "block";
    ID = id;
    select = 0;
  fetch('./json/houses.json')
  .then(response => response.json())
  .then(data => {
    const result = data[id];
   
    if (result) {
        document.getElementById("displayImage").src = result.icon;
        document.getElementById("cap").innerHTML = result.caption;
    } else {
      console.log("No data found for the provided id.");
    }
  }
  
  )
  .catch(error => {
    console.error("Error loading JSON file:", error);
  });
  


  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function galClickRIGHT(){
  
    on(ID+1);
    if(ID >= length)
      on(0);
  }

  function galClickLEFT(){
    
  on(ID-1);
  if(ID < 0)
    on(length-1);
  }

  function checkActivate(){
    fetch('./json/houses.json')
  .then(response => response.json())
  .then(data => {
    // Access the data using the id key
    const result = data[ID];
    
    if (result) {
        document.getElementById("displayImage").src = result.icon;
        document.getElementById("cap").innerHTML = result.caption;
    } else {
      console.log("No data found for the provided id.");
    }
  })
  .catch(error => {
    console.error("Error loading JSON file:", error);
  });
  }