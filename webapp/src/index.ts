import { User } from "./model/User";
import { UserForm } from "./views/UserForm";

const user = User.initialUser({ name: 'River', age: 22 })

const userForm = new UserForm(
    document.getElementById("root"),
    user
)

userForm.render()