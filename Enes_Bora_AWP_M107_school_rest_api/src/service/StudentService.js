class StudentService {
    constructor() {
        /**
         * This array holds students' informations.
         */
        this.dbStudent = [];
    }

    /**
     * This method gets all the students from database.
     */
    getAllStudents() {
        return this.dbStudent;
    }

    /**
     * This method gets the student with "find" method.
     * We call with @param {Number} pId  
     */
    getStudentById(pId) {
        return this.dbStudent.find(studet => studet.id == pId);
    }

    /**
     * This method pushes the student object to the student array
     * that we send with @param {Student} pStudent 
     */
    createStudent(pStudent) {
        this.dbStudent.push(pStudent);
    }

    /**
     * This method finds the student that has @param {Number} pId 
     * and updates the iformation of the student with @param {Student} pStudent. 
     */
    updateStudentById(pId, pStudent) {
        let student = this.dbStudent.find(item => item.id == pId);
        if (student != null) {
            student.id = pStudent.id;
            student.name = pStudent.name;
        }
    }

    /**
     * This method deletes the student from database
     * which has @param {Number} pId.  
     */
    deleteStudentById(pId) {
        this.dbStudent = this.dbStudent.filter(item => item.id != pId);
    }
}

module.exports = new StudentService();