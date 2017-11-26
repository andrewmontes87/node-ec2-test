# node-ec2-test
Simple test app with AWS EC2 + Node + pm2

The test app implements A* search algorithm for solving the sliding puzzle problem.

### SSH

`$ ssh -i ~/.ssh/node-ec2-test.pem ec2-user@ec2-54-209-121-121.compute-1.amazonaws.com`

### Public endpoint

`http://ec2-54-209-121-121.compute-1.amazonaws.com/api/v1/puzzle`

Example query:

`puzzle?p=4,3,1,5,0,2,7,8,6` 

### Deploy

Push to github master branch

`$ npm run-script deploy`
