export const defaultState = {
    session: {
        authenticated: false
    },
    users: [{
        id: "U1",
        name: "Dev"
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    },{
        name: "Doing",
        id: "G2",
        owner: "U1"
    },{
        name: "Done",
        id: "G3",
        owner: "U1"
    }],
    tasks : [{
        name: "Do tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    },{
        name: "Doing tests",
        id: "T2",
        group: "G2",
        owner: "U1",
        isComplete: false
    },{
        name: "Tests done",
        id: "T3",
        group: "G3",
        owner: "U1",
        isComplete: true
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!!!"
    }]
}