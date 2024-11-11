// ________________________________________OBJECT 3____________________________________________
const course = {
    courseName : "JS IN HINDI",
    price : 999,
    courseInstructor : "SHARIQ ALAM"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor);            // THIS IS HOW WE DESTRUCT  A OBJECT

