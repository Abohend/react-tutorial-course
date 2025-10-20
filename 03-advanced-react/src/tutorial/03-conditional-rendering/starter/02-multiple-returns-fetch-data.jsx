import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    setIsError(true);
                    setIsLoading(false);
                }
                return res.json();
            })
            .then((data) => {
                setUser(data);
                setIsLoading(false);
                return data;
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <h2>is loading ....</h2>;
    }

    if (isError) {
        return <h2>Error fetching the user data</h2>;
    }

    let { avatar_url, login, html_url } = user;
    return (
        <>
            <h2>Fetch Data </h2>
            <img src={avatar_url}></img>
            <h2>{login}</h2>
            <h3>
                <a href={html_url}>Profile</a>
            </h3>
        </>
    );
};
export default MultipleReturnsFetchData;
