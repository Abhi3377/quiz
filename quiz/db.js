/**
 * Created by aditya on 7/8/16.
 */
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://quiz:quiz@ds153835.mlab.com:53835/quizmania';

module.exports= {
    addquestion: function (data) {
        MongoClient.connect(url, function (err, db) {
            if (err != null) {
                throw err;
            }
            console.log("Connected correctly to server");
            let ques = db.collection(data.database);
            console.log(data.q);

            ques.insertOne({
                    q: data.q,
                    option1:data.o1,
                    option2:data.o2,
                    option3:data.o3,
                    option4:data.o4,
                    answer: data.answer
                },
                function (err, status) {
                    if (err)
                        throw  err;
                });
        })
    },
         fetchquestion:function (data,cb) {
        console.log(data);
             MongoClient.connect(url, function (err, db) {
                 if (err != null) {
                     throw err;
                 }
                 console.log(data);
                 console.log("Connected correctly to server");
                 let ques = db.collection(data);

                 ques.find().toArray(function (err,user) {
                     console.log(user);
                     console.log(user.length);
                     cb(user);

                 })
             })




    }}