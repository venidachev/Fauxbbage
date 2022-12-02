const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('Hello world')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server listening on http://localhost:', PORT)
})