
if(localStorage.p6q==0){
    localStorage.p6q = 1
}
localStorage.p6q=1
document.getElementById("quantity_number").innerHTML = localStorage.p6q
function P1() {
  if (localStorage.p6q) {
    localStorage.p6q = Number(localStorage.p6q)+1;
  } 
  else {
    localStorage.p6q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p6q;
}
function M1() {
  if (localStorage.p6q) {
    localStorage.p6q = Number(localStorage.p6q)-1;
  } 
  else {
    localStorage.p6q = 1;
  }
  if(localStorage.p6q==0){
    alert("Cannot Less Than 1")
    localStorage.p6q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p6q;
}

localStorage.p6size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p6size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p6size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p6size="XL"
}

function clicksubmit(){
    if(localStorage.p6size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q6", localStorage.p6q);
     localStorage.setItem("s6", localStorage.p6size);
    }
}