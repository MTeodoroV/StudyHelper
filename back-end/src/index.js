import express from 'express';
import bodyParser from 'body-parser';
import CORS from 'cors';
import Auth from './routes/auth'
import User from './routes/user';
import Matter from './routes/matter';
import Module from './routes/module';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());

app.use('/auth', Auth);
app.use('/user', User);
app.use('/matter', Matter);
app.use('/module', Module);

app.listen(3000)