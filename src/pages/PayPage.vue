<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAXios from "../plugins/myAXios.ts";
import {Toast} from "vant";

const user = {
  id: 1,
  username: '11245',
  userAccount: '1245',
  avatarUrl: 'https://cn.bing.com/images/search?q=%E7%9A%AE%E5%8D%A1%E4%B8%98%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=FD770467996AA18BC90913125BB5C671BE093854',
  gender: '1000',
  phone: '213213123123',
  email: '8745645',
  planetCode: '12234',
  createTime: new Date(),
}

// const user =ref();
const router = useRouter();


onMounted(async () =>{
  console.log("执行了")
  const res = await myAXios.get('/user/current');
  if (res.code === 200){
    user.value = res.data;
    // Toast.success('获取用户信息成功');
  } else {
    Toast.fail('获取用户信息失败，请重新登录');
    // router.push('/user/login');
  }
})


const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<template>
  <template v-if="user">
    <van-cell-group inset>
      <van-cell title="昵称" is-link to="/user/edit" :value="user.username"
                @click="toEdit('username','昵称',user.username)"/>
      <van-cell title="账户" :value="user.userAccount"/>
      <van-cell title="性别"  :value="user.gender===0?'男':'女'"/>
      <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
      <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
      <van-cell title="既往病历" :value="user.planetCode"/>
    </van-cell-group>

  </template>
</template>

<style scoped>

</style>

