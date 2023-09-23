function getLoginResponse() {
    let loginResponseData = localStorage.getItem("userdata");
    let response = null;
    if (loginResponseData !== null) {
      response = JSON.parse(loginResponseData);
    }
    // Return the login response data
    return response;
  }
  
  export { getLoginResponse };
  