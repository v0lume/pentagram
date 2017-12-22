import * as express from 'express';
import { Express } from 'express';
import { createServer, Server } from 'http';
import * as cors from 'cors';
import * as subdomain from 'express-subdomain';
import * as bodyParser from 'body-parser';

import { passport } from './passport';
import { routes } from './routes';

process.env.NODE_ENV = 'production';

const app: Express = express();
const server: Server = createServer(app);
const port: number = +process.env.PORT || 3000;

//app.use(cors);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes.base);
app.use(subdomain('api', routes.api));

server.listen(port, '127.0.0.1', () => console.log('server started'));
//server.on('request', (req, res) => console.log(req.subdomains));
server.on('error', error => console.error(error));