const express = require("express");
const app = express();

app.get('/home',function(req,res)
{
  res.send("Welcome to HomePage");
})

// app.listen(3000);
app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});


