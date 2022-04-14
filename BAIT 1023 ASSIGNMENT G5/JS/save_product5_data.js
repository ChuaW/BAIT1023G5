
if(localStorage.p5q==0){
    localStorage.p5q = 1
}
localStorage.p5q=1
document.getElementById("quantity_number").innerHTML = localStorage.p5q
function P1() {
  if (localStorage.p5q) {
    localStorage.p5q = Number(localStorage.p5q)+1;
  } 
  else {
    localStorage.p5q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p5q;
}
function M1() {
  if (localStorage.p5q) {
    localStorage.p5q = Number(localStorage.p5q)-1;
  } 
  else {
    localStorage.p5q = 1;
  }
  if(localStorage.p5q==0){
    alert("Cannot Less Than 1")
    localStorage.p5q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p5q;
}

localStorage.p5size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p5size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p5size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p5size="XL"
}

function clicksubmit(){
    if(localStorage.p5size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q5", localStorage.p5q);
     localStorage.setItem("s5", localStorage.p5size);
    }
}