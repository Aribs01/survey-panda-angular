const express = require('express');
const app = express();
// app.use(requireHTTPS);
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist/survey-app-angular')));
// app.use(express.static('./dist/survey-app-angular'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/survey-app-angular/index.html'));
});
app.listen(process.env.PORT || 8080, function(){
    console.log("STARTED");
});