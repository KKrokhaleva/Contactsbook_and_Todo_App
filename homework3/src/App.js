import React from "react";
import {School} from "./components/school/School";
import {LearningGroup} from "./components/LearningGroup/LearningGroup";

// Examples
const Hillel = new School('Hillel');
Hillel.registerCourse('React', 30, 3);
Hillel.registerCourse('Angular', 20, 2);
Hillel.startLearningGroup('React', 'Kateryna', 15);
Hillel.startLearningGroup('Angular', 'Tanya', 10);
Hillel.getLearningGroupByCourseName('React');
const Courseria= new LearningGroup('React native', 'Kate', 15);
Courseria.doneLesson('lessonTitle', 'lessonTopic');
Courseria.doneLesson('lfffffff', 'llllll');
Courseria.doneLesson('lessonTitle', 'lessonTopic');
console.log(Hillel);
console.log(Courseria);

export default class App extends React.Component{
  componentDidMount (){

  }
  render() {
    return (
        <div className="wrapper container">
        </div>
    );
  }
}

