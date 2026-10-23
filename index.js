import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World! Express server is running.");
});

app.get("/users", (req, res) => {
  res.send(users);
});

const users = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    age: 22,
    city: "Dhaka",
    role: "student",
    isActive: true,
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@example.com",
    age: 25,
    city: "Chattogram",
    role: "developer",
    isActive: true,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    age: 21,
    city: "Sylhet",
    role: "student",
    isActive: false,
  },
  {
    id: 4,
    name: "Sadia Islam",
    email: "sadia@example.com",
    age: 24,
    city: "Rajshahi",
    role: "designer",
    isActive: true,
  },
  {
    id: 5,
    name: "Tanvir Hossain",
    email: "tanvir@example.com",
    age: 26,
    city: "Khulna",
    role: "developer",
    isActive: true,
  },
];

export default users;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
