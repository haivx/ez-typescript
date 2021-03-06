import { View } from './View'
import { User, UserProps } from '../model/User'

export class UserShow extends View<User, UserProps>{


    template(): string {
        return `
            <div>
              <h1>User Show:</h1>
              <div>Name: ${this.model.get('name')}</div>
              <div>Age : ${this.model.get('age')}</div>
            </div>
        `
    }
}