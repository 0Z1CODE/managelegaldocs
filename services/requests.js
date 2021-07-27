import axios from "./axios"


// const headers = {
//       'User-Hash': 'some user dfkdsfksdlfksdfksd;',
//   };

const LoginUser = loginData => {
    return axios.post("api/signin", loginData ).then(({data}) => (data));
    // return axios.post("api/signin", loginData, {"headers" : headers}  ).then(({data}) => (data));
}

const RegisterGlobal = registerData => {
    return axios.post("api/signup",registerData).then(({data}) => (data));
}




export default { LoginUser,RegisterGlobal };