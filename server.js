const app = require('express')();
const basicAuth = require('express-basic-auth');
app.set('view engine', 'ejs')
 
app.use(basicAuth({
    users: { admin: 'supersecret123' }, //change later
    challenge: true // shows login 
}));
