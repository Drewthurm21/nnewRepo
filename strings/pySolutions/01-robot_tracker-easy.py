'''
A robot has been given a list of movement instructions. Each instruction 
is either left, right, up or down, followed by a distance to move. 
The robot starts at [0, 0]. You want to calculate where the robot will 
end up and return its final position as a list. 

For example, if the robot is given the instructions: 
["right 10", "up 50", "left 30", "down 10"]

it will end its path 20 left and 40 up from where it started, so you 
should return [-20, 40].
'''


def robot_tracker(path):
    l = {'u': 0, 'd': 0, 'l': 0, 'r': 0}
    for instruction in path:
        dir, dist = instruction.split(' ')
        l[dir[0]] = int(dist)

    res = [abs(l['l'] - l['r']), abs(l['u'] - l['d'])]
    x_axis = -res[0] if l['l'] > l['r'] else res[0]
    y_axis = -res[1] if l['d'] > l['u'] else res[1]

    return [x_axis, y_axis]


print(robot_tracker(["right 100", "up 50", "left 60", "down 100"]))
