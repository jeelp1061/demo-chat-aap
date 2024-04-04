import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";


// const firebase = require("firebase");
// import firebase from "firebase";
// // Required for side-effects
// require("firebase/firestore");
const firebaseConfig = {
  // config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
