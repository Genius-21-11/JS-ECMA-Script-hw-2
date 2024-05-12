class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo = () => console.log(`Книга: "${this.title}", автор: "${this.author}", количество страниц: ${this.pages}`);
}

const book = new Book("Программирование на Java для начинающих", "Васильев А.Н.", 702);
book.displayInfo();

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo = () => console.log(`Студент ${this.name} возраст ${this.age} лет, учится в ${this.grade} классе`);
}

const student1 = new Student("Ivan Ivanov", 16, 10);
student1.displayInfo();

const student2 = new Student("Anna Egorova", 17, 11);
student2.displayInfo();