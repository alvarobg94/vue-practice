<template>
  <div class="home">
    <TopBar></TopBar>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'JobAgent',
  components: {
    TopBar,
  }
}
</script>