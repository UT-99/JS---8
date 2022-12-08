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




