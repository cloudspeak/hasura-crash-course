import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const style = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "8px"
}

export const AuthStatus = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div style={style}>Loading ...</div>;
    }

    if (isAuthenticated) {
        return (
            <div style={style}>
                <span>Welcome, {user.email}. </span><LogoutButton />
            </div>
        )
    }
    else {
        return (
            <div style={style}>
                <span>You are not logged in. </span><LoginButton />
            </div>
        )
    }
};

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
    );
};
