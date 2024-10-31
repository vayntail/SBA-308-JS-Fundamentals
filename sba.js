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

    let learners = [];

    learnerSubmissions.forEach(submission => {
        // get learner object using learner_id
        let learner = getObjectinArray("id", submission.learner_id, learners);

        if (!learners.includes(learner)) {
            // if doesn't exist already, push object to array
            learners.push(learner);
        }

        // set assignment.
        let assignmentId = submission.assignment_id;
        // get score from submission's submission's score
        let score = submission.submission.score;
        // get the assignment's highest possible score from the assignmentGroup's assignment property
        let possibleScore = assignmentGroup.assignments.find(obj => obj["id"] == assignmentId).points_possible;
        let assignmentAvg = score / possibleScore;

        /* 
        for some reason, the id always sets as a string. I found that to set it as integer, I need to use Map
        instead of Object.
        I will fix this later after clarifying with Christina
        */
        learner[assignmentId] = assignmentAvg; 

        learners[learners.indexOf(learner)] = learner;

    })
    return learners;
}

function getObjectinArray(key, value, arr) {
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