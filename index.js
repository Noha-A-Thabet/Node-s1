const deal = require("./controller/dealWithJson");
const yargs = require("yargs");
const heads = ['id' - 'title' - 'content' - 'dueDate', 'status'];
const Task = require("./controller/user.controller")

// $$$$$ add
yargs.command({
     command: "add",
     builder: {
          id: {
               default: Date.now()
          },
          title: {
               type: "String",
               demandOptionv: true
          },
          content: {
               type: "String",
               default: "this is default content"
          },
          dueDate: {
               type: "String",
               default: "15/8/2022"
          },
          status: {
               type: "Boolean",
               default: true
               //value:[true,false]
          },
     },
     handler: (argv) => {
          Task.add(argv)
     }
})

// $$$$$ showAll
yargs.command({
     command: "showAll",
     handler: () => {
          Task.showAll()
     }
})

// $$$$$ showSingle
yargs.command({
     command: "showSingle",
     builder: {
          id: {

               demandOption: true
          }
     },
     handler: (argv) => {
          Task.showSingle(argv.id)
     }
})
yargs.argv