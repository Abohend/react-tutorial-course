import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <>
            <h2>fetch data example</h2>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <img src={user.avatar_url} alt={user.login} />
                        <h3>{user.login}</h3>
                        <h4>
                            <a href={user.url}>Profile</a>
                        </h4>
                    </div>
                );
            })}
        </>
    );
};
export default FetchData;
