<template>
	<div class="wrap">
		<h2>게시판 리스트</h2>
		<a href="javascript:;" @click="getList">불러오기</a>
		<ul>
			<li v-for="(data, index) in datas" :key="index">{{ data.results }}<br /></li>
		</ul>
		<!--<table>
			<thead>
				<tr v-for="(data, index) in datas" :key="index">
					<th>작성자 </th>
					<th>내용</th>
					<th>좋아요</th>
					<th>사진</th>
					<th>작성일자</th>
				</tr>
			</thead>
			<tbody>
				<td>{{ data.id }}</td>
				<td>{{ data.caption }}</td>
				<td>{{ data.likes }}</td>
				<td>{{ data.photos }}</td>
				<td>{{ data.created }}</td>
			</tbody>
		</table>-->
		<!--<ul>
			<li class="list" v-for="(GuestBook, index) in GuestBooks" :key="index"></li>
			<p>작성자: 익명</p>
			<p>내용: {{ GuestBook.caption }}}</p>
		</ul>-->
	</div>
</template>

<script>
	export default {
		name: "ReadGuestBook",
		data: function () {
			return {
				datas: [],
			};
		},
		/*created: function () {
			// using JSONPlaceholder
			this.$axios.get("http://photoshoot-backend.herokuapp.com/api/v1/feeds/").then(result => {
				console.log(result);
				this.datas = result;
			});
		},*/
		methods: {
			getList() {
				this.$axios
					.get("http://photoshoot-backend.herokuapp.com/api/v1/feeds/")
					.then(res => {
						console.log(res);
						this.datas = res;
					})
					.then(err => {
						console.log(err);
					});
			},
		},
	};
</script>
<style scoped>
	.wrap {
		height: 1700px;
		background-color: #ededed;
	}
</style>
