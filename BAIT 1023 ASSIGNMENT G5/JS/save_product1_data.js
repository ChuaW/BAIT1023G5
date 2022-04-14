
if(localStorage.p1q==0){
    localStorage.p1q = 1
}
localStorage.p1q=1
document.getElementById("quantity_number").innerHTML = localStorage.p1q
function P1() {
  if (localStorage.p1q) {
    localStorage.p1q = Number(localStorage.p1q)+1;
  } 
  else {
    localStorage.p1q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p1q;
}
function M1() {
  if (localStorage.p1q) {
    localStorage.p1q = Number(localStorage.p1q)-1;
  } 
  else {
    localStorage.p1q = 1;
  }
  if(localStorage.p1q==0){
    alert("Cannot Less Than 1")
    localStorage.p1q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p1q;
}

localStorage.p1size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p1size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p1size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p1size="XL"
}

function clicksubmit(){
    if(localStorage.p1size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q1", localStorage.p1q);
     localStorage.setItem("s1", localStorage.p1size);
    }
}