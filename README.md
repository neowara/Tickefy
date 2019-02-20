# Tickefy
A little app built with Node.js, Vue.js and mongoDB that simulates buying a ticket online

### Mockup:
https://goo.gl/BSskwz

### To-do list:

## MongoDB

- [X] Create a collection that contains all the users (both admins and user created accounts).
- [X] Create a collection that has all the events with the right key and values (artist, location, date, startTime, endTime, amountOfSits, etc.).
- [X] Create a collection that will store the bookings the user makes with the right key and values (buyer(mail, id, name or anything unique to the user) timeOfPurchase, amountOfTickets, etc).
- [X] Create a database that includes all the data needed for the API to send (Users, events, amount of tickets, artists, etc.).

## Node.js (using Express)

- [X] Start building API (using Node.js to handle the data) and create all necessary file structures.
- [X] Make sure it can handle GET requests (get the data for the events, amount of tickets, etc.).
- [X] After an order of tickets has been made the API needs to handle a POST request and POST to the 'Bookings' collection in the databse (booked tickets id, amount of tickets booked, etc.)
- [X] Update the 'Events' collection in our database after a booking has been made so that the amount of tickets available are updated constantly.
    - [X] POST to the 'Events' collection when the admin creates a new event in the admin page


## Vue.js (with Vuex and Vue CLI)

- [X] Create a Welcome page
    - [X] This page will contain a log in and sign up buttons
    - [ ] Log in and sign up can be only done using Facebook or Google
    - [ ] You cannot proceed without an account
- [X] Create an Events page
    - [X] Create a search bar (just html and css)
    - [X] Fill the page with the Events that the API sends (using the data, dynamically fill the Artists name, Events place, Date, etc.).
    - [X] When an event is clicked it will take you to another page 
- [X] Create a Buy page
    - [X] In that page the user can select the amount of tickets
    - [X] The price should go up and down dynamically depending on the amount of tickets chosen.
    - [ ] Buy button at the end of page that will redirect you to the Tickets page
- [ ] Create a Tickets page
    - [ ] Show all tickets purchased in this page, indivually as cards
    - [ ] Every card should contain the information shown in the sketch
    - [ ] Every card will have a unique code at the bottom and optionally a QR code
- [ ] Create a Staff page
    - [ ] Can only be access with the right user and password
    - [ ] Will only show the account info with a unique ID 
- [X] Create an Admin page
    - [X] In this page the Admin can see all the events that exist in the database and see the info related to it
    - [X] The admin can also create new events in this page (with amount of sits, artist name, price, location, etc.).
    - [X] The events created by the admin needs to posted in the database.



### If we have time: 
- [ ] Encrypt the ticket ID / validation code
- [ ] Create group discounts
- [ ] Be able to scan the QR codes for real
- [ ] Admin can adjust the service fares (adjust the price of the ticket depending on a porcentage)
