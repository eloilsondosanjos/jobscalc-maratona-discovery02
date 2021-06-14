const express = require("express")
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
  name: "Eloilson",
  avatar: "https://avatars.githubusercontent.com/u/59416393?s=400&u=028ddf3943aa1e534f6f552dc60362d7cfbd72e4&v=4",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4
}

const jobs = [
  {
    id: 1,
    name: "Pizzaria Guloso",
    "daily-hours": 2,
    "total-hours": 60,
    created_at: Date.now()
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 47,
    created_at: Date.now()
  },
  {
  id: 3,
  name: "App AquaFish",
  "daily-hours": 2,
  "total-hours": 60,
  created_at: Date.now()
},
]

routes.get('/', (req, resp) => {
  const updatedJobs = jobs.map((job) => {
    
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()   
    
    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate()

    return job
  })
  
  resp.render(views + "index", {profile, jobs})
})
routes.get('/job', (req, resp) => resp.render(views + "job"))
routes.post('/job', (req, resp) => {

  const jobId = jobs[jobs.length -1]?.id || 1
  

  jobs.push({
    id: jobId + 1,
    name: req.body.name,
    "daily-hours": req.body["daily-hours"],
    "total-hours": req.body["total-hours"],
    created_at: Date.now()  
  })
  
  return resp.redirect('/')
})
routes.get('/job/edit', (req, resp) => resp.render(views + "job-edit"))
routes.get('/profile', (req, resp) => resp.render(views + "profile", {profile}))

module.exports = routes