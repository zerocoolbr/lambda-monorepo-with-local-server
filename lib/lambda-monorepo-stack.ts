import { Stack, StackProps } from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda'
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import { Construct } from 'constructs';

import { lambdas } from '../src/lambdas'

export class LambdaMonorepoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const restApi = new RestApi(this, 'LambdaMonorepoAPI', {});

    for (const { route, method, name, location, handlerFile } of lambdas) {
      const currentLambda = new Function(this, name, {
        handler: handlerFile,
        runtime: Runtime.NODEJS_18_X,
        code: Code.fromAsset(location)
      });

      restApi.root.addResource(route).addMethod(method, new LambdaIntegration(currentLambda))
    }
  }
}
