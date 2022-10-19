<template>
    <ul>
      <li v-for="p in permissions_list">
        {{ p.name }}
      </li>
    </ul>

</template>

<script>
import {httpGET} from "@/utils/utils";

export default {
  name: "PermissionsView.vue",
  data() {
    return {
      permissions_list: [],
    }
  },
  created() {
    httpGET('api/v1/permissions/index')
        .then(({data}) => {
          this.permissions_list = data.data
          console.log(data.data)
        }).catch(({response:{data}})=>{
          console.log(data)
    })
  }
}
</script>

<style scoped>

</style>