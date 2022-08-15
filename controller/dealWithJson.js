const fileSystem = require("fs")
const readFromJs = () => {
     let data;
     try {
          data = JSON.parse(fileSystem.readFileSync("data.json"))
     } catch (e) {
          data = []
     }
     return data;
}


const writeInJson = (info) => {
     fileSystem.writeFileSync("data.json", JSON.stringify(info))
}

module.exports = { readFromJs, writeInJson };