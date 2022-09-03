import Lesson from "../Lesson/Lesson";
export class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    }

    doneLesson(lessonTitle, lessonTopic){
        if(this.passedLessons.find(lesson=>lesson.lessonTitle===lessonTitle)) return;
        this.passedLessons.push(new Lesson(lessonTitle,lessonTopic));
    }
}