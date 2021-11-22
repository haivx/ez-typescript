

export type Callback = () => void;

export class Eventing {
    event: { [key: string]: Callback[] } = {};


    on = (eventName: string, callback: Callback) => {
        const handler = this.event[eventName] || [];
        handler.push(callback)
        this.event[eventName] = handler;
    }

    trigger = (eventName: string): void => {
        const handlers = this.event[eventName]

        if (!handlers || !handlers.length) return;

        handlers.forEach(callback => {
            callback();
        })
    }
}