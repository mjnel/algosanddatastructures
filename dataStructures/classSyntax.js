class Student {
    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.lateCount = 0;
        this.scores = []

    }

    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
// instance methods
    markLate(){
        this.lateCount += 1
        if(this.lateCount >= 3){
            return `You are expelled!!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.lateCount} times`

    }

    addScore(score){
        this.scores.push(score)
        return this.scores
    } 

    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum / this.scores.length
    }   

    // class methods
    static EnrollStudents(){
        return 'Enrolling Students!!'
    }


}

let firstStudent = new Student('Mark', 'Nelson',7)
debugger;