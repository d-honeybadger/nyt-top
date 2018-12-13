<!-- List (grid) of articles from a given section. -->
<!-- The order is just as the API sends them since it looks like -->
<!-- they are already sorted "most important first" -->
<!-- If search string is provided, only matching articles are shown -->
<template>
  <VFlex xs12>
    <BaseLoadingSpinner v-if="isLoading" />
    <VAlert
      v-else-if="loadingError"
      type="error"
      :value="true"
    >
      Sorry, something went wrong. Try refreshing the page.
    </VAlert>
    <VContainer
      v-else-if="!isLoading && filteredArticles"
      fluid
      grid-list-md
    >
      <VDataIterator
        :items="filteredArticles"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row
        wrap
      >
        <VFlex
          slot="item"
          slot-scope="props"
          xs12
          sm12
          md6
          lg4
        >
          <Article :article="props.item" />
        </VFlex>
      </VDataIterator>
    </VContainer>
  </VFlex>
</template>

<script>
  import axios from 'axios';
  import Fuse from 'fuse.js'; // fuzzy search library
  import Article from '../components/Article';
  import BaseLoadingSpinner from '../components/BaseLoadingSpinner';

  // options for searching articlse with Fuse library
  // they don't need to be reactive so no need to put in data
  const searchOptions = {
    keys: ['title', 'subsection', 'abstract', 'des_facet',
    'org_facet', 'geo_facet'],
    shouldSort: true,
    threshold: 0.3,
    maxPatternLength: 32,
    minMatchCharLength: 2
  };

  export default {
    components: {
      Article,
      BaseLoadingSpinner
    },
    props: {
      section: {
        type: String,
        default: 'home'
      },
      search: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        articles: null,
        filteredArticles: null, // filtered for some search string
        isLoading: true,
        loadingError: null,
        rowsPerPageItems: [9, 15, 24],
        pagination: {
          rowsPerPage: 9
        },
      };
    },
    watch: {
      // if section prop changes, need to fetch a different section of stories
      section: function() {
        this.fetchStories();
      },
      // if search prop changes, need to filter articles accordingly
      search: function() {
        this.searchStories();
      }
    },
    mounted () {
      this.fetchStories();
    },
    methods: {
      // fetches stories from a section specified by the section prop
      fetchStories () {
        const apiKey = process.env.VUE_APP_API_KEY;
        const section = this.section;
        const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api_key=${apiKey}`;
        axios.get(url)
          .then(res => {
            this.articles = res.data.results;
            this.filteredArticles = res.data.results;
          })
          .catch(err => this.loadingError = err.message)
          .finally(() => this.isLoading = false);
      },
      searchStories () {
        // filter according to search string,
        // if no search string (or <= 2 chars) then show all articles
        let search = this.search && this.search.trim();
        if (search && search.length > 2) {
          const fuse = new Fuse(this.articles, searchOptions);
          this.filteredArticles = fuse.search(search);
        } else this.filteredArticles = this.articles;
      }
    }
  }
</script>
