class Students {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    get name() {
        return this._name;
    }
    study() {
        console.log(this.name + " studying")
    }

    background() {
        console.log(
            "skills: python , c++, javascript, ML, Dl, .............."
        )
    }
}

const student1 = new Students("rohit", 22);

student1.study();
student1.background();
console.log(student1.name)

console.log("hello world")