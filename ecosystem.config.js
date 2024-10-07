module.exports = {
    apps: [
      {
        name: 'app',
        script: './app.js',
        env: {
          NODE_ENV: 'development',
          PORT: 3002
        },
        env_production: {
          NODE_ENV: 'production',
          PORT: 3002
        }
      }
    ]
  };