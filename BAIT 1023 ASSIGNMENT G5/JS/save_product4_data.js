
if(localStorage.p4q==0){
    localStorage.p4q = 1
}
localStorage.p4q=1
document.getElementById("quantity_number").innerHTML = localStorage.p4q
function P1() {
  if (localStorage.p4q) {
    localStorage.p4q = Number(localStorage.p4q)+1;
  } 
  else {
    localStorage.p4q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p4q;
}
function M1() {
  if (localStorage.p4q) {
    localStorage.p4q = Number(localStorage.p4q)-1;
  } 
  else {
    localStorage.p4q = 1;
  }
  if(localStorage.p4q==0){
    alert("Cannot Less Than 1")
    localStorage.p4q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p4q;
}

localStorage.p4size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p4size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p4size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p4size="XL"
}

function clicksubmit(){
    if(localStorage.p4size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q4", localStorage.p4q);
     localStorage.setItem("s4", localStorage.p4size);
    }
}