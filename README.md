# Lambda monorepo with local server

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`LambdaMonorepoStack`)
which contains three lambdas functions with an API Gateway

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands
* `npm run dev`     create a webserver in http://localhost:3000
* `npm run build`   compile typescript to js
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
