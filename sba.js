/*
 ∧,,,∧   ~ ┏━━━━━━━━┓
(  ̳• · • ̳)   ~ ♡  Test Data!   ♡
/       づ  ~ ┗━━━━━━━━┛     
*/

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];




//
/* 
 ∧,,,∧
 (• ⩊ •)
|￣U U￣￣￣￣￣￣￣￣￣|
|           (my code starts here...)           |   
￣￣￣￣￣￣￣￣￣￣￣￣
*/
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    // if assignmentGroup does not belong to its course, throw an error
    if (assignmentGroup.course_id != courseInfo.id) {
        throw new Error(`Error: AssignmentGroup does not belong to its course!!! \nCourseInfo's id is ${courseInfo.id}, while AssignmentGroup's course_id is ${assignmentGroup.course_id}...`);
    }
    
    let learners = [];
    learnerSubmissions.forEach(submission => {
        // get learner object using learner_id
        let learner = getLearnerObject("id", submission.learner_id, learners);

        // if doesn't exist already, push object to array
        (!learners.includes(learner)) ? learners.push(learner) : null;

        // set assignment
        let assignment = assignmentGroup.assignments.find(obj => obj["id"] == submission.assignment_id);
        let learnerScore = submission.submission.score;
        let possibleScore = assignment.points_possible;

        // time variables
        let today = new Date().getTime();
        let dueAt = new Date(assignment.due_at).getTime();
        let submittedAt = new Date(submission.submission.submitted_at).getTime();

        // if learner's submission is late, deduct 10 percent
        submittedAt > dueAt? learnerScore -= possibleScore * .1 : null;

        // add the assignment avg score to object.
        // check for if assignment is not yet due to not include it in results or the average
        let avgScore = learnerScore / assignment.points_possible;
        dueAt < today? learner[submission.assignment_id] = avgScore : null;


        // set total average by finding each parameters that's not id or avg
        let avgs = [];
        for (key in learner) {
            if (key != "id" && key != "avg") {
                avgs.push(learner[key]);
            }
        }
        let totalAvg = avgs.reduce((acc, value) => acc + value) / avgs.length;
        learner["avg"] = totalAvg;

        learners[learners.indexOf(learner)] = learner;

    })
    return learners;
}

function getLearnerObject(key, value, arr) {
    // get an object inside an array by key 
    for (i in arr) {
        let obj = arr[i];
        if ('id' in obj && obj['id'] == value) {
            return obj;
        }
    }
    // if object doesn't exist, return a new one with key value
    return { [key]: value };
}

// Log result
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);