const fs = require("fs");
const http = require("http");

const users = [
  {
    name: "nyeinminhtet",
    email: "nyeinmg@gmail.com",
  },
  {
    name: "phoowaiko",
    email: "phoo@gmail.com",
  },
  {
    name: "nyilay",
    email: "nyimg@gmail.com",
  },
];
const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/script.js") {
    fs.readFile("script.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/data") {
    res.writeHead(200, { "Content-Type": "application/jason" });
    res.write(JSON.stringify({ name: "nyeinminhtet" }));
    res.end();
  } else if (req.url === "/users") {
    const method = req.method;
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/jason" });
      res.write(JSON.stringify(users));
      res.end();
    } else if (method === "POST") {
      let newData = "";
      req.on("data", (chunk) => {
        newData += chunk;
      });
      req.on("end", () => {
        const newUser = JSON.parse(newData);
        users.push(newUser);
        // console.log(data);
        res.writeHead(200, { "Content-Type": "application/jason" });
        res.write(JSON.stringify(users));
        res.end();
      });
    } else if (method === "PUT") {
      let updateData = "";
      req.on("data", (chunk) => {
        updateData += chunk;
      });
      req.on("end", () => {
        const updateUser = JSON.parse(updateData);
        const updateEmail = updateUser.email;
        const hasEmail = users.find((user) => user.email === updateEmail);
        if (hasEmail) {
          hasEmail.name = updateUser.name;
        }
        res.writeHead(200, { "Content-Type": "application/jason" });
        res.write(JSON.stringify(users));
        res.end();
      });
    } else if (method === "DELETE") {
      let updateData = "";
      req.on("data", (chunk) => {
        updateData += chunk;
      });
      req.on("end", () => {
        const deleteUser = JSON.parse(updateData);
        const deleteEmail = deleteUser.email;
        const hasEmail = users.find((user) => user.email === deleteEmail);
        if (hasEmail) {
          const indexNumber = users.indexOf(hasEmail);
          users.splice(indexNumber, 1);
        }
        res.writeHead(200, { "Content-Type": "application/jason" });
        res.write(JSON.stringify(users));
        res.end();
      });
    } else if (req.url === "/uploadfile") {
      res.writeHead(200, { "Content-Type": "application/jason" });
      console.log("that work");
      console.log(req);
      res.write(JSON.stringify({ message: "all fine bro" }));
      res.end();

      // let data = "";
      // req.on("data", (chunk) => {
      //   data += chunk;
      // });
      // req.on("end", () => {
      //   fs.writeFile("fromFrontEnd.txt", JSON.parse(data), () => {
      //     console.log(data);
      //   });
      // });
    } else {
      res.writeHead(500);
      res.write("<h1>unkonw</h1>");
      res.end();
    }
  }
});
sever.listen(3000, () => {
  console.log("sever is listening 3000");
});
