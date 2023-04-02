class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  addContact(newContact) {
    this.contacts.push(newContact);
    console.log("Contact added sucessfully");
  }
  remove(delContact) {
    this.contacts.map((contact) => {
      if (contact.name === delContact) {
        this.contacts.pop(contact);
        console.log("contact deleted");
      } else {
        console.log("delete contact not found");
      }
    });
  }
  edit(editContact, newOption, newVal) {
    this.contacts.map((contact) => {
      if (contact.name === editContact) {
        if (newOption === "name") {
          contact.name = newVal;
          console.log("contact edited");
        } else if (newOption === "phone") {
          contact.phone = newVal;
          console.log("contact edited");
        } else if (newOption === "email") {
          contact.email = newVal;
          console.log("contact edited");
        } else {
          console.log("Invalid edit choice");
        }
      } else {
        console.log("no contact to edit");
      }
    });
  }
  search(searchContact) {
    this.contacts.filter((result) => {
      if (result.name === searchContact) {
        console.log("contact found");
        console.log(
          "Name: " +
            result.name +
            " Email: " +
            result.email +
            " Phone: " +
            result.phone
        );
      } else {
        console.log("contact not found");
      }
    });
  }
  display(allContacts) {
    return this.contacts.map((all) => {
      return all;
    });
  }
}

let contact1 = new Contact("mark", "marksEmail", 12);
let contact2 = new Contact("eric", "marksEmail", 12);
let myAddress = new AddressBook();
myAddress.addContact(contact1);
myAddress.addContact(contact2);
myAddress.search("mark");
// myAddress.remove("eric");
myAddress.edit("eric", "email", "ericsemail");
myAddress.edit("eric", "phone", 789);
console.log(myAddress);
