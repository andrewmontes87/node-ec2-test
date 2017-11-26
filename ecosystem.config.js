module.exports = {
  apps: [{
    name: 'node-ec2-test',
    script: 'node index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-54-209-121-121.compute-1.amazonaws.com',
      key: '~/.ssh/node-ec2-test.pem',
      ref: 'origin/master',
      repo: 'https://github.com/andrewmontes87/node-ec2-test.git',
      path: '/home/ec2-user/node-ec2-test',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
