
const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".bg-amber-500")

let titleCount = 1;
let totalPrice = 0;


for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    const card = cards[index];
    // console.log(element) 
    button.addEventListener("click", function(){
        console.log("clicked")

        // get the title 
        const title = card.querySelector("h2").innerText
    
        
        const price = parseFloat(card.querySelector("p").innerText.split(" ")[1]);
        
        
        const titleContainer = document.getElementById("title-container");
        
        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;
        p.style.color = "red";

        titleContainer.appendChild(p);
        titleCount++;

        // calculate price 
        totalPrice += price;
        console.log(totalPrice);

        const priceTotal = document.getElementById("totalPrice");

        priceTotal.innerText = totalPrice.toFixed(2);

        
        const restTotal = document.querySelector("#total");
        
    
        restTotal.innerText = totalPrice.toFixed(2);
        
        if(totalPrice){
            document.getElementById("makePurchase").removeAttribute("disabled");
        }
        
        

    })

    
}

const btn = document.getElementById("apply-button");
btn.addEventListener("click", function(){
    console.log(btn);

    // get the input value 
 const inputField = document.getElementById("input-field").value ;
 inputProcessedValue = inputField.split(" ").join("").toUpperCase();
console.log(inputProcessedValue);



if(totalPrice >= 200){
    if(inputProcessedValue == "SELL200"){

        // discount calculation 
const discountElement = document.getElementById("discountPrice");
        const discountAmount = totalPrice * 0.2;
        discountElement.innerText = discountAmount.toFixed(2);

        // rest total calculation 
        const restTotal = document.querySelector("#total");
        
        const total = totalPrice - discountAmount;
        restTotal.innerText = total.toFixed(2);
        document.getElementById("input-field").value = "";
        
    }
    else{
        alert("Invalid Coupon");
        document.getElementById("input-field").value = "";
    }
}
else if(totalPrice <= 200)
{
    alert("please spend at least $200");
    document.getElementById("input-field").value = "";
}
else{
    alert("Add something to cart at first")
}


}) 

