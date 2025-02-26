const button = document.querySelector('#btn')
const income = document.querySelector('#income')


button.addEventListener("click", () => {
    let inputvalue = document.getElementById("income").value;
    let taxRate = 10 / 100;
    let tax = (inputvalue * taxRate).toFixed(2);
    document.getElementById("result").innerText = "Tax to be paid: $" + tax;
    console.log(tax);
})


