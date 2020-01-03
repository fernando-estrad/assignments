var shopper = {
    name: "Fernando",
    age: 23,
    isAlive: true,
    aboutMe: function() {
        if (this.isAlive === true){
        return this.name + " is " + this.age + " and he is alive."
        }
        else{
        return this.name + " is " + this.age + " and he is not alive."
        }
    },
    groceryCart: ['milk', 'bread', 'eggs', 'meat','juice']
}
console.log(shopper.aboutMe())
console.log(shopper.groceryCart)