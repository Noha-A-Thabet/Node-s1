const heads = ["id", "title", "content", "dueDate", "status"];
const deal = require("./dealWithJson");

// Add
const add = (argv) => {
     const task = {}
     heads.forEach(head => task[head] = argv[head])
     console.log(task);
     if (task.status == true) task.status == false
     else task.status == true
     const allTasks = deal.readFromJs();
     allTasks.push(task)
     deal.writeInJson(allTasks)
}

// showAll
const showAll = () => {
     const allTasks = deal.readFromJs();
     allTasks.forEach((task) => {
          console.log(`${task.id} ${task.title} ${task.content} ${task.dueDate} ${task.status}`);
     })
}


// showSingle
const showSingle = (id) => {
     const allTasks = deal.readFromJs()
     const task = allTasks.find(task => task.id == id);
     if(!task) return console.log('No Tasks Found')
     else{
          console.log(` ${task.id} ${task.title} ${task.content} ${task.dueDate} ${task.status}`);
     }
}

module.exports = { add, showAll, showSingle }