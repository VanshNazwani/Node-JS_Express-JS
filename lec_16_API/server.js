import express from "express";

const app = express();

const contacts = [
  { id: 1, name: "abc", email: "abc@gmail.com", phone: "1234567890" },
  { id: 2, name: "jkl", email: "jkl@gmail.com", phone: "1234567890" },
  { id: 3, name: "pqr", email: "pqr@gmail.com", phone: "1234567890" },
  { id: 4, name: "xyz", email: "xyz@gmail.com", phone: "1234567890" },
  { id: 5, name: "lmn", email: "lmn@gmail.com", phone: "1234567890" },
];

// GET all contacts
app.get("/contacts", (req, res) => {
  res.status(200).json(contacts);
});

//get specific contact
app.get("/contacts/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter_contact = contacts.filter((contact) => contact.id == id)
  res.json(filter_contact);
})

// add new contact
app.post("/contacts/add", (req, res) => {
  const {id,name,email,phone} = req.body;
  

}


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
