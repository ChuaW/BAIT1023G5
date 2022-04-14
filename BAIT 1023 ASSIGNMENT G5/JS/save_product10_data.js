
if(localStorage.p10q==0){
    localStorage.p10q = 1
}
localStorage.p10q=1
document.getElementById("quantity_number").innerHTML = localStorage.p10q
function P1() {
  if (localStorage.p10q) {
    localStorage.p10q = Number(localStorage.p10q)+1;
  } 
  else {
    localStorage.p10q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p10q;
}
function M1() {
  if (localStorage.p10q) {
    localStorage.p10q = Number(localStorage.p10q)-1;
  } 
  else {
    localStorage.p10q = 1;
  }
  if(localStorage.p10q==0){
    alert("Cannot Less Than 1")
    localStorage.p10q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p10q;
}

localStorage.p10size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p10size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p10size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p10size="XL"
}

function clicksubmit(){
    if(localStorage.p10size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q10", localStorage.p10q);
     localStorage.setItem("s10", localStorage.p10size);
    }
}