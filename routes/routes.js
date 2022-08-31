const express = require('express');
const router = express.Router();
const fs = require('fs');
const parse = require('node-html-parser').parse;


router.post('/', async (req, res) => {
        try {
            console.log(req.body)
            fs.readFile('./index.html', 'utf8', (err,html)=>{
                if(err){
                    throw err;
                }

                const root = parse(html);

                const body = root.querySelector('body');
                //body.set_content('<div id = "asdf"></div>');
                root.writeSync("./index.html",`<div class="column-button"><a href=""><img src="" alt=""></a></div>`);

            });
            res.status(200).send('ok');
        } catch (err) {
            res.status(500)
            throw err;
        }


})


module.exports = router;