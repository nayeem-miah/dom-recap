
// click donate-button
document.getElementById("donate-button").addEventListener("click", function (event) {
    event.preventDefault();
    
    const donateAmount = document.getElementById("donate-banalce").value;
    const pinNumber = document.getElementById("pin-number").value;
    if (pinNumber === "Pa$$w0rd!") {
        
        // get total amount 
        const totalAmount = document.getElementById("total-amount").innerText;
        const newBalance = parseFloat(totalAmount) + parseFloat(donateAmount);
        // set total amount
        const totalValue = document.getElementById("total-amount");
        totalValue.innerText = newBalance;
        alert("donate success ❤️");
        document.getElementById("donate-banalce").value = "";
        document.getElementById("pin-number").value = "";

    } else {
        alert("please give me a valid pass !")
    }

})