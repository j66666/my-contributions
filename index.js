const fs = require('fs')
const { exec } = require('child_process')
const schedule = require('node-schedule');

const commit = () => {
    exec(`git add . && git commit -m "update" && git push origin master`, err => err && console.log(err))
}

const scheduleCronstyle = () => {
    schedule.scheduleJob('*/60 * * * *', () => {
        fs.readFile('./record.txt', (err, data) => {
            if (err) {
                console.log('read err', err)
            } else {
                fs.writeFile('./record.txt', `${data}\n${new Date()}`, err => {
                    if (err) {
                        console.log('write err', err)
                    } else {
                        commit()
                    }
                })
            }
        })
    });
}

scheduleCronstyle();
