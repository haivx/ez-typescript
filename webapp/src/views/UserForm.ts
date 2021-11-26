export class UserForm {
 
     constructor(public parent: Element) {}

     template(): string {
         return `<div>
                <h1>User form</h1>
                <input />
            </div>`
     }

     render(): void  {
          const templateElement = document.createElement('template')
          console.log('tempate', this.parent)
          templateElement.innerHTML = this.template()

          this.parent.append(templateElement.content)
     }
} 

// The goal of render method => we take template and somehow append it as a child of the parent element