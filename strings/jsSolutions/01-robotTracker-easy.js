/*
A robot has been given a list of movement instructions. Each instruction 
is either left, right, up or down, followed by a distance to move. 
The robot starts at [0, 0]. You want to calculate where the robot will 
end up and return its final position as a list. 

For example, if the robot is given the instructions: 
["right 10", "up 50", "left 30", "down 10"]

it will end its path 20 left and 40 up from where it started, so you 
should return [-20, 40].
*/

const robotTracker = (path) => {
  let l = { 'u': 0, 'd': 0, 'l': 0, 'r': 0 }

  for (const instruction of path) {
    let [dir, dist] = instruction.split(' ')
    l[dir[0]] = +dist
  }

  let res = [Math.abs(l['l'] - l['r']), Math.abs(l['u'] - l['d'])]
  l['l'] > l['r'] ? res[0] = -res[0] : null
  l['d'] > l['u'] ? res[1] = -res[1] : null

  return res
}

console.log(robotTracker(["right 10", "up 50", "left 30", "down 100"]))
