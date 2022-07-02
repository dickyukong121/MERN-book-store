# Book Store App by MERN
Select a book from booklist, complete payment via stripe.

## Installation
Clone this repository:
```bash
git clone git@github.com:dickyukong121/lifehikes-codetest.git
```

Install npm packages:
```bash
cd client
npm install

cd server
npm install
```

Prepare .env:
```bash
cd server
touch .env
```
Edit .env
```bash
vim .env
```
```bash
DB_URI=connection string of database in your mongodb 
STRIPE_SK_KEY=your stripe private key
PORT=the port you want your web server listen on
```

Start working:
```bash
cd client
npm start
```
```bash
cd server
npm start
```