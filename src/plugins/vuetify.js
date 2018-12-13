import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  // dynamic components (i.e. for content-tag attr) have to be imported manually
  components: {
    VLayout
  }
})
