/**
 * Created by aditya on 7/8/16.
 */
const express = require('express');
//const User=require('../mon/user')
const app = express();
const user=require('../db')
const route = express.Router();



route.use('/show',express.static('./public_html'));
route.get('/',function (req,res) {
    res.render('kk');

});
route.get('/addquestions',function (req,res) {
    res.render('add');

});
route.get('/about',function (req,res) {

   res.render('about');
});

route.post('/addquestions',function (req,res) {
    var data;
    data = {
        q: req.body.ques,
        o1:req.body.option1,
        o2:req.body.option2,
        o3:req.body.option3,
        o4:req.body.option4,
        answer:req.body.answer,
        database:req.body.database
    };
    console.log(data.database);
    user.addquestion(data);
    res.redirect('/addquestions');
});

route.get('/showdata',function (req,res)
{
    console.log(    req.query.name);
    user.fetchquestion(req.query.name,function (data) {
        console.log(data);
        res.send(data);

    })
});
module.exports=route;