import axios from "axios";

const callApi = async (method, path, data, jwt) => {
	const headers = {
		Authorization: jwt,
		"Content-Type": method === "post" && path === "/feeds/" ? "multipart/form-data" : "application/json",
	};
	const baseUrl = "https://photoshoot-backend.herokuapp.com/api/v1";
	const fullUrl = `${baseUrl}${path}`;
	if (method === "get" || method === "delete") {
		return axios[method](fullUrl, { headers });
	} else {
		return axios[method](fullUrl, data, { headers });
	}
};

export default {
	feeds: (page = 1) => callApi("get", `/feeds/?page=${page}`),
	createFeed: form => callApi("post", `/feeds/`, form),
};
