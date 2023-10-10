/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import http from 'http';
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index.js'; // include the extension
import usersRouter from './routes/users.js'; // include the extension

const app = express();

const port = 3000;
const server = http.createServer(app);
server.listen(port);

// view engine setup
// replace __dirname with process.cwd()
app.set('views', path.join(process.cwd(), 'modules/express-impexp/', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'modules/express-impexp/', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
