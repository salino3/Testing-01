const express = require("express");
 const router = require("./router/drinks");
 const cors = require('cors');


const app = express();
app.use(cors());

app.use("/drinks", router);
 
//* Run server
//> npm start
//
//* Run Testing
//> npm run test


 
app.listen(4300, () => {
  console.log("Server running on port 4300");
});


