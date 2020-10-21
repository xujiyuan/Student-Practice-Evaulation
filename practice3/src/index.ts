import express from 'express';
import bodyParser from 'body-parser';

const data = [
  {
    id: 1,
    first_name: 'Dareen',
    last_name: 'Videler',
    email: 'dvideler0@newyorker.com',
    gender: 'Female',
    ip_address: '29.18.136.0',
  },
  {
    id: 2,
    first_name: 'Alessandro',
    last_name: 'Jeskin',
    email: 'ajeskin1@upenn.edu',
    gender: 'Male',
    ip_address: '205.85.14.199',
  },
  {
    id: 3,
    first_name: 'Ann-marie',
    last_name: 'Perris',
    email: 'aperris2@yellowpages.com',
    gender: 'Female',
    ip_address: '120.188.60.205',
  },
  {
    id: 4,
    first_name: 'Hillery',
    last_name: 'Grenville',
    email: 'hgrenville3@blogtalkradio.com',
    gender: 'Male',
    ip_address: '4.132.106.228',
  },
  {
    id: 5,
    first_name: 'Amberly',
    last_name: 'Matthiae',
    email: 'amatthiae4@lulu.com',
    gender: 'Female',
    ip_address: '211.145.91.150',
  },
  {
    id: 6,
    first_name: 'Kaela',
    last_name: 'Tunnah',
    email: 'ktunnah5@oaic.gov.au',
    gender: 'Female',
    ip_address: '90.167.208.12',
  },
  {
    id: 7,
    first_name: 'Harlen',
    last_name: 'Schukraft',
    email: 'hschukraft6@reddit.com',
    gender: 'Male',
    ip_address: '68.66.162.25',
  },
  {
    id: 8,
    first_name: 'Minda',
    last_name: 'Ould',
    email: 'mould7@webs.com',
    gender: 'Female',
    ip_address: '153.247.106.27',
  },
];

const app = express();
const port = 8080; // default port to listen

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.status(200).json(data);
});

/**
 * Should return a list of users with gender female
 */
app.get('/female', (req, res) => {
  res.status(200);
});

/**
 * Should return a single object with given id
 * Should return 404 if not found
 */
app.get('/:id', (req, res) => {
  res.status(200);
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

export default app;
