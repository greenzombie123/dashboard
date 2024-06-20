function Pokemon(name:string, level:number){
    this.name = name;
    this.level = level
}

const pikachu = new Pokemon("Pikachu", 12)

console.log(pikachu.level)

function Book(title:string, author:string, pages:number, read:boolean){
    this.title= title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = ()=>console.log(`${this.title} written by ${this.author}. It is ${this.pages} pages long. It has ${this.read ? 'been read' : 'not been red yet'}`)
}

let bookTitle = "Harry Potter and the Philosopher's Stone"

const harryPotter = new Book(bookTitle, "B.B. Smith", 800, true)

harryPotter.info()