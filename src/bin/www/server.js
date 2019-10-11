const app = require('../../app');
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

//add additional server side here

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
