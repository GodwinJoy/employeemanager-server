// import json server
const JSONServer=require('json-server')

// server for running file
const employeeManager=JSONServer.create()

// import db.json file
const router=JSONServer.router("db.json")

// middleware
const middleware=JSONServer.defaults()

// port to run app
const PORT= 3000

// to use middlware sever
employeeManager.use(middleware)

// routes for client request
employeeManager.use(router)

// run server for client request
employeeManager.listen(PORT,()=>{
    console.log(`employeeManager started at port: ${PORT} and waiting for client request !!`);
    
})