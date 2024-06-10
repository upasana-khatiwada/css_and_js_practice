// const company = {
//     Name: "Big company",
//     NoEmp: 50,
//     PanNo: 123,
//     Department: {
//         Dname: "Finance",
//         Did: 123
//     },
//     deal() {
//         console.log("deal done")
//     }
// }

// company.deal()
// console.log(company.PanNo)


function newCompany (Name,PanNo,Noemp){
    return {
        Name: Name,
        PanNo: PanNo,
        Noemp: Noemp,
    }


}const companyOne = newCompany('Big Company',123,50);
const companyTwo = newCompany("small",456,47);

console.log(companyOne);
console.log(companyTwo);

function Student (sid,marks,sub){
    return {
        sid: sid,
        marks: marks,
        sub: sub,
    }


}const s1 = Student(5425,64,"tech");

console.log(s1);