const express =  require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send("Task 5.1P: Containerisation of a simple web application using Docker ");
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})