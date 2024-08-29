const http = require("http");
const mongodb =require("mongodb");

let db;
const connectionString = "mongodb+srv://ismoiljonanki:U6OIj8rJDEkFWIRo@cluster0.naq5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) =>{
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 5003;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
    });
    }
}
);

