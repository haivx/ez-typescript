import { Model } from '../model/model';


export abstract class View<T extends Model<K>, K> {
    regions: {[key: string]: Element} = {};

    constructor(public parent: Element, public model: T) {
        this.bindModel()
    }

    abstract template(): string;

    eventsMap(): { [key: string]: () => void } {
        return { }
    };

    regionMap(): {[key: string]: string}{

    }

    mapRegion(fragment: DocumentFragment): void {
         const regionsMap = this.regionMap()
         for(let key in regionsMap) {
             const selector = regionsMap[key]; 
             const element = fragment.querySelector(selector);
             if (element) {
                 this.regions[key] = element; 
             }
         }
    }

    bindModel() {
        this.model.on('change', () => {
            this.render()
        })
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap()
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }

    // The goal of render method => we take template and somehow append it as a child of the parent element 
    render(): void {
        this.parent.innerHTML = ''
        const templateElement = document.createElement('template')
        console.log('tempate', this.parent)
        templateElement.innerHTML = this.template()

        this.bindEvents(templateElement.content);
        this.mapRegion(templateElement.content); 
        this.parent.append(templateElement.content);
    }
}