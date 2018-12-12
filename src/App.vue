<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>NewYorkTimes</span>
        <span class="font-weight-light"> breaking stories</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <ArticleList/>
    </v-content>
  </v-app>
</template>

<script>
import ArticleList from './components/ArticleList'

export default {
  name: 'App',
  components: {
    ArticleList
  },
  data () {
    return {
      //
    }
  }
}
</script>
