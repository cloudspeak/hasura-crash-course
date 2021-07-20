import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const style = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "8px"
}

export const Token = () => {
    const { getAccessTokenSilently, isAuthenticated, isLoading, user } = useAuth0();
    const [ token, setToken ] = useState();

    if (isAuthenticated && !token) {
        getAccessTokenSilently().then(t => setToken(t))
    }

    if (isLoading) {
        return <div style={style}>Loading ...</div>;
    }
    else if (isAuthenticated) {
        if (!token) {
            return <div style={style}>Loading ...</div>;
        }
        else {
            const spanStyle = {
                width: "170px",
                display: "inline-block"
            }

            const textStyle = {
                width: "500px",
                height: "16px"
            }
            return (
                <div style={style}>
                    <p>
                        <span style={spanStyle}>Your user ID: </span>
                        <textarea style={textStyle}>{user.sub}</textarea>
                    </p>
                    <p>
                        <span style={spanStyle}>Your access token is: </span>
                        <textarea style={textStyle}>{token}</textarea>
                    </p>
                </div>
            )
        }
    }

    return null;
};