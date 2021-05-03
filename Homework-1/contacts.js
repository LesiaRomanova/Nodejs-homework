const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");

// / TODO: задокументировать каждую функцию

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
      // return;
    }

    const contacts = JSON.parse(data);

    console.log("List of contacts: ");
    console.table(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
      // return;
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find((contact) => {
      if (contact.id === contactId) {
        console.log(`Get Contact By Id ${contactId}`);
        console.table(contact);
        return contact;
      }
    });

    if (contact === null) {
      console.log(`Contact with ID ${contactId}`);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const contacts = JSON.parse(data);
    const newContact = contacts.filter((contact) => contact.id !== contactId);

    if (newContact.length === contacts.length) {
      return console.log(`Contact with ID ${contactId} removed!`);
      // return;
    }

    console.log("OK, contact delete!");
    console.table(newContact);

    fs.writeFile(contactsPath, JSON.stringify(newContact), (err) => {
      if (err) {
        return console.log("error :", err);
      }
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    const contacts = JSON.parse(data);

    contacts.push({
      id: contacts.length + 1,
      name,
      email,
      phone,
    });

    console.log("OK, contacts added!");
    console.table(contacts);
    fs.writeFile(contactsPath, "utf-8", JSON.stringify(constants), (err) => {
      if (err) {
        return console.log(err);
      }
    });
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
