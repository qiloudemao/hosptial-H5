<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAXios from "../plugins/myAXios.ts";
import qs from "qs";
import {Toast} from "vant";

const route = useRoute();
const {sectionList} = route.query;

const dockerL = ref([{
  id: 931,
  username: '沙鱼',
  userAccount: 'wt',
  profile: '一条咸鱼',
  gender: 0,
  phone: '123456789101',
  email: 'shayu-yusha@qq.com',
  planetCode: '931',
  avatarUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/shayu931/shayu.png',
  tags: ['java', 'emo', '打工中', 'emo', '打工中'],
  createTime: new Date(),
}])

// const doctorList = ref([]);

// onMounted(async () => {
//   const userListData = await myAXios.get('/user/search/tags', {
//     // withCredentials:true,
//     params: {
//       tagNameList: tags
//     },
//     // 序列化
//     paramsSerializer: {
//       serialize: params => qs.stringify(params, {indices: false}),
//     }
//   })

//       .then((response) => {
//         console.log(response);
//         Toast.success('请求成功');
//         return response?.data;
//       })
//       .catch((error) => {
//         console.log(error);
//         Toast.fail('请求失败');
//       })
//   if (userListData) {
//     userListData.forEach(user => {
//       if (user.tags) {
//         user.tags = JSON.parse(user.tags);
//       }
//     })
//     userList.value = userListData;
//   }
// })

//

// console.info(sectionList[1]);

</script>

<template>
  <van-card
      v-for="docker in dockerL"
      :desc="docker.profile"
      :title="`${docker.username}（${docker.planetCode}）`"
      :thumb="docker.avatarUrl"
  >
    <template #footer>
      <van-button size="mini">挂号</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>