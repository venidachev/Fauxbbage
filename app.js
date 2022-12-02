const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('Hii ren :D. This will be fauxbbage!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server listening on http://localhost:', PORT)
})