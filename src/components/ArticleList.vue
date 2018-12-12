<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">Breaking articles</h2>
        <LoadingSpinner v-if="isLoading"></LoadingSpinner>
        <v-alert v-if="loadingError" :value="true" type="error">Sorry, something went wrong. Try refreshing the page.</v-alert>
        <v-container v-if="!isLoading && articles" fluid grid-list-md>
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
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import Article from './Article';
  import LoadingSpinner from './LoadingSpinner';

  export default {
    data () {
      return {
        articles: null,
        isLoading: true,
        loadingError: null,
        rowsPerPageItems: [6, 9, 12],
        pagination: {
          rowsPerPage: 6
        },
      };
    },
    components: {
      Article,
      LoadingSpinner
    },
    mounted () {
      let apiKey = process.env.VUE_APP_API_KEY;
      let url = `https://api.nytimes.com/svc/topstories/v2/technology.json?api_key=${apiKey}`;
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
  }
</script>

<style>

</style>
