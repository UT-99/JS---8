let studentRecords = [ {name: 'John', id: 123, marks : 98 },
            {name: 'Baba', id: 101, marks : 23 },
            {name: 'yaga', id: 200, marks : 45 },
            {name: 'Wick', id: 115, marks : 75 } 
        ] 


// Question 1  Solution 

let ques1Arrlength = studentRecords.length;
let newArray =[];
str = '';
for ( let i = 0 ; i < ques1Arrlength ; i++){
     str=studentRecords[i].name;
     str = str.toString().toUpperCase();     
     newArray.push(str);
    
}
console.log(newArray)


// Question 2  Solution 

const result = studentRecords.filter(word => word.marks > 50);
console.log(result);


// Question 3  Solution 

const result2 = studentRecords.filter(word => word.marks > 50  && word.id > 120);
console.log(result2);

// Question 4  Solution 

let ques1Arrlength2 = studentRecords.length;
sum = 0;
for ( let i = 0 ; i < ques1Arrlength2 ; i++){
     sum = sum + parseInt(studentRecords[i].marks)    

}
console.log(`Sum is ${sum}`)


// Question 5  Solution 

let ques1Arrlength3 = studentRecords.length;
sum = 0;
newArray3=[];
for ( let i = 0 ; i < ques1Arrlength3 ; i++){
    if(studentRecords[i].marks > 50){
        newArray3.push(studentRecords[i].name)
    }

}
console.log(`Names of Students are :  ${newArray3}`)




// Question 6  Solution 

let ques1Arrlength4 = studentRecords.length;
sum2 = 0;
for ( let i = 0 ; i < ques1Arrlength3 ; i++){
    if(studentRecords[i].id > 120){
        sum2= sum2 + studentRecords[i].marks;
        
    }

}
console.log(`Sum Of Stidents ID > 120 are  :  ${sum2}`)




// Question 7  Solution 


let totalMarks = 0 ;
let ques1Arrlength5 = studentRecords.length;
  
for (let i  = 0 ; i < ques1Arrlength5 ; i++){
    if (studentRecords[i].marks > 50){
        totalMarks+= studentRecords[i].marks ;

    }
    else{
        studentRecords[i].marks = studentRecords[i].marks+15;
    }

}
console.log(`Total marks of Students with marks greater than 50 are : ${totalMarks}`);
console.log(`New Array will  be : `, studentRecords);


// Question 8  Solution

function Student( name , classes , rollNo  ){
        this.name = name;
        this.classes = classes;
        this.rollNo = rollNo;

}

// Creating Objects of student :

let student1 = new Student("Utkarsh", 'B.Tech' , 121)
let student2 = new Student("Harsh", 'M.Tech' , 1341)
let student3 = new Student("Yash", 'B.A' , 1109)
let student4 = new Student("Akarsh", 'M.Pharma' , 9876)
let student5 = new Student("Utkarsha", 'PHD' , 1901)
let student6 = new Student('Sparsh', 'LLB' , 2435)

let arrayOfStudent = [];
arrayOfStudent.push(student1)
arrayOfStudent.push(student2)
arrayOfStudent.push(student3)
arrayOfStudent.push(student4)
arrayOfStudent.push(student5)
arrayOfStudent.push(student6)

console.log("Student details are : ", arrayOfStudent);




