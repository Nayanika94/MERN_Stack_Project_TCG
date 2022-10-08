# Directions

**Backend**: Using Node and Express, you will create a single **REST** endpoint to retrieve a list of Magic cards from the Scryfall API based on a provided search string from the client.

**Frontend**: Using React, you will use the included _create-react-app_ skeleton (located at `/client`) to build:

1. A search bar for the user to input a card name to search. Using the input string, make a call to your Node endpoint to lookup cards. The search should work <ins>without</ins> the user needing to click a button. And it should be impossible for a user to submit more than 1 API request per second using this search bar.

2. Display the card results to the user in the most user friendly way you can come up with. Feel free to be creative. All cards must display the following: The card's image(s), name, set name, number, and rarity.

- Document design decisions in `DESIGN_EXPLANATION.md`

# Getting started

With the latest Node LTS installed, run the following commands:

```bash
npm install
cd ./client
npm install
```

To start the Node/React servers, from the project root just run:

```bash
npm start
```

You should now have:

- A Node server running on port **3001**,
- A create-react-app server running on port **3000**

## What will you find inside this boilerplate

In this boilerplate, you will find:

- The main entry file: `index.js`
- A `DESIGN_EXPLANATION.md` file to document your comments and design decisions
- A `client` directory containing a clean bootstrapped copy of **create-react-app**
- Inside the Node `package.json`, we added the following packages:
  - `express`
  - `concurrently` to allow us to run 2 npm scripts at the same time from **npm start**
  - `nodemon` to auto-restart the Node server every time a change is made

# Scryfall API

### GET /cards/search

https://scryfall.com/docs/api/cards/search

Returns a List object containing Cards found using a fulltext search string.
