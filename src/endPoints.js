

const REACT_APP_BASE_URL = "http://localhost:5000";
const endPoints = {
    auth:REACT_APP_BASE_URL+"/api/auth/isauthorized",
    createUser:REACT_APP_BASE_URL + "/api/auth/createuser",
    login:REACT_APP_BASE_URL+"/api/auth/login",
    createPost:REACT_APP_BASE_URL +"/api/post/createpost",
    getPosts:REACT_APP_BASE_URL+"/api/post/getposts",
    runcode:REACT_APP_BASE_URL+"/api/runtimeenv/runall",
    jobStatus:REACT_APP_BASE_URL+"/api/runtimeenv/status",
    logOut:REACT_APP_BASE_URL +"/api/auth/logout",
    getPost:REACT_APP_BASE_URL+"/api/post/getpost",
    postComment:REACT_APP_BASE_URL+"/api/post/createcomment",
    createProblem:REACT_APP_BASE_URL+"/api/problems/createproblem",

}

module.exports = endPoints;