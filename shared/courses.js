// Course catalog. To add a course: drop its HTML file into /courses and add an entry here.
// `file` is relative to the site root. The start page opens it in a new tab with ?name=<trainee>.
const COURSES = [
  {
    id: "warehouse-picking-packing",
    title: "Warehouse Picking & Packing",
    desc: "The daily order cycle: shift prep, picking, scanning in Calipoke Station, packing, the 30/70 rule, shipping and end of shift.",
    file: "courses/warehouse-picking-packing.html",
    lessons: 7,
    minutes: 15,
    test: { questions: 10, pass: 8 }
  }
];
