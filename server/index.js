const express = require('express')

const PORT = process.env.PORT || 3001

const app = express();

app.get("/api", (req, res) => {
    setTimeout( ()=> {
      res.json({ 
        data: {
          todos: [{id:0, text: "task 123", completed: false}], 
          visibilityFilter: "ALL" 
        } 
      })
    }, 3000)
     
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})