import express from 'express';
import bodyParser from 'body-parser';
import CORS from 'cors';
import Auth from './routes/auth'
import User from './routes/user';
import Matter from './routes/matter';
import Module from './routes/module';
import Exercise from './routes/exercise';
import Answer from './routes/answer';
import Tip from './routes/tip';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());

app.use('/auth', Auth);
app.use('/user', User);
app.use('/matter', Matter);
app.use('/module', Module);
app.use('/exercise', Exercise);
app.use('/answer', Answer);
app.use('/tip', Tip);

app.listen(3000)