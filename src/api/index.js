import axios from "axios";

const callApi = async (method, path, data, jwt) => {
	const headers = {
		Authorization: jwt ? `jwt ${jwt}` : null,
		"Content-Type": method === "post" && path === "/feeds/" ? "multipart/form-data" : "application/json",
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
	feeds: () => callApi("get", "/post"),
	createFeed: (form, token) => callApi("post", "/post", form, token),
	createLike: (id, token) => callApi("post", "/post/like/post/" + id, null, token),
	comments: id => callApi("get", "/post/comment/" + id, null),
	createComments: (form, id, token) => callApi("post", "/post/comment/" + id, form, token),
	login: form => callApi("post", "/account/login", form),
	createAccount: form => callApi("post", "/account/register", form),
	userInfo: token => callApi("get", "/mypage", null, token),
	userUpdate: (form, token) => callApi("patch", "/mypage", form, token),
	userDelete: token => callApi("delete", "/mypage", null, token),
};
