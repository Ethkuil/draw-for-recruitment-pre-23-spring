
let students = []

function drawPrize() {
  if (students.length === 0) {
    alert('请先导入学生名单')
    return
  }

  let student = students[Math.floor(Math.random() * students.length)]
  let studentName = student.name
  let studentId = student.id
  showResult(studentName, studentId)

  // a student can only win once
  students = students.filter(s => s.id !== studentId)
}

function showResult(name, id) {
  let result = document.querySelector('.result')
  // @ts-ignore
  let studentName = result.querySelector('.student-name')
  // @ts-ignore
  let studentId = result.querySelector('.student-id')
  // @ts-ignore
  studentName.innerText = name
  // @ts-ignore
  studentId.innerText = id
  // @ts-ignore
  result.classList.remove('hide')
}

/**
 * @param {string} data
 */
function parseCSVAndSaveToVar(data) {
  // Split the data into lines
  var lines = data.trim().split(/\r?\n/);

  // Extract the column indexes for "姓名：" and "学号："
  var header = lines[0].split(",");
  var nameIndex = header.indexOf('姓名：');
  var idIndex = header.indexOf('学号：');

  // Extract the "姓名：" and "学号：" columns from each line
  var dataObjects = lines.slice(1).map(function (line) {
    var columns = line.split(",");
    var name = columns[nameIndex].trim();
    var id = columns[idIndex].trim();
    return { name, id };
  });

  students = dataObjects
}
