import { handler as handler1 } from './lambda-1/index.handler';
import { handler as handler2 }from './lambda-2/index.handler';
import { handler as handler3 } from './lambda-3/index.handler';

interface Lambda {
route: string;
method: 'get' | 'post' | 'put' | 'delete';
name: string;
location: string;
handlerFile: string;
handler: any;
}

export const lambdas: Lambda[] = [
  {
    route: 'hello-lambda-1',
    method: 'get',
    name: 'HelloLambda1',
    location: 'src/lambda-1',
    handlerFile: 'index.handler',
    handler: handler1,
  },
  {
    route: 'hello-lambda-2',
    method: 'post',
    name: 'HelloLambda2',
    location: 'src/lambda-2',
    handlerFile: 'index.handler',
    handler: handler2,
  },
  {
    route: 'hello-lambda-3',
    method: 'delete',
    name: 'HelloLambda3',
    location: 'src/lambda-3',
    handlerFile: 'index.handler',
    handler: handler3,
  }
];
