/* -------------------------------------------------------------------------- */
/*                             ERROR Handling is                              */
/* -------------------------------------------------------------------------- */
const express = require('express');
const app = express();
const port = process.env.PORT || 3500;

/*app.use((req, res, next) => {
    for (let i = 0; i <= 5; i++) {
        if (i === 5) {
            next('some this wrong')
        } else {
            res.write('i')
        }
    }
})
*/

// app.get('/', (req, res) => {
//     res.send('hello world!')
// })

// how to handle if cliend request an url but it Doesn't exist in our server ?
app.use((req, res) => {
    res.send('requested url is not found').status(404)
})



// Error handler middleware should be called at then of all miidleware requests

/* app.use((err, req, res, next) => {
   if (res.headersSent) {
       if (err.message) {
           next(err.message);
       } else {
           res.send('there was an ERROR')
       }
   } else {
       res.send('there was an ERROR').status(500)
   }
})*/

const fs = require('fs');
app.get("/", (req, res, next) => {
    fs.readFile(`${__dirname}/path.txt`, 'utf8', (err, data) => {
        console.log(data);
        next(err)
        res.send(data.name)
    })
})



/* -------------------------------------------------------------------------- */
/*                      Asyncronus way of ERROR handdling                     */
/* -------------------------------------------------------------------------- */
// const fs = require('fs');
// app.get("/", (req, res, next) => {
//     fs.readFile(`${__dirname}/path.txt`,'utf8, (err, data) => {
//         if (err) {
//             next(err); // if we include in next parameter any thing, that means it will go next with the error and error handler will catch ir
//         } else {
//             res.send(data)
//         }
//     })
// })


app.listen(port, () => {
    console.log(`server connected ar port ${port}`);
})