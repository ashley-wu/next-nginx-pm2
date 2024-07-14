module.exports = {
  apps : [{
    script: 'npm start',
    watch: '.'
  }],

  deploy : {
    production : {
      key: 'next-nginx-pm2-key.pem',
      user : 'ubuntu',
      host : '54.238.125.170',
      ref  : 'origin/main',
      repo : 'git@github.com:ashley-wu/next-nginx-pm2.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
