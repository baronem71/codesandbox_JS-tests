import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

var id = 1;
caches.open("mysite-article-" + id).then(function(cache) {
  fetch("/get-article-urls?id=" + id)
    .then(function(response) {
      // /get-article-urls returns a JSON-encoded array of
      // resource URLs that a given article depends on
      return response.json();
    })
    .then(function(urls) {
      cache.addAll(urls);
    });
});
// SERVICE WORKER ----------------------------------------------------
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("@/ww/sw.js", { scope: "/sw-test/" })
    .then(function(reg) {
      if (reg.installing) {
        console.log("Service worker installing");
      } else if (reg.waiting) {
        console.log("Service worker installed");
      } else if (reg.active) {
        console.log("Service worker active");
      }
    })
    .catch(function(error) {
      // registration failed
      console.log("Registration failed with " + error);
    });
}
