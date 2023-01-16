const chalk = require("chalk");


module.exports = {
     serverMessage: function(message) {
          console.log(chalk.green("[mx-admin] ") + message)
     }
}
