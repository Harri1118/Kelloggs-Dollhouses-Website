var ID;
var length = 0;
fetch("./json/archives.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (archives) {
    let placeholder = document.querySelector("#gallery");
    let out = "";
    for(let archive of archives){
        out += `
        
        <img id="icon${archive.id}" 
        onclick=on(${archive.id}) 
        src=${archive.icon}  class="image">
        
        `;
        length++;
    }
    placeholder.innerHTML = out;
  });

  




  function on(id) {
    document.getElementById("overlay").style.display = "block";
    ID = id;
  fetch('./json/archives.json')
  .then(response => response.json())
  .then(data => {
    const result = data[id];
   
    if (result) {
        document.getElementById("displayImage").src = result.icon;
        
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
    fetch('./json/archives.json')
  .then(response => response.json())
  .then(data => {
    // Access the data using the id key
    const result = data[ID];
    
    if (result) {
        document.getElementById("displayImage").src = result.icon;
        
    } else {
      console.log("No data found for the provided id.");
    }
  })
  .catch(error => {
    console.error("Error loading JSON file:", error);
  });
  }

