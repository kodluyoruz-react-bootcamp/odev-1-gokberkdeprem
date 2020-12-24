import axios from "axios"; //imports axios(necessity of axios)

//get an id nuber to direct the endpoints
//aysnc because data fetched from APIs
async function getData(id) {
  try {
    // axios gets data from ENDPOINTS
    const { data: users } = await axios.get(
      //used template literals to change id number of users of the API
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    //axios gets data from ENDPOINTS
    const { data: posts } = await axios.get(
      //used template literals to change id number of users of the API
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const info = { ...users, posts: [...posts] }; //Storing fetched data in an object
    return info; //returns to the container of users and posts
  } catch (err) {
    //if there is error,it logs
    console.log(err);
  }
}

export { getData }; //exports getData function to use in ./src/app.js
