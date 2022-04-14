
if(localStorage.p8q==0){
    localStorage.p8q = 1
}
localStorage.p8q=1
document.getElementById("quantity_number").innerHTML = localStorage.p8q
function P1() {
  if (localStorage.p8q) {
    localStorage.p8q = Number(localStorage.p8q)+1;
  } 
  else {
    localStorage.p8q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p8q;
}
function M1() {
  if (localStorage.p8q) {
    localStorage.p8q = Number(localStorage.p8q)-1;
  } 
  else {
    localStorage.p8q = 1;
  }
  if(localStorage.p8q==0){
    alert("Cannot Less Than 1")
    localStorage.p8q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p8q;
}

localStorage.p8size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p8size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p8size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p8size="XL"
}

function clicksubmit(){
    if(localStorage.p8size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q8", localStorage.p8q);
     localStorage.setItem("s8", localStorage.p8size);
    }
}