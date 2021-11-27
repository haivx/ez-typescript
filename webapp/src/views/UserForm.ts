import { User } from '../model/User'
export class UserForm {

    constructor(public parent: Element, public model: User) {
        this.model.on('change', () => {
            this.render()
        })
    }



    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input')
        const value = input.value;

        this.model.set({
            name: value
        })
    }

    // DocumentFragment is essentially a reference to the all HTML(tempalate  element.content) that we're trying to insert to the DOM.  
    bindEvents(fragment: DocumentFragment): void {
        const eventMaps = this.eventsMap();
        // Iterate over that array
        for (let eventKey in eventMaps) {
            const [eventName, selector] = eventKey.split(':');

            // get array of elements that map current selector
            const listElements = fragment.querySelectorAll(selector)

            // iterate over listElements, detach event into
            listElements.forEach((element) => {
                element.addEventListener(eventName, eventMaps[eventKey])
            })
        }
    }



    template(): string {
        return `<div>
                <h1>User form</h1>
                <input />
                <div>Welcome home: ${this.model.get('name')}</div>
                <div>Age: ${this.model.get('age')}</div>
                <button class="set-name">Save name</button>
                <button class="set-age">Set Random Age</button>
            </div>`
    }

    render(): void {
        this.parent.innerHTML = ''
        const templateElement = document.createElement('template')
        console.log('tempate', this.parent)
        templateElement.innerHTML = this.template()

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}

// The goal of render method => we take template and somehow append it as a child of the parent element 