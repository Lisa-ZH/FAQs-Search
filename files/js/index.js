let coll = document.getElementsByClassName("title");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  let searchQuery = event.target.value.toLowerCase();

  let allNamesDOMCollection = document.getElementsByClassName('title');
  
  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
      const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
      //console.log(currentName);
      if (currentName.includes(searchQuery)) {
        allNamesDOMCollection[counter].style.display = "block";
      } else {
        allNamesDOMCollection[counter].style.display = "none";
      }
  }
});