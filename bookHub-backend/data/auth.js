import bcrypt from "bcrypt";

const password = "abcd1234"; // $2b$10$/Wy3wneurB2iGZNW77fl2u1vGo3CPDQA009TRv9cl/H0W7jbWO2d6

let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$10$/Wy3wneurB2iGZNW77fl2u1vGo3CPDQA009TRv9cl/H0W7jbWO2d6",
    name: "Bob",
    email: "guddbs5545@naver.com",
    url: "",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
