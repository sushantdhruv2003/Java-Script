const course = {
    courseName: "JS tutorial",
    price: 999,
    courseInstructor: "Hitesh Sir"
}
// destructuring Objects:
const {courseInstructor: cInst} = course // courseInstructor ko chota name ek de diye
console.log(cInst)
