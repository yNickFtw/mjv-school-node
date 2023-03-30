import { Student } from "../models/student.model";
import { students } from "../db/db";

class StudentsServices {

  getAll() {
    return students;
  }

  getByDocument(document: string) {
    const student = students.find((std) => std.document === document);
    return student;
  }

  create(student: Student) {
    students.push(student);
  }

  remove(document: string) {
    const studentIndex = students.findIndex(
      (student) => student.document === document
    );

    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!");
    }

    students.splice(studentIndex, 1);
  }

  update(document: string, student: Student) {
    const studentIndex = students.findIndex(
      (student) => student.document === document
    );

    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!")
    }

    students[studentIndex] = student
  }
}

export default new StudentsServices();
