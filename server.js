express = require("express")
var app = express()
var port = process.env.port || 3000;
app.use(express.static(__dirname + '/'));
app.get('/', (req, res)=>{
    res.render('index.html');
});
app.get('/addTwoNumbers', (req, res) => {
    // 1 gran the values from url
    let value1 = req.query.num1;
    let value2 = req.query.num2;

    // cal
    let result = value1 + value2;

    // 3 return response
    let response = {data:result, statuscode:200, message:'Success'}
    res.json(response);
})
app.listen(port,()=>{
//console.log("App listening to: "+port)
console.log("Server started")
})