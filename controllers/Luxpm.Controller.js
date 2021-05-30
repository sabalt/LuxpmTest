const db = require('../config/sequelize');
const Luxpm = db.luxpm;

exports.home = (req, res) => {
    dataToSend = [];
    //run the python script
    const { spawn } = require('child_process');
    const pythonProcess = spawn('python', ['./odd.py']);
    //get the result of python script
    pythonProcess.stdout.on('data', function(data) {
        dataToSend.push(JSON.parse(data.toString()));
    });
    pythonProcess.on('close', (code) => {
        //loop in the result of python script
        for (i = 0; i < dataToSend[0].length; i++) {
            //create object to add to the db
            luxpm = {
                letter: dataToSend[0][i]
            };
            //add object to the db
            Luxpm.create(luxpm).then(data => {
                res.send("Letter added.");
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while adding the letter."
                });
            });
        }
        res.send(dataToSend[0]);
    });
}