import * as express from 'express';
import { handlerToExpress } from './hander-to-express.adapter';
import { lambdas } from './lambdas';

const app = express();

for (const { route, method, handler } of lambdas) {
  app[method](route, handlerToExpress(handler));
}

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
