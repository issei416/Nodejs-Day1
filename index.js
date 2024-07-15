import express from "express";
import cors from "cors";
import fs from "fs"// 3rd perty for file handling
import format from "date-fns/format" //3rd part to format the date


const app = express();
const PORT = 8000; //using port 8000

app.use(cors());

app.get('/', (req, res) => { //get call for home(landing)
  res.send( 
    `<div style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center">
    <h1>Endpoint to write file with time stamp : /writefile</h1><h1>
    Endpoint to read all files in the folder: /readallfiles</h1>
    </div>`
    );
});

app.get('/writefile', (req, res) => { //get call for wrting the file 
  let timestamp = new Date(); //gets new date
  let formatedtimestamp = format(timestamp,"dd-MM-yyyy-hh-mm-ss"); //using 3rd part known ad date-fsn to format the date
  res.send(`the timestamp is ${timestamp}`);
  
  const filePath = `timestamp/${formatedtimestamp}.txt`
  fs.writeFileSync(filePath,`${new Date()}`,'utf8') //creates a file with the name and data in required format 
});

app.get('/readallfiles', (req, res) => {
  let filePath = "timestamp";
  let files = fs.readdirSync(filePath); //returns an array of file nmaes inside the given filePath

  res.send(files); // sends an array of file names inside the folder
})

app.listen(PORT, () => { //always listens the port 8000 checking for any api calls 
  console.log(`Server is running on port ${PORT}`);
});