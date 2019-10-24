const dotenv = require('dotenv');

const http = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});