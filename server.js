
var express = require('express');
var app = express();
var path = require('path');
//This server is connected to the index.html file
app.use(express.static(path.join(__dirname, './' ))); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

/*
__dirname represents the current directory of the script. Let's say the script is located at /path/to/your/script.js.
../ is a relative path that means "go up one directory level." So, when you combine __dirname with '../', you get the
 path to the parent directory of the current script, in this case, /path/to/your/.
 / const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//   res.send('Andraniks Server')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

*/

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
