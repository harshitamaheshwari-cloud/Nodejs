import http from "node:http";
import { randomUUID } from "node:crypto";

let users = [
  {
    id: "1",
    name: "Harshita",
    email: "harshita@gmail.com",
    role: "admin"
  },
  {
    id: "2",
    name: "Lakshya",
    email: "lakshya@gmail.com",
    role: "user"
  }
];

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost:3000");
    const path = url.pathname;

    
    if (req.method === "GET" && path === "/users") {
      let result = users;

      
      const role = url.searchParams.get("role");

      if (role) {
        result = users.filter(user => user.role === role);
      }

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify(result));
      return;
    }

    
    if (req.method === "GET" && path.startsWith("/users/")) {
      const id = path.split("/")[2];

      const user = users.find(user => user.id === id);

      if (!user) {
        res.writeHead(404, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
          error: "User not found"
        }));

        return;
      }

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify(user));
      return;
    }

   
    if (req.method === "POST" && path === "/users") {
      let body = "";

      req.on("data", chunk => {
        body += chunk;
      });

      req.on("end", () => {
        try {
          const data = JSON.parse(body);

          if (!data.name || !data.email || !data.role) {
            res.writeHead(400, {
              "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
              error: "name, email and role are required"
            }));

            return;
          }

          const newUser = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            role: data.role
          };

          users.push(newUser);

          res.writeHead(201, {
            "Content-Type": "application/json"
          });

          res.end(JSON.stringify(newUser));
        } catch {
          res.writeHead(400, {
            "Content-Type": "application/json"
          });

          res.end(JSON.stringify({
            error: "Invalid JSON"
          }));
        }
      });

      return;
    }

    if (req.method === "DELETE" && path.startsWith("/users/")) {
      const id = path.split("/")[2];

      const index = users.findIndex(user => user.id === id);

      if (index === -1) {
        res.writeHead(404, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
          error: "User not found"
        }));

        return;
      }

      users.splice(index, 1);

      res.writeHead(204);
      res.end();
      return;
    }

    
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      error: "Route not found"
    }));

  } catch (error) {
    
    console.error(error);

    res.writeHead(500, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      error: "Internal Server Error"
    }));
  }
});



server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
