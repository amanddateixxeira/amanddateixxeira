document.querySelector(".hamburguer").addEventListener("click", () =>
  document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#numbers").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice)
document.querySelector("#layout-yes").addEventListener("change", updatePrice)
document.querySelector("#layout-no").addEventListener("change", updatePrice)
document.querySelector("#deadline").addEventListener("change", function () {
  const deadline = document.querySelector("#deadline").value
  document.querySelector("label[for=deadline]").innerHTML = `Deadline: ${deadline} weeks`
  updatePrice()
})

function updatePrice(){
  const numbers = document.querySelector("#numbers").value
  const withJS = document.querySelector("#js").checked
  const layoutInclude = document.querySelector("#layout-yes").checked
  const deadline = document.querySelector("#deadline").value

  let price = numbers * 100;
  if (withJS) price  *= 1.1
  if (layoutInclude) price += 50
  let urgentFee = 1 - deadline*0.1;
  price += 1 + urgentFee
  
  document.querySelector("#price").innerHTML = `€ ${price.toFixed(2)}`
}