import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

import BackendCommunication from "../backendComm";

// declare var BackendCommunication:any;
// var comm = BackendCommunication.BackendCommunication();

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <button onClick={this.doIt}>
        Do it
        </button>;
        // return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }

    doIt() {
        var c = new BackendCommunication();
        c.sayHello();
    }
}

