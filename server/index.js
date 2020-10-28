const express = require('express');
const app = express();

const mc = require('./controllers/messages_controller')
app.use(express.json())
app.use(express.static(_dirname + '/../public/build'))

//ENDPOINTS
app.get('/api/messages', mc.read);
app.post('/api/messages', mc.create);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);



const port = 3001

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})