const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/CollegeDB")
  .then(() => console.log("🚀 mongoose connected"));

const studentschema = new mongoose.Schema({
  name: String,
  grade: String,
});

const Student = mongoose.model("student", studentschema);

async function performCRUD() {
  try {
    // CREATE

    // const newStudent = await Student.create({
    //   name: "Alex",
    //   grade: "A",
    // });
    // console.log("✅ Student Created:", newStudent);

    // const students = [
    //   { name: "Alex", grade: "A" },
    //   { name: "Alex 1", grade: "A" },
    //   { name: "Alex 2", grade: "A" },
    //   { name: "Alex 3", grade: "A" },
    //   { name: "Alex 5", grade: "A" },
    // ];
    // const newStudents = await Student.insertMany(students);

    // console.log(`${newStudents.length} documents were inserted.`);

    // for (let student of newStudents) {
    //   console.log(`Inserted a document with name ${student.name}`);
    // }

    // READ
    // const readStudent = await Student.find({});
    // console.log("📖 Student Founds:", readStudent);

    // UPDATE
    // const result = await Student.updateOne(
    //   { name: "Gopi" },
    //   {
    //     $set: {
    //       name: "Gopi 2",
    //       grade: "A++",
    //     },
    //   }
    // );

    // console.log("✏️  Update Result:", result);
    // const readStuden = await Student.find({});
    // console.log("📖 Student Founds:", readStuden);

    //delete
    // let studentName = "Alex"
    // const deletestudent = await Student.deleteOne({name:studentName});
    // console.log("✅ Student Deleted:",deletestudent);

    // const finduser = await Student.findOne({name:studentName})
    // if(finduser === null){
    //     console.log("Finding Deleted Student: ❌ Student Not Found")
    // }else {
    //     console.log("Finding Deleted Student: ✅ Student Found:", findUser);
    // }

    //counting documents without scanning whole collection
    // const query = { name: "Alex" };
    // const alex = await Student.countDocuments(query);
    // console.log(`Total ${alex} in ${query}`)

    const dist = Student.distinct("grade")

    for await(const doc of dist){
      console.dir(doc)
    }

  } catch (err) {
    console.error(err);
  }
}

performCRUD();

module.exports = studentschema;
