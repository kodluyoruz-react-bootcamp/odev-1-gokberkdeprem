import axios from "axios";

async function getData(id) {
  try {
    const { data: users } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const info = { ...users, posts: [...posts] };
    return info;
  } catch (err) {
    console.log(err);
  }
}

export { getData };
