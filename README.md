# Tickefy
A little app built with Node.js, Vue.js and mongoDB that simulates buying a ticket online

###Mockup:
https://goo.gl/BSskwz

### To-do list:

## MongoDB

- [ ] Create a collection that contains all the users (both admins and user created accounts).
- [ ] Create a collection that has all the events with the right key and values (artist, location, date, startTime, endTime, amountOfSits, etc.).
- [ ] Create a collection that will store the bookings the user makes with the right key and values (buyer(mail, id, name or anything unique to the user) timeOfPurchase, amountOfTickets, etc).

## Node.js (using Express)

- [ ] Create a database that includes all the data needed for the API to send (Users, events, amount of tickets, artists, etc.).
- [ ] Start building API (using Node.js to handle the data).
- [ ] Make sure it can handle GET requests (get the data for the events, amount of tickets, etc.).
- [ ] After an order of tickets has been made the API needs to handle a POST request and update the 'Bookings' collection in the databse (booked tickets id, amount of tickets booked, etc.).
- [ ] Update the 'Events' collection in our database so that the amount of tickets available are updated constantly.
    - [ ] Update the 'Events' collection when the admin creates a new event in the admin page


## Vue.js (with Vuex and Vue CLI)

- [ ] Create a Welcome page
    - [ ] This page will contain a log in and sign up buttons
    - [ ] Log in and sign up can be only done using Facebook or Google
    - [ ] You cannot proceed without an account
- [ ] Create an Events page
    - [ ] Create a search bar (just html and css)
    - [ ] Fill the page with the Events that the API sends (using the data, dynamically fill the Artists name, Events place, Date, etc.).
    - [ ] When an event is clicked it will take you to another page 
- [ ] Create a Buy page
    - [ ] In that page the user can select the amount of tickets
    - [ ] The price should go up and down dynamically depending on the amount of tickets chosen.
    - [ ] Buy button at the end of page that will redirect you to the Tickets page
- [ ] Create a Tickets page
    - [ ] Show all tickets purchased in this page, indivually as cards
    - [ ] Every card should contain the information shown in the sketch
    - [ ] Every card will have a unique code at the bottom and optionally a QR code
- [ ] Create a Staff page
    - [ ] Can only be access with the right user and password
    - [ ] Will only show the account info with a unique ID 
- [ ] Create an Admin page
    - [ ] In this page the Admin can see all the events that exist in the database and see the info related to it
    - [ ] The admin can also create new events in this page (with amount of sits, artist name, price, location, etc.).
    - [ ] The events created by the admin needs to posted in the database.



### If we have time: 
- [ ] Encrypt the ticket ID / validation code
- [ ] Create group discounts
- [ ] Be able to scan the QR codes for real
- [ ] Admin can adjust the service fares (adjust the price of the ticket depending on a porcentage)
