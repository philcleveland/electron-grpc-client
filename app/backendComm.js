const grpc = require('grpc');

class BackendCommunication {
    constructor() {
        
    };

    sayHello() {
        console.log("Hello 2+2 is 4!");

        const demoProto = grpc.load('./protos/demo.proto').demo;
        var client = new demoProto.Greeter('localhost:50051', grpc.credentials.createInsecure());
        client.sayHello({
            name: "Philly"
        });
    }
}

export default BackendCommunication;