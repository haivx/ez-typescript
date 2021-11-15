interface UserProps {
    name: string;
    age: number
}

type Callback = () => void;
 
export class User {
    event: { [key: string]: Callback[] } = {};
 
    constructor(private data: UserProps ) {}
    get(propName: string): (number | string ) {
        return this.data[propName] 
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback) {
        const handler = this.event[eventName] || [];
        handler.push(callback)
        this.event[eventName] = handler;
    }
}