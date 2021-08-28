import axios from "axios";

const callApi = async (method, path, type, data, jwt) => {
	const headers = {
		Authorization: jwt, //추후 로그인시에만 피드 작성을 위함
		"Content-Type": type, //이 부분이 뭐였지??
	};
	const baseUrl = "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000";
	const fullUrl = `${baseUrl}${path}`;
	if (method === "get" || method === "delete") {
		return axios[method](fullUrl, { headers });
	} else {
		return axios[method](fullUrl, data, { headers });
	}
};

export default {
	feeds: () => callApi("get", `/post`, "application/json"),
	createFeed: form => callApi("post", `/post`, "multipart/form-data", form),
};
