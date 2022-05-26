<template>
  <div id="app">
      <top-bar/>
      <div class="d-flex">
        <menu-lateral/>
        <router-view />
      </div>
      
  </div>
</template>

<script>
import TopBar from './components/Barra.vue'
import MenuLateral from './components/Menu.vue'

export default {
  components: {
    TopBar,
    MenuLateral,
    
  },
  data(){
    return {
                isLoading: false,
                isFullPage: true
            }
  }
  
}
</script>

<style>
#app{
  background-color: #FBF3F3;
}
.d-flex{
display: flex;
}
</style>