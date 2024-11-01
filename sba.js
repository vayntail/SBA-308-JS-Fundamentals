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
    // loop through each submission
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

        // if learner's submission is late, deduct 10 percent from learner score.
        submittedAt > dueAt ? learnerScore -= possibleScore * .1 : null;


        // set temp list property in object which will be used to calculate average later
        // only include assignments that were already due before today
        if (dueAt < today) {
            if ("scores" in learner) {
                learner.scores.push([learnerScore, possibleScore]);
            }
            else {
                learner["scores"] = [[learnerScore, possibleScore]];
            }

            // add property for the assignment
            learner[submission.assignment_id] = learnerScore / possibleScore;
        }

        learner = getLearnerAvgScores(learner);
        // update the learner object in learners array with above changes made.
        learners[learners.indexOf(learner)] = learner;
    })
    // for each learner, remove the temp scores property
    learners.forEach(learner => delete learner.scores);

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

function getLearnerAvgScores(learner) {
    // calculate averages and update

    let total = 0;
    let totalPossible = 0;
    // for each assignment in learner.scores
    learner.scores.forEach((score) => {
        total += score[0];
        totalPossible += score[1];
    })
    // set avg property
    learner["avg"] = total / totalPossible;
    return learner;
}

// Log result
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);