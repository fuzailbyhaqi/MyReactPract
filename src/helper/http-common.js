import axios from "axios";

export default axios.create({
  baseURL: "https://api.pkubite.com/",
  headers: {
    "Content-type": "application/json",
  },
});
