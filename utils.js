

const timer = (testFunc, numTimes, ...vals) => {

  for (let i = 0; i <= numTimes; i++) {
    console.time('benchmark')
    let functionOutput = testFunc(...vals)
    console.timeEnd('benchmark')
    console.log(functionOutput)
  }
}


const classRandomizer = (instructors, students) => {
  const teams = {}
  for (let i of instructors) teams[i] = []
  for (let j in students) teams[instructors[j % instructors.length]].push(students[j])
  return teams
}

const instructors = [
  'instructor', 'names', 'here',
]

const students = [
  'student', 'names', 'here',
]

classRandomizer(students, instructors)

module.exports = {
  timer
}