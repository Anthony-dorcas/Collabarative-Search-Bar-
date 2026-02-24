// function searchCourse() {
//     let input = document.getElementById("searchInput").value.toLowerCase();
//     let courses = document.querySelectorAll("#courseList li");
  
//     courses.forEach(course => {
//       let text = course.textContent.toLowerCase();
//       course.style.display = text.includes(input) ? "" : "none";
//     });
//   }
function showCourse() {
  const course = document.getElementById("courseSelect").value;
  const result = document.getElementById("result");

  if (course === "") {
    result.innerHTML = "<p style='color:red;'>Please select a course.</p>";
  } else {
    result.innerHTML = "<p>You selected <strong>" + course + "</strong></p>";
  }
}