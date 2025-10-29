import { useAppContext } from "./Navbar";

const UserContainer = () => {
    const { user, logout } = useAppContext();
    return (
        <>
            {user ? (
                <div className="user-container">
                    <p>Hello There, {user.name}</p>
                    <button className="btn" onClick={logout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>please login</div>
            )}
        </>
    );
};

export default UserContainer;
