export function getToken() {
    if (typeof window !== "undefined") {
      const token = JSON.parse(localStorage.getItem("token")) || "";
      return token;
    }
  }
  
  export function getTokenType() {
    if (typeof window !== "undefined") {
      const tokenType = JSON.parse(localStorage.getItem("token_type")) || "";
      return tokenType;
    }
  }
  
  export function getID() {
    if (typeof window !== "undefined") {
      const id = JSON.parse(localStorage.getItem("id")) || "";
      return id;
    }
  }
  