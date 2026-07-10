# Lab 2 - Mobile Programming

Lab 2 coursework for CSW430. Per the instructor's direction, Question 1 is excluded from this submission.

## Contents

1. [Question 2 - Node.js API](#question-2---nodejs-api)
2. [Question 3 - Login screen](#question-3---login-screen)
3. [Question 4 - Income tax calculator](#question-4---income-tax-calculator)
4. [Question 5 - Calculator screen](#question-5---calculator-screen)

## Project structure

```text
Lab2/
├── Q2/              # Node.js and MySQL CRUD API
├── Q2Login/         # React Native login screen
├── Q3IncomeTax/     # React Native income-tax calculator
├── Q3Calculator/    # React Native calculator
├── Lab 2.pdf        # Assignment instructions
└── Lab2.docx        # Submission report (added after captures are complete)
```

## Question 2 - Node.js API

`Q2` is an Express and MySQL API for managing users. It supports create, read, update, and delete operations through `/api/users`.

### Database setup

Create the required MySQL database and table using:

```bash
mysql -u root -p < database.sql
```

The server uses these environment variables when supplied: `PORT`, `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME`. The included defaults target a local `nodejs_demo` database.

In PowerShell, set your local database password before starting the server:

```powershell
$env:DB_PASSWORD='your_mysql_password'
```

### Run the API

```bash
cd Q2
npm install
npm start
```

The API runs at `http://localhost:3000`.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/users` | Create a user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get one user |
| PUT | `/api/users/:id` | Update one user |
| DELETE | `/api/users/:id` | Delete one user |

## Question 3 - Login screen

`Q2Login` is a React Native login interface with phone and password inputs and a Login button. It includes the required `@react-navigation/native` package.

```bash
cd Q2Login
npm install
npm run android
```

## Question 4 - Income tax calculator

`Q3IncomeTax` calculates personal income tax using the required brackets:

- 10% for income up to 10,000,000
- 20% for the amount from 10,000,001 to 50,000,000
- 30% for the amount above 50,000,000

```bash
cd Q3IncomeTax
npm install
npm run android
```

## Question 5 - Calculator screen

`Q3Calculator` provides number entry, addition, subtraction, multiplication, division, equals, and clear actions. The directory uses the correctly spelled `Q3Calculator` name even though the assignment PDF spells it `Q3Caculator`.

```bash
cd Q3Calculator
npm install
npm run android
```

## Report

`Lab2.docx` will contain the Question 2-5 requirements followed immediately by centered 5-inch-wide evidence captures. Question 1 is not included.
