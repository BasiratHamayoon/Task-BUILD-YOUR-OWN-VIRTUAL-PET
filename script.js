let pet = {
    name: "Shero",
    type: "dog",
    age: 3,
    happiness: 50,
    hunger: 40,
    feed: function() {
        this.hunger -= 20;
        if (this.hunger < 0) this.hunger = 0;
        alert(`${this.name} has been fed! Hunger is now at ${this.hunger}.`);
    },
   
}

