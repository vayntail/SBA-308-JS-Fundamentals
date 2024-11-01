/*
 ∧,,,∧   ~ ┏━━━━━━━━┓
(  ̳• · • ̳)   ~ ♡  Test Data!   ♡
/       づ  ~ ┗━━━━━━━━┛     
*/
let courseInfo;
let assignmentGroup;
let learnerSubmissions;

// Provided Test Case Information
const TestCase = () => {
    // The provided course information.
    courseInfo = {
        id: 451,
        name: "Introduction to JavaScript"
    };

    // The provided assignment group.
    assignmentGroup = {
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
    learnerSubmissions = [
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

}

// Error cases!

// courseInfo's do not match up
// const ErrorCaseOne = () => {
//     courseInfo = {
//         id: 454,
//         name: "Introduction to JavaScript"
//     };

//     assignmentGroup = {
//         id: 12345,
//         name: "Fundamentals of JavaScript",
//         course_id: 451,
//         group_weight: 25,
//         assignments: [
//             {
//                 id: 1,
//                 name: "Declare a Variable",
//                 due_at: "2023-01-25",
//                 points_possible: 0
//             },
//             {
//                 id: 2,
//                 name: "Write a Function",
//                 due_at: "2023-02-27",
//                 points_possible: 150
//             },
//             {
//                 id: 3,
//                 name: "Code the World",
//                 due_at: "3156-11-15",
//                 points_possible: 500
//             }
//         ]
//     };

//     learnerSubmissions = [
//     {
//         learner_id: 125,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 47
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-02-12",
//             score: 150
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 3,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 400
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-24",
//             score: 39
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-03-07",
//             score: 140
//         }
//     }
// ];

// }
// const ErrorCaseTwo = () => {
//     courseInfo = {
//         id: 451,
//         name: "Introduction to JavaScript"
//     };

//     assignmentGroup = {
//         id: 12345,
//         name: "Fundamentals of JavaScript",
//         course_id: 451,
//         group_weight: 25,
//         assignments: [
//             {
//                 id: 1,
//                 name: "Declare a Variable",
//                 due_at: "2023-01-25",
//                 points_possible: 0 // 0
//             },
//             {
//                 id: 2,
//                 name: "Write a Function",
//                 due_at: "2023-02-27",
//                 points_possible: '150' // string
//             },
//             {
//                 id: 3,
//                 name: "Code the World",
//                 due_at: "31561115",
//                 points_possible: 500
//             }
//         ]
//     };

//     learnerSubmissions = [
//     {
//         learner_id: 125,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 47
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 2,
//         submission: {
//             submitted_at: 20230212, // number
//             score: 150
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 3,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 400
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-24",
//             score: 39
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-03-07",
//             score: 140
//         }
//     }
// ];

// }




//
/* 
 ∧,,,∧
 (• ⩊ •)
|￣U U￣￣￣￣￣￣￣￣￣|
|           (my code starts here...)           |   
￣￣￣￣￣￣￣￣￣￣￣￣
*/

TestCase();
// ErrorCaseOne();
// ErrorCaseTwo();

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    // if assignmentGroup does not belong to its course, throw an error
    if (assignmentGroup.course_id != courseInfo.id) {
        throw new Error(`Error: AssignmentGroup does not belong to its course!!! \nCourseInfo's id is ${courseInfo.id}, while AssignmentGroup's course_id is ${assignmentGroup.course_id}...`);
    }

    const learners = [];
    // loop through each submission
    learnerSubmissions.forEach(submission => {
        // get learner object using learner_id
        let learner = getLearnerObject("id", checkInt(submission.learner_id), learners);

        // if doesn't exist already, push object to array
        (!learners.includes(learner)) ? learners.push(learner) : null;

        // set assignment
        let assignment = assignmentGroup.assignments.find(obj => obj["id"] == checkInt(submission.assignment_id));
        let learnerScore = checkInt(submission.submission.score);
        let possibleScore = checkInt(assignment.points_possible);

        // time variables
        let today = new Date().getTime();
        let dueAt = getDate(assignment.due_at);
        let submittedAt = getDate(submission.submission.submitted_at);

        // if learner's submission is late, deduct 10 percent from learner score.
        submittedAt > dueAt ? learnerScore -= possibleScore * .1 : null;


        // set temp list property in object which will be used to calculate average later
        // only include assignments that were already due before today & make sure possibleScore do not equal zero
        if (dueAt < today && possibleScore != 0) {
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

function checkInt(value) {
    // checks if given value is an integer, or if it can at least be changed to an integer
    // then returns it
    if (!Number.isInteger(value)) {
        if (isNaN(parseInt(value))) {
            throw new Error(`Error: ${value} is an invalid number.`);
        }
    }
    return parseInt(value);
}

function getDate(string) {
    // returns a Date().getTime() with a given string in the format of "YYYY-MM-DD"
    // check if in right formats
    if (new Date(string) == "Invalid Date" | typeof string != "string") {
        throw new Error(`Error: ${string} is an invalid date!! Make sure all dates are written in this string format: "YYYY-MM-dd"`)
    }
    return new Date(string);
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
    try {
        // check if scores exists, then add to totals
        let i = 0;
        while (true) {
            let score = learner.scores[i];
            total += score[0];
            totalPossible += score[1];

            i += 1;
            if (i == learner.scores.length) {
                break;
            }
        }
    }
    catch (e) {
        // if scores doesn't exist and throws an error, just return here
        return learner;
    }

    // find and set avg property
    learner["avg"] = total / totalPossible;
    return learner;
}

// Log result
const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
console.log(result);