import { UserList } from "./views/UserList";
import { Collection } from "./model/Collection";
import { UserProps, User } from "./model/User";

const user = new Collection('http://localhost:3000/user', (json: UserProps) => {
    return User.initialUser(json)
});

user.on('change', () => {
    const root = document.getElementById('root');
    
    if (root) {
        new UserList(root, user).render();
    }
})

user.fetch()