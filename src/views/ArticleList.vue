<!-- List (grid) of articles from a given section. -->
<!-- The order is just as the API sends them since it looks like -->
<!-- they are already sorted "most important first" -->
<template>
  <v-flex xs12 mt-4>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <v-alert v-else-if="loadingError" :value="true" type="error">Sorry, something went wrong. Try refreshing the page.</v-alert>
    <v-container v-else-if="!isLoading && articles" fluid grid-list-md>
      <v-data-iterator
        :items="articles"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row
        wrap
      >
        <v-flex slot="item" slot-scope="props" xs12 sm12 md6 lg4 >
          <Article :article="props.item"></Article>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </v-flex>
</template>

<script>
  import axios from 'axios';
  import Article from '../components/Article';
  import LoadingSpinner from '../components/LoadingSpinner';

  // fetches stories from a section specified by the section prop
  function fetchStories() {
    const apiKey = process.env.VUE_APP_API_KEY;
    const section = this.section;
    let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api_key=${apiKey}`;
    axios.get(url)
      .then(res => {
        //console.log(res.data.num_results + ' results:\n' + res.data.results);
        this.articles = res.data.results;
        this.isLoading = false;
      })
      .catch(err => {
        //console.log(err);
        this.loadingError = err.message;
        this.isLoading = false;
      });
  }

  export default {
    data () {
      return {
        articles: null,
        isLoading: true,
        loadingError: null,
        rowsPerPageItems: [9, 15, 24],
        pagination: {
          rowsPerPage: 9
        },
      };
    },
    components: {
      Article,
      LoadingSpinner
    },
    props: ['section'],
    mounted () {
      fetchStories.call(this);
    },
    watch: {
      // if section prop changes, need to fetch a different section of stories
      section: function() {
        fetchStories.call(this);
      }
    }
  }
</script>

<style>

</style>
