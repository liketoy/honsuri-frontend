import axios from "axios";

const callApi = async (method, path, type, data, jwt) => {
	const headers = {
		Authorization: jwt,
		"Content-Type": type,
	};
	const baseUrl = "http://photoshoot-backend.herokuapp.com/api/v1";
	const fullUrl = `${baseUrl}${path}`;
	if (method === "get" || method === "delete") {
		return axios[method](fullUrl, { headers });
	} else {
		return axios[method](fullUrl, data, { headers });
	}
};

export default {
	feeds: (page = 1) => callApi("get", `/feeds/?page=${page}`, "application/json"),
	createFeed: form => callApi("post", `/feeds/`, "multipart/form-data", form),
};
