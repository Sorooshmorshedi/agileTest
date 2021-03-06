import axios from "axios";

const client = axios.create({
  baseURL: "https://outside-in-dev-api.herokuapp.com/we8fhxKBwuV2UkOZJj3LqLbSYVQZHMPp"
});

const api = {
  loadRestaurants() {
    return client.get("/restaurants").then(response => response.data);
  }
};

export default api;

