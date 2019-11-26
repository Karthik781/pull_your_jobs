const fetch = require('node-fetch');
var redis = require("redis"),
    client = redis.createClient();
   
const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);


const baseURL = 'https://jobs.github.com/positions.json';

async function  fetchGithubApi() {

let nextFetch = true;
const allJobs = [];
let onPage = 0;

    while(nextFetch){
            const res = await fetch(`${baseURL}?page=${onPage}`)
            const jobs = await res.json();
            if(jobs.length < 50){
                nextFetch = false;
            }
            allJobs.push(...jobs)
            onPage++;
            console.log(jobs.length);
    }   
    console.log(allJobs.length)

    const juniorJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        if( jobTitle.includes('senior') ||
        jobTitle.includes('manager') ||
        jobTitle.includes('sr.') ||
        jobTitle.includes('architect') ){
            return false;
        }
        return true;
    });

    console.log(juniorJobs.length)

    const sucess = await setAsync('github', JSON.stringify(juniorJobs));
    console.log(sucess)
}

fetchGithubApi();

module.exports =fetchGithubApi;