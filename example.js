var db = require('riak-js').getClient();

db
  .add('users')
  .map('query', ':root where .email:val("justin@gmail.com"), .login:expr(x=0)')
  .run()