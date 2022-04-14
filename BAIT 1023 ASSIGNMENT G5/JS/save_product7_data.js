
if(localStorage.p7q==0){
    localStorage.p7q = 1
}
localStorage.p2q=1
document.getElementById("quantity_number").innerHTML = localStorage.p7q
function P1() {
  if (localStorage.p7q) {
    localStorage.p7q = Number(localStorage.p7q)+1;
  } 
  else {
    localStorage.p7q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p7q;
}
function M1() {
  if (localStorage.p7q) {
    localStorage.p7q = Number(localStorage.p7q)-1;
  } 
  else {
    localStorage.p7q = 1;
  }
  if(localStorage.p7q==0){
    alert("Cannot Less Than 1")
    localStorage.p7q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p7q;
}

localStorage.p7size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p7size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p7size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p7size="XL"
}

function clicksubmit(){
    if(localStorage.p7size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q7", localStorage.p7q);
     localStorage.setItem("s7", localStorage.p7size);
    }
}