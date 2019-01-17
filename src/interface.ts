export interface MyInterface {
    someMethod() : string
}

export class myClassWithInterface implements MyInterface {
    someMethod(): string {
        throw new Error("Method not implemented.");
    }
}

export abstract class myAbstract {
    abstract someMethod() : string
}

export class myClassWithoutInterface extends myAbstract {
    someMethod(): string {
        throw new Error("Method not implemented.");
    }
}
