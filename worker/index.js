var CronJob = require('cron').CronJob;

const fetchGithubApi = require('./tasks/fetch-github')

new CronJob('* * * * *',fetchGithubApi, null, true, 'America/Los_Angeles');