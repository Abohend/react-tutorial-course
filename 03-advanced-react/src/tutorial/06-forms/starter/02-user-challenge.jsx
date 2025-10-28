import { useEffect, useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
    const [users, setUsers] = useState(data);
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == "") {
            return;
        }
        // create a new user
        const id = Math.max(...users.map((u) => u.id)) + 1;
        const newUser = {
            id,
            name,
        };
        setUsers([...users, newUser]);
        console.log(users);
    };
    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Add User</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-input"
                        id="name"
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
            <div>
                <h2>Users</h2>
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h4>{user.name}</h4>
                            <button
                                className="btn"
                                onClick={() => removeUser(user.id)}
                            >
                                remove
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default UserChallenge;
