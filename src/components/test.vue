<template>
  <div class="test">
    <span v-html="title"></span>
    <table>
      <tr>
        <td>{{ user.firstName }}</td>
        <td v-text="user.lastName"></td>
      </tr>
    </table>
    <p v-if="showName">It's working!!!</p>
    <p v-else="showName">NO, it doesn't</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data(){
    return{
      title: '<h1>Hello<h1>',
      user:{
        firstName: 'Sergey',
        lastName: 'Safronov'
      },
      showName: false
   }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
