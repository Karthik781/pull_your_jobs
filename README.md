# pull_your_jobs

Pull your jobs is an React SPA which provides curated list of developer jobs from Github jobs, stackoverflow jobs etc.. It simplifies job searching for junior developers with its filtering mechanism.

## technologies
- **Redis**: Data storage and caching
- **express**: server side framework
- **React**: Frontend React app
- **material-ui**: UI components

## Folder structure

```sh
spectrum/
├── api        # API server
├── client     # Frontend app react
├── worker     # Worker server(fetching from Github jobs, stackoverflow API)
```

## installation

Clone the project repository

```bash
git clone https://github.com/Karthik781/pull_your_jobs.git
```

In root directory, install cron, express, redis, node-fetch by
```node
npm install
```
Move into client folder and install react and material-ui
```bash
cd client
```
```node
npm install
```

and after installing above, you are ready to go.

open a new terminal and start redis 
```sh
redis-cli
```
in another terminal, start server
```sh
node api/index
```
in another terminal, start react client
```sh
npm start
```

Now your app will be up and running in browser at http://localhost:3000/