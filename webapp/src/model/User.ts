import { Model } from "./model"
import { ApiSync } from "./ApiSync"
import { Eventing } from "./Eventing"
import { Attributes } from "./Attributes"
import { Collection } from "./Collection"
export interface UserProps {
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/user'

export class User extends Model<UserProps> {
    static initialUser(attrs: UserProps) {
        return new User(
            new Attributes<UserProps>(attrs),
            new ApiSync<UserProps>(rootUrl),
            new Eventing(),
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection(
            rootUrl ,
            (json: UserProps) => User.initialUser(json)
        )
    }

    setRandomAge(): void {
        this.set({
            age: Math.round(Math.random() * 100)
        }) 
    }
} 