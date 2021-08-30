import axios from "axios";

const callApi = async (method, path, data, jwt) => {
	const headers = {
		Authorization: jwt ? `jwt ${jwt}` : null,
		"Content-Type": method === "post" && path === "/feeds/" ? "multipart/form-data" : "application/json",
	};
	const baseUrl = "https://honsuri-backend.herokuapp.com";
	const fullUrl = `${baseUrl}${path}`;
	if (method === "get") {
		return axios[method](fullUrl, { headers });
	} else {
		return axios[method](fullUrl, data, { headers });
	}
};

export default {
	musics: () => callApi("get", `/music`),
	recipe: (id = null, token) => callApi("get", `/recipes/${id}`, null, token),
	recipes: token => callApi("get", `/recipes`, null, token),
	bookmark: (id, token) => callApi("post", `/recipes/${id}/bookmark`, null, token),
	feeds: token => callApi("get", "/post", null, token),
	createFeed: (form, token) => callApi("post", "/post", form, token),
	createLike: (id, token) => callApi("post", "/post/like/" + id, null, token),
	comments: id => callApi("get", "/post" + id + "/comment", null),
	createComments: (form, token, id) => callApi("post", "/post/" + id + "/comment", form, token),
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
