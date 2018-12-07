//Use a js config to take advantage of environment varibales in the
//AWS ElasticBeasnstalk production environment

module.exports = {
  db: {
    connector: 'mysql',
    hostname: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
  }
};
