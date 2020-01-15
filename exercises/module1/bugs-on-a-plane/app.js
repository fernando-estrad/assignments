var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

function formAlert(){
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var meh = document.getElementById("meh");
    var gender 
        if (male.checked){
            gender = male.value
        } else if (female.checked){
            gender = female.value
        } else if (meh.checked){
            gender = meh.value
        }
    var location = document.getElementById("travel-location").value;
    var diet = [];
    if (document.getElementById('vegan').checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.getElementById('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (document.getElementById('paleo').checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);