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
    play: function() {
        this.happiness += 20;
        if (this.happiness > 100) this.happiness = 100;
        alert(`${this.name} played and is now happiness level ${this.happiness}.`);
    },
    agePet: function() {
        this.age += 1;
        this.happiness -= 5;
        if (this.happiness < 0) this.happiness = 0;
        this.hunger += 10;
        if (this.hunger > 100) this.hunger = 100;
        alert(`${this.name} aged a year! Age: ${this.age}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
    }
};


