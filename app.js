const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const cashGivenPart = document.querySelector("#cash-given-part");

const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");


const message = document.querySelector("#error-message");
const outputDiv = document.querySelector("#output");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


nextButton.addEventListener("click", function showNext() {
    hideMessage();
    if(Number(billAmount.value) > 0) {
        nextButton.style.display="none";
        cashGivenPart.style.display = "block";
        outputDiv.style.display ="block";

    } else {
        showMessage("Invalid Bill Amount");
    }
})

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    var billAmtValue = Number(billAmount.value);
    var cashGivValue = Number(cashGiven.value);
    if (billAmtValue > 0) {
        if (cashGivValue >= billAmtValue) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } 
        else {
            showMessage("You have recived less cash than the bill !");
            outputDiv.style.display ="none";
        }

    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}