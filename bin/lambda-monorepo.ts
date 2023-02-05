#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaMonorepoStack } from '../lib/lambda-monorepo-stack';

const app = new cdk.App();
new LambdaMonorepoStack(app, 'LambdaMonorepoStack');
