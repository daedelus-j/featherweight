
var config = {
  development: {
    port: 3000
  },
  staging: {
    port: 3000
  },
  production: {
    port: 3000
  }
};

var envs = Object.keys(config);
var env = process.env.NODE_ENV || 'development';
var containsEnv = (envs.indexOf(env) !== -1);
module.exports = (containsEnv) ? config[env] : config['development'];
