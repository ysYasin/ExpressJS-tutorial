const express = require('express');
const path = require('path');
//install and require multer packege
const multer = require('multer');


const app = express();
const port = process.env.PORT || 3110;

// set a multer function variable
const RESIVING_FILE = path.join(__dirname, '/myUpload/')

//conctroll uploading file name and extention

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, RESIVING_FILE)
    },
    filename: (req, file, cb) => {
        // yasin arafat.pdf => yasin-arafat.pdf
        // get the uploading file extention
        const fileExt = path.extname(file.originalname)
        const filename = file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now()
        cb(null, filename + fileExt)
    }
})

/// verify and upload file
var upload = multer({
    //dest: RESIVING_FILE, :: we will set dest as a destination in diskStorage
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        if (file.fieldname === 'megh') {
            if (
                file.mimetype === 'image/jpeg' ||
                file.mimetype === 'image/jpg' ||
                file.mimetype === 'image/png'
            ) {
                console.log(file);
                cb(null, true)
            } else {
                cb({ message: 'only jpeg,jpg and png acceptable' }, false)
            }

        } else if (file.fieldname === 'yasin') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true)
            } else {
                cb(({ message: 'only PDF file in thise field' }), false)
            }
        }
    }

});

/**
 * now upload can get three types 
 * upload.songle('name')
 * upload.array('name','name3')
 * upload.fields([{name:"inputname", maxCount:3},{name:"img", maxCount:1"])
 */


app.post("/", upload.fields([
    { name: 'yasin', maxCount: 4 },
    { name: 'megh', maxCount: 1 }
]), (req, res, next) => {
    if (!req, File) {
        next({ message: "Uploadding Failed", })
    } else {
        res.send('uploaded successfully')
    }
})

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.send(err.message, { ERR_Type: 'server side error' }).status(501);
        } else {
            res.send(err.message);
        }
    }
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});