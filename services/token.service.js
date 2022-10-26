import 'localstorage-polyfill'; 
class TokenService {
    getRefreshToken() {
        const token = localStorage.getItem("refresh_token");
        return token;
    }

    getAccessToken() {
        const token = localStorage.getItem("access_token");
        return token;
    }

    setRefreshToken(token) {
        localStorage.setItem("refresh_token", token);
    }

    setAccessToken(token) {
        localStorage.setItem("access_token", token);
    }

    remove() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
}

export default new TokenService();