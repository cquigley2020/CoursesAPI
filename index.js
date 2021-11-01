const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1150;

let data = {
    "object": {
        "User": {
            "username": "cquigley",
            "password": "letsgobrandon2022",
            "email": "cquigley@gmail.com",
            "courses": {
                "course": {
                    "courseId": "CMSC2204",
                    "courseName": "Mobile",
                    "startDate": "8/29/2021",
                    "endDate": "12/21/2021"
                },
                 "course1": {
                    "courseId": "CMSC2209",
                    "courseName": "C Sharp II",
                    "startDate": "8/29/2021",
                    "endDate": "12/21/2021"
                },
                 "course2": {
                    "courseId": "MATH1905",
                    "courseName": "Algebra",
                    "startDate": "8/29/2021",
                    "endDate": "12/21/2021"
                }
            }
        }
    }
}

app.get('/getUser', (req, res) => {
    try{
        return res.status(200).json(data);
    }
    catch{
        return res.status(500);
    }
    });

    app.post('/addUser', (req,res) => {
        try{
            let courseVar = req.body.object.courses;
           // console.log(courseVar);
            username = req.body.object.User.username;
            return res.status(200).send("Added user " + username + " successfully");
        }
        catch{
            return res.status(500);
        }
    });

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});