<template>
  <el-container>

    <el-header>
      <the-header/>
    </el-header>


    <el-main>

      <router-view/>

    </el-main>


    <el-footer>
      <the-footer/>
    </el-footer>

  </el-container>
</template>

<script setup>
import TheHeader from "../components/the-header.vue";
import TheFooter from "../components/the-footer.vue";
</script>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="less">

</style>