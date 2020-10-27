const express = require('express');
const app = express();

const mc = require('./controllers/messages_controller')
app.use(express.json())

//ENDPOINTS
app.get();
app.post();
app.put();
app.delete();



const port = 3001

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})