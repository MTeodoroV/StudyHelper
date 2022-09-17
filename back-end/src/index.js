import express from 'express';
import bodyParser from 'body-parser';
import CORS from 'cors';
import Auth from './routes/auth'
import User from './routes/user';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());

app.use('/auth', Auth);
app.use('/user', User);

app.listen(3000)