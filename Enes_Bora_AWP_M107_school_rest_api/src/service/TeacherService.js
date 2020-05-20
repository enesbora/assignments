class TeacherService {
    constructor() {
        /**
         * This array holds teachers' informations.
         */
        this.dbTeacher = [];
    }

    /**
     * This method gets all the teachers from database.
     */
    getAllTeachers() {
        return this.dbTeacher;
    }

    /**
     * This method gets the teacher with "find" method.
     * We call with @param {Number}  pId
     */
    getTeacherById(pId) {
        return this.dbTeacher.find(teacher => teacher.id == pId);
    }

    /**
     * This method pushes the teacher object to the teacher array
     * that we send with @param {Teacher} pTeacher.
     */
    createteacher(pTeacher) {
        this.dbTeacher.push(pTeacher);
    }

    /**
     * This method finds this teacher that has @param {Number} pId
     * and updates the iformation of the teacher with @param {Teacher} pTeacher. 
     */
    updateTeacherById(pId, pTeacher) {
        let teacher = this.dbTeacher.find(item => item.id == pId);
        if (teacher != null) {
            teacher.id = pTeacher.id;
            teacher.name = pTeacher.name;
        }
    }

    /**
     * This method deletes the teacher from database
     * which has @param {Number} pId.  
     */
    deleteTeacherById(pId) {
        this.dbTeacher = this.dbTeacher.filter(item => item.id != pId);
    }
}

module.exports = new TeacherService();