
if(localStorage.p9q==0){
    localStorage.p9q = 1
}
localStorage.p2q=1
document.getElementById("quantity_number").innerHTML = localStorage.p9q
function P1() {
  if (localStorage.p9q) {
    localStorage.p9q = Number(localStorage.p9q)+1;
  } 
  else {
    localStorage.p9q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p9q;
}
function M1() {
  if (localStorage.p9q) {
    localStorage.p9q = Number(localStorage.p9q)-1;
  } 
  else {
    localStorage.p9q = 1;
  }
  if(localStorage.p9q==0){
    alert("Cannot Less Than 1")
    localStorage.p9q = 1
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p9q;
}

localStorage.p9size=" "
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p9size = "M"
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p9size="L"
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p9size="XL"
}

function clicksubmit(){
    if(localStorage.p9size==" "){
      alert("Please select a size")
    }
    else{
     alert("Add Successful")
     localStorage.setItem("q9", localStorage.p9q);
     localStorage.setItem("s9", localStorage.p9size);
    }
}