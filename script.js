"use strict";

//class constructor
class Book {
    constructor() {
        //array for the contacts we want to add
        this.contacts = [];
    }

    add () {
        // select the inputs with a type of text and store the nodelist in inputs
        const inputs = document.querySelectorAll("input[type='text']");
        // create an object from the Product class and push it into the products array
        this.contacts.push(new Contact(inputs[0].value, inputs[1].value, inputs[2].value), inputs[3].value);
        // calls the display method
        this.display();
    }

    delete(index) {
        // remove the element with matching index from the products array
        this.products.splice(index, 1);
        // calls the display method
        this.display();
    }

    display() {
        // calls the clear method
        this.clear();
        // this is the counter that is used as the delete button's argument
        let index = 0;
        // loops through the array of contacts
        for (let product of this.products) {
            // creates a paragraph element for the contacts's name, email, phone number, and relationship
            const name = document.createElement("p");
            const email = document.createElement("p");
            const phone = document.createElement("p");
            const relation = document.createElement("p");
            // sets the textContent of each of the newly created elements to be the values of the product's name, price, and qty
            name.textContent = `${product.name}`;
            email.textContent = `${product.email}`;
            phone.textContent = `${product.phone}`;
            relation.textContent = `${product.relation}`;
            // selects the classes for name__column, price__column, and qty__column and appends the paragraphs created on lines 41-43
            document.querySelector(".name_column").appendChild(name);
            document.querySelector(".email_column").appendChild(email);
            document.querySelector(".phone_column").appendChild(phone);
            document.querySelector(".relation_column").appendChild(relation);
            // creates a section element to act as our container for our button
            const deleteBtn = document.createElement("section");
            // sets the innerHTML of the section element to contain a button. the button has an onclick attribute that will call the cart's delete method and pass in index as an argument.
            // the argument index was created on line 37 
            deleteBtn.innerHTML = `<button onclick="cart.delete(${index});" class="list_btn" type="button">X</button>`;
            // appends the deleteBtn to the class of "btn__column"
            document.querySelector(".btn_column").appendChild(deleteBtn);
            // increment index by 1
            index++;
        }
    
    }
    
    clear() {
        // selects the following classes: name__column, price__column, qty__column, btn__column, and total and sets the innerHTML of all of them to empty strings
        document.querySelector(".name_column").innerHTML = "";
        document.querySelector(".email_column").innerHTML = "";
        document.querySelector(".phone_column").innerHTML = "";
        document.querySelector(".relation_column").innerHTML = "";
        document.querySelector(".btn_column").innerHTML = "";
    }
}


class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const contacts = new Book();
console.log(contacts);