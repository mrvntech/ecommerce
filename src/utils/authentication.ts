const authenticationApi = ((): { setupAuthentication: Function, setToken: Function, getToken: Function, resetToken: Function } => {
    let token: string | null
    function setupAuthentication() {
        token = localStorage.getItem("token")
    }

    function setToken(_token: string) {
        token = _token;
        localStorage.setItem("token", _token)
    }

    function getToken() {
        return token;
    }
    function resetToken() {
        token = null
        localStorage.removeItem("token")
    }

    return {
        setupAuthentication,
        setToken,
        getToken,
        resetToken
    }
})()

export default authenticationApi;