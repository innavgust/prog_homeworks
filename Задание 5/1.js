class Faculty {
    constructor() {
      this.students = [];
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  }
  
  class Student {
    constructor(name, groupNumber, marks) {
      this.name = name;
      this.groupNumber = groupNumber;
    }
  
    addMarks (...rest) {
      if ( this.marks === undefined) {
        this.marks = [...rest]; 
      } else {
      this.marks.push(...rest); 
      }
    }
  
    getAverage (marks) {
      let sum = 0;
      for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
      }
      let average = (sum/this.marks.length).toFixed(2);
      this.averageScore = Number(average);
    }
  }
  
  const faculty = new Faculty();
  
  const student1 = new Student("Дикий И.А.", "1");
  student1.addMarks(4, 5, 3, 5, 5);
  student1.getAverage();
  faculty.addStudent (student1);
  
  const student2 = new Student("Мирная И.А.", "1");
  student2.addMarks(4, 5, 3, 5, 5);
  student2.getAverage();
  faculty.addStudent (student2);
  
  const student3 = new Student("Вишневская А.Д.", "2");
  student3.addMarks(3, 5, 3, 5, 5);
  student3.getAverage();
  faculty.addStudent (student3);
  
  const student4 = new Student("Майский Э.А.", "1");
  student4.addMarks(2, 5, 3, 5, 5);
  student4.getAverage();
  faculty.addStudent (student4);
  
  const student5 = new Student("Земская А.А.", "2");
  student5.addMarks(3, 3, 3, 4, 5);
  student5.getAverage();
  faculty.addStudent (student5);
  
  const student6 = new Student("Лермонтов Е.С.", "1");
  student6.addMarks(3, 2, 3, 3, 4);
  student6.getAverage();
  faculty.addStudent (student6);
  
  const student7 = new Student("Гордый М.М.", "3");
  student7.addMarks(4, 4, 4, 4, 5);
  student7.getAverage();
  faculty.addStudent (student7);
  
  const student8 = new Student("Волкова Е.А.", "2");
  student8.addMarks(3, 3, 3, 3, 3);
  student8.getAverage();
  faculty.addStudent (student8);
  
  const student9 = new Student("Анненская Т.С.", "3");
  student9.addMarks(2, 4, 3, 3, 4);
  student9.getAverage();
  faculty.addStudent (student9);
  
  const student10 = new Student("Романовский Р.П.", "3");
  student10.addMarks(5, 5, 5, 4, 5);
  student10.getAverage();
  faculty.addStudent (student10);
  
  
  
  let sortStudents = [];
  
  sortStudents = faculty.students.sort(function(a, b) {
    return (b.averageScore < a.averageScore) - (a.averageScore < b.averageScore);
  });
  
  console.log(sortStudents);
  
  let goodStudents = [];
  
  for (let i = 0; i < 10; i++) {
    let count = 0;
    
    for (let j = 0; j < 5; j++) {
      if (faculty.students[i].marks[j] >= 4) {
        count += 1;
      }
    }
  
    if (count === 5) {
      goodStudents.push(faculty.students[i])
    }
  }
  
  console.log();
  
  console.log(goodStudents);