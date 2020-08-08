function update(e){
  let Bill = Number(document.getElementById("billInput").value)
  let tipPercent = document.getElementById("tipBar").value
  let split = document.getElementById("splitBar").value
  let totalWithTip = Bill + (Bill*tipPercent/100)
  let totalEach = totalWithTip/split
  document.getElementById("total").innerHTML = "$" + totalWithTip.toFixed(2)
  document.getElementById("tipPercent").innerHTML =  tipPercent + "%"
  document.getElementById("tipValue").innerHTML = "$" + (Bill*tipPercent/100).toFixed(2)
  document.getElementById("split").innerHTML = split + " person(s)"
  document.getElementById("totalEach").innerHTML = "$" + totalEach.toFixed(2)
}

function displaySplit(){
  document.getElementById("splitSection").style.display = "block"
  document.getElementById("splitBtn").style.display = "none"
}


let container = document.getElementById("container")
container.addEventListener("input",update)



let splitBtn = document.getElementById("splitBtn")
splitBtn.addEventListener("click", displaySplit)