//TODO APP WORKING FUNCTION USING JAVASCRIPT

let todo = [];

let req = prompt("Enter your REQUEST:");

while(true) {
    if(req == "quit") {
        console.log("quitting the App");
        break;
    }

    if(req == "list") {
        console.log("----------------------");
        for(let i = 0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------------");
    } else if(req == "add") {
        let task = prompt("Enter a task to ADD");
        todo.push(task);
        console.log("1 new task added");
    } else if(req == "delete") {
        let idx = prompt("Enter the index od task to be deleted");
        todo.splice(idx, 1);
        console.log("Task deleted");
     } else { 
             console.log("Wrong request")
             }

    req = prompt("Enter your REQUEST:");

}
