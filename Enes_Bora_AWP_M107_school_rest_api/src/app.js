const express = require('express');
const cors = require('cors');

const studentService = require('./service/StudentService');
const teacherService = require('./service/TeacherService');

const Student = require('./model/Student');
const Teacher = require('./model/Teacher');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// REST Endpoints for Student
app.get('/students', function(req, res) {
    let allStudents = studentService.getAllStudents();
    res.send(allStudents);
});

app.get('/student/:id', function(req, res) {
    let student = studentService.getStudentById(req.params.id);
    res.send(student);
});

app.post('/student', function(req, res) {
    let studentObject = req.body;
    let student = new Student(studentObject.id, studentObject.name);
    studentService.createStudent(student);
    res.send('Student created');
});

app.put('/student/:id', function(req, res) {
    let studentObject = req.body;
    let id = req.params.id
    studentService.updateStudentById(id, studentObject);
    res.send('Student updated');
});

app.delete('/student/:id', function(req, res) {
    studentService.deleteStudentById(req.params.id);
    res.send('Student deleted');
});

//REST Endpoints for Teacher
app.get('/teachers', function(req, res) {
    let allTeachers = teacherService.getAllTeachers();
    res.send(allTeachers);
});

app.get('/teachers/:id', function(req, res) {
    let teacher = teacherService.getTeacherById(req.params.id);
    res.send(teacher);
});

app.post('/teacher', function(req, res) {
    let teacherObject = req.body;
    let teacher = new Teacher(teacherObject.id, teacherObject.name);
    teacherService.createteacher(teacher);
    res.send('Teacher created');
});

app.put('/teacher/:id', function(req, res) {
    let teacherObject = req.body;
    let id = req.params.id;
    teacherService.updateTeacherById(id, teacherObject);
    res.send('Teacher updated');
});

app.delete('/teacher/:id', function(req, res) {
    teacherService.deleteTeacherById(req.params.id);
    res.send('Teacher deleted')
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))