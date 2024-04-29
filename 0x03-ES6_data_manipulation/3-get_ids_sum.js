export default function getStudentIdsSum(students) {
    // Check if the input is an array
    if (!Array.isArray(students)) {
        return 0;
    }

    // Use the reduce function to calculate the sum of student ids
    return students.reduce((total, student) => total + student.id, 0);
};
