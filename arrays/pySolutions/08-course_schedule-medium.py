'''
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you 
must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true

Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.


Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 
you should also have finished course 1. So it is impossible.
'''


def course_schedule(numCourses, schedule):
    # create dict to hold adjacency list
    preMap = {i: [] for i in range(numCourses)}

    # map prereq adjacency list
    for crs, pre in schedule:
        preMap[crs].append(pre)

    # dfs the prereqs
    def dfs(crs):
        visiting = set()
        # if the course is in visiting there is a cycle
        if crs in visiting:
            return False
        # if the course has an empty prereq list then:
            # 1. it has no prereqs.
            # 2. it has already been checked.
        if preMap[crs] == []:
            return True

        visiting.add(crs)
        # check the adjacency list for prereqs to this course
        for pre in preMap[crs]:
            # dfs for each of this course's prereqs to check their prereqs
            if not dfs(pre):
                return False

        # remove this course from visited
        # clear its prereqs as they have been confirmed valid
        visiting.remove(crs)
        preMap[crs] = []
        return True

    # check that each course can be completed
    for c in range(numCourses):
        if not dfs(c):
            return False
    return True


print(course_schedule(12, [[9, 1], [1, 0], [2, 0], [7, 8], [3, 1], [
    8, 3], [4, 2], [7, 3], [5, 3], [7, 9], [6, 4]]))
