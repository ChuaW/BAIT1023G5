
if(localStorage.p2q==0){
    localStorage.p2q = 1
}
localStorage.p2q=1
document.getElementById("quantity_number").innerHTML = localStorage.p2q
function P1() {
  if (localStorage.p2q) {
    localStorage.p2q = Number(localStorage.p2q)+1;
  } 
  else {
    localStorage.p2q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p2q;
}
function M1() {
  if (localStorage.p2q) {
    localStorage.p2q = Number(localStorage.p2q)-1;
  } 
  else {
    localStorage.p2q = 1;
  }
  if(localStorage.p2q==0){
    alert("Cannot Less Than 1")
    localStorage.p2q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p2q;
}

localStorage.p2size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p2size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p2size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p2size="XL"
}

function clicksubmit(){
    if(localStorage.p2size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q2", localStorage.p2q);
     localStorage.setItem("s2", localStorage.p2size);
    }
}