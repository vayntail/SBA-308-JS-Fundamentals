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

const learners = [{id: 125, grade: "hjey"}];

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    LearnerSubmissions.forEach(submission => {
        // get learner object using learner_id
        let learnerId = submission.learner_id;
        let learner = getObjectinArray("id", learnerId, learners);

        // set assignment.
        let assignmentId = submission.assignment_id;
        // get score from submission's submission's score
        let score = submission.submission.score;
        // get the assignment's highest possible score from the assignmentGroup's assignment property
        let possibleScore = assignmentGroup.assignments.find(obj => obj["id"] == assignmentId).points_possible;
        console.log(score+"/"+possibleScore)

    })
    return learners;
}


function objectExistsInArray(key, value, arr) {
    // checks if an object exists inside an array
    if (arr.length != 0 && arr.find(obj => obj[key] == value) != null) {
        // if arr is not empty & an object exists with the key value, return true;
        return true;
    }
    else {
        return false;
    }
}

function getObjectinArray(key, value, arr) {
    // get an object inside an array by key 
    if (objectExistsInArray(key, value, arr)) {
        // if object exists, return the object
        return arr.find(obj => obj[key] == value);
    }
    else {
        // else return a new object with {key: value}
        return {key: value};
    }
}

getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);