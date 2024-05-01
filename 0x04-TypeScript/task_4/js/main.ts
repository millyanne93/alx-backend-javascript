import { Subjects } from './js/subjects/Teacher';

// Constants for each subject
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Teacher object with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher); // Call the method to set the teacher
console.log(cpp.getRequirements()); // Print requirements
console.log(cpp.getAvailableTeacher()); // Print available teacher

// For Java subject
console.log('\nJava');
java.setTeacher(cTeacher); // Call the method to set the teacher
console.log(java.getRequirements()); // Print requirements
console.log(java.getAvailableTeacher()); // Print available teacher

// For React subject
console.log('\nReact');
react.setTeacher(cTeacher); // Call the method to set the teacher
console.log(react.getRequirements()); // Print requirements
console.log(react.getAvailableTeacher()); // Print available teacher
