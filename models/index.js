const teacher = require("./schemas/teacherSchema");
const user = require("./schemas/userSchema");
const student = require("./schemas/studentSchema");
const course = require("./schemas/courseSchema");

const sequalize = require("../common/dbConnection");

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

student.belongsToMany(course, {
  onDelete: "CASCADE",
  through: "student_course",
  foreignKey: { name: "studentID", allowNull: false, unique: false },
});

course.belongsToMany(student, {
  onDelete: "CASCADE",
  through: "student_course",
  foreignKey: { name: "courseID", allowNull: false, unique: false },
});

teacher.belongsToMany(course, {
  onDelete: "CASCADE",
  through: "teacher_course",
  foreignKey: { name: "teacherID", allowNull: false, unique: false },
});

course.belongsToMany(teacher, {
  onDelete: "CASCADE",
  through: "teacher_course",
  foreignKey: { name: "courseID", allowNull: false, unique: false },
});

const models = sequalize.models;
// console.log(models);
const db = {};
db.sequalize = sequalize;
module.exports = { db, models };
