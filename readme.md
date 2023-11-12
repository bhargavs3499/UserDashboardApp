User DashBoard Application

Steps to Initialize the project
run npm init in each of these three folders(client,server,socket)

go to client folder and run npm i
go to server folder and run npm i
go to socket folder and run npm i

after that setup up your database in mongo db or any monog url
go to config.js file in server folder and enter your db url string connection
go to https://ethereal.email/create and create your user email to get password recovery otps and 2fa otps and enter your new ethereal mail and password in cnofig.js

export default {
  JWT_SECRET: "LiCAxVXflT/eWS9pnjSYMJRcEj/z3eAZZ80KMeltaac=",
  EMAIL: "velma.kerluke@ethereal.email", // testing email & password
  PASSWORD: "wE218AvfhSNrNUR2rR",
  ATLAS_URI: "mongodb://localhost:27017",
};

add "start": "nodemon server.js" in scripts(package.json) of server folder
add "start": "nodemon index.js" in scripts(package.json) of socket folder

go to each of these three folders(client,server,socket) and run npm start
