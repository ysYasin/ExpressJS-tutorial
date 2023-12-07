const express = require("express");

const user = express.Router();

user.get("/", (req, res) => {
    res.send("Hello Bangladesh User");
});

user.get("/about", (req, res) => {
    res.send("beche thakte sex koro USER");
});

user.get("/blog", (req, res) => {
    res.send("Onk Boro ekta blog, buje buje poro please USER");
});


/* ------------------------------ router params ----------------------------- */

// user.param('ip', (req, res, next, id) => {
//     req.myIp = id >= 0 && id <= 5 ? 'valied' : 'invalied';
//     next();
// })
// we can wrp params fuction to send there extarnal parameter 

// const check = ((params, value) => {
//     user.param(params, (req, res, next, id) => {
//         req.myIp = id >= value ? 'valied' : 'invalied';
//         next();
//     })
// })

// check('ip', 'admin')

// user.get('/blog/:ip', (req, res) => {
//     res.send(`your IP is ${req.myIp}`)
// })


/* ------------------------------ Router.route ------------------------------ */
user.route('/admin')
    .all(function (req, res, next) {
        const vMethods = ['get', 'post', 'put', 'delete'];

        const valid = typeof req.method === 'string'
            && vMethods.indexOf(req.method.toLowerCase()) > -1
            ? true
            : false

        if (valid) {
            console.log(`I am a loger, I just consoling ${req.method}`);
            next()
        } else {
            res.end()
        }
    })
    .get((req, res) => {
        res.json({ message: "GET" })
    })
    .post((req, res) => {
        res.json({ message: "POST" })
    })
    .put((req, res) => {
        res.json({ message: "PUT" })
    })
    .delete((req, res) => {
        res.json({ message: "DELETE" })
    })



module.exports = user;