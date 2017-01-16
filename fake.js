var query = require("./query.js");

var test = [1,2,3];
console.log(query().select().from(test).where().execute());
