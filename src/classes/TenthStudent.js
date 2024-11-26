class TenthStudent {

    static passMarks = 35;

    constructor () {
        console.clear();
        console.log("Inside the Tenth Student Class Constructor...");
        this.teluguMarks = 0;
        this.hindiMarks = 0;
        this.englishMarks = 0;
        this.mathsMarks = 0;
        this.scienceMarks = 0;
        this.socialMarks = 0;
    }
    calculateResult = () => {
        if(this.teluguMarks >= TenthStudent.passMarks &&
           this.teluguMarks >= TenthStudent.passMarks &&
           this.teluguMarks >= TenthStudent.passMarks &&
           this.teluguMarks >= TenthStudent.passMarks &&
           this.teluguMarks >= TenthStudent.passMarks &&
           this.teluguMarks >= TenthStudent.passMarks)
           {
            console.log("Student Passed in Tenth.");
           }
           else
           {
            console.log("Student Failed in Tenth.");
           }
    }

}

export default TenthStudent;