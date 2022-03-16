class Test  {
    constructor(name) {
        this.name = name
    }
    sayName (){
        console.log(this.name)
    }
    sayBye = () =>{
        console.log("bye")
    }
}

console.dir(Test('a'))