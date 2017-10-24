<template>
  <div class="test">
    <input type="text" v-model="title"><br>
    <span v-html="title"></span>
    <p><h1>{{title}}</h1></p>
    <p><h2>{{title}}</h2></p>
    <p><h3>{{title}}</h3></p>
    <p><h4>{{title}}</h4></p>
    <p><h5>{{title}}</h5></p>
    <p>{{ user.firstName }}</p>
    <h1>{{FullName}}</h1>
    <button v-on:click="greet">Say Greating</button><br><br>
    <button v-on:click="sayHello('Hello, Sergey, nice to meet you!')">Greating to Sergey</button>
    <input type="text" v-on:keyup="pressKey"><br><br>
    <input type="text" v-on:keyup="pressTargetKey" v-on:keyup.enter="enterHit"><br><br>
    <p v-if="showName">It's working!!!</p>
    <p v-else="showName">NO, it doesn't</p>
    <ul>
      <li v-for="item in items">{{item.msg}}</li>
    </ul>
    <hr />
    <label>First Name</label><input type="text" v-model="user.firstName">
    <label>Last Name</label><input type="text" v-model="user.lastName">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data(){
    return{
      title: 'Hello',
      user:{
        firstName: 'Sergey',
        lastName: 'Safronov'
      },
      showName: true,
      items: [
        {msg:'1'},
        {msg:'2'},
        {msg:'3'},
        {msg:'4'}
      ]
    }
  },
  methods: {
    greet: function() {
      alert('Hi, Sergey!');
    },
    sayHello: function(hello) {
      alert(hello);
    },
    pressKey: function() {
      console.log('pressed');
    },
    pressTargetKey: function(e) {
      console.log(e.target.value);
    },
    enterHit: function() {
      console.log('You hit enter');
    }
  },
  computed: {
    FullName: function() {
      return this.user.firstName + " " + this.user.lastName
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
