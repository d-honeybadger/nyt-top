import Vue from 'vue';
import Router from 'vue-router';
import ArticleList from './views/ArticleList.vue';
import config from './config';

Vue.use(Router);

// setup routes that corresponds to the news sections
const sectionNames = config.sectionNames;

const routes = sectionNames.map(name => {
  let section = name.replace(/\s/g, '').toLowerCase();
  return {
    path: `/${section}`,
    name,
    component: ArticleList,
    props: { section }
  };
}).concat({ // add the default route: '/' corresponds to the home section
  path: '/',
  name: 'default',
  component: ArticleList,
  props: { section: 'home' }
}).concat({ // any unrecognized route will be redirected to home section
  path: '*', redirect: '/'
});

export default new Router({
  routes,
  mode: 'history' // no # to separate client routing
});
