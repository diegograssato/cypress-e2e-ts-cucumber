const { cypressConfigResolver } = require('../config/cypress-config-resolver');

// Some async example that waits for 5 secs
// This could be a cy.request or some node async stuff
const pluginExecuteCommand = command =>
// eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    const apiUrl = cypressConfigResolver().e2eDatabaseJobApi; 
    console.log("===============================================================================")
    console.log(apiUrl)
    console.log(command)
    setTimeout(() => {
      resolve(`${command} execution simulated after 5 secs, thrown to ${apiUrl}`);
    }, 1000);
  });

module.exports = pluginExecuteCommand;
