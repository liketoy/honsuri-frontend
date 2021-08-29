import axios from "axios";

const callApi = async (method, path, data, jwt) => {
	const headers = {
		Authorization: jwt ? `jwt ${jwt}` : null,
		"Content-Type": method === "post" && path === "/feeds/" ? "multipart/form-data" : "application/json",
	};
	const baseUrl =
		process.env.NODE_ENV === "production"
			? "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000"
			: "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000";
	const fullUrl = `${baseUrl}${path}`;
	if (method === "get") {
		return axios[method](fullUrl, { headers });
	} else {
		return axios[method](fullUrl, data, { headers });
	}
};

export default {
	feeds: () => callApi("get", "/post"),
	createFeed: (form, token) => callApi("post", "/post", form, token),
	login: form => callApi("post", "/account/login", form),
	createAccount: form => callApi("post", "/account/register", form),
	userInfo: token => callApi("get", "/mypage", null, token),
	userUpdate: (form, token) => callApi("patch", "/mypage", form, token),
	userDelete: (form, token) => callApi("delete", "/mypage", form, token),
	userPost: token => callApi("get", "/mypage/my-post", null, token),
	userFav: token => callApi("get", "/mypage/my-favorite", null, token),
	userPassword: (form, token) => callApi("patch", "/mypage/password", form, token),
	userFindId: form => callApi("post", "/account/email-find", form),
};
