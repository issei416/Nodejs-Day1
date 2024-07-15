# Express Timestamp File Server 📂⏰

This project is an Express.js server that writes timestamps to files and reads all files in a directory. It's a simple demonstration of using Express.js with CORS, file handling, and date formatting.

## Features ✨

- Write the current timestamp to a file 📄
- Read all files in the `timestamp` directory 📁

## Dependencies 📦
* express: Fast, unopinionated, minimalist web framework for Node.js
* cors: Middleware for enabling Cross-Origin Resource Sharing (CORS)
* date-fns: Modern JavaScript date utility library
* fs: File system module (built-in to Node.js)

## Server runs on port 8000:
* Home: http://localhost:8000/
* Write timestamp to file: http://localhost:8000/writefile
* Read all files in the timestamp directory: http://localhost:8000/readallfiles

## API Endpoints 🌐
**Home /**  
* Description: Displays the available endpoints.
* Method: GET
* Response: HTML with available endpoints.
## Write Timestamp /writefile
* Description: Writes the current timestamp to a file.
* Method: GET
* Response: Sends the current timestamp.
## Read All Files /readallfiles
* Description: Reads and returns all file names in the timestamp directory.
* Method: GET
* Response: Sends an array of file names in the timestamp directory.

Render deploy URL : [click here](https://nodejs-day1-5arl.onrender.com)