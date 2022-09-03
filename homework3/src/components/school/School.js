import {Course} from "../Course/Course";
import {LearningGroup} from "../LearningGroup/LearningGroup";
 export class School {
    constructor(name) {
        this.name = name;
        this.availableCourses = [];
        this.startedGroups=[];
    }

    registerCourse (name,totalLessons, availableTeachersAmount) {
        if(this.availableCourses.find(course=>course.name===name)) return;
        this.availableCourses.push(new Course(name,totalLessons, availableTeachersAmount));
    }

    startLearningGroup(courseName, teacherName, amountOfStudents){
        this.availableCourses.forEach(course => {
            if (course.name === courseName && course.availableTeachersAmount > 0) {
                course.availableTeachersAmount--;
                this.startedGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
            }
        });
    }

    endLearningGroup(courseName, teacherName){
        this.availableCourses.forEach(course => {
            if (course.name === courseName && course.availableTeachersAmount > 0) {
                course.availableTeachersAmount++;
            }
        })
        this.startedGroups = this.startedGroups.filter(course => course.courseName !== courseName || course.teacherName !==  teacherName );
    }

    getLearningGroupByCourseName(courseName){
        this.startedGroups = this.startedGroups.filter(course => course.courseName === courseName );
    }
}