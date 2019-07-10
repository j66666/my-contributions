const { exec } = require('child_process')
exec(`git add . && git commit -m "update" && git push origin master`, err => err && console.log(err))