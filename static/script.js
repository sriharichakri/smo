function load()
{


}
function myFunction() {
  if(document.getElementById("title").textContent=="test2")
  {
    document.getElementById("popupbox").style.width="25%"
    document.getElementById("ttbox").style.width="75%"
    document.getElementById("title").textContent="Title:"
     console.log("test")    
  }
  else
  {
  document.getElementById("popupbox").style.width="00%"
  document.getElementById("ttbox").style.width="97%"
  document.getElementById("title").textContent="test2"
  document.getElementById("title").style.visibility=="hidden"

}

}