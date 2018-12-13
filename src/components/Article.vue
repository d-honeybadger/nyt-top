<!-- Display single article as a card -->
<template>
  <VCard>
    <VCardTitle><h4>{{ article.title }}</h4></VCardTitle>
    <VDivider />
    <VCardText>
      <p class="grey--text mb-0">{{ timeUpdated() }} ago</p>
      <p class="green--text mt-0 mb-2 text-xs-right">{{ label }}</p>
      <p class="mb-0">{{ article.abstract }}</p>
      <p class="text-xs-right mt-0 mb-2">
        <a :href="article.url" target="_blank">
          <span class="black--text">Read</span>
        </a>
      </p>
      <MultimediaItem
        v-if="media"
        :media="media"
      />
    </VCardText>
  </VCard>
</template>

<script>


  import MultimediaItem from './MultimediaItem';

  export default {
    components: {
      MultimediaItem
    },
    props: ['article'],
    computed: {
      // Get an image of the best size:
      // width of 210px is better than 190px > 150px > 75px > jumbo-size
      media: function() {
        let multimedia = this.article.multimedia;
        if (multimedia.length === 0) return null;
        let priorities = new Map([['mediumThreeByTwo210', 1], ['Normal', 2],
          ['thumbLarge', 3], ['Standard Thumbnail', 4], ['superJumbo', 5]]);
        multimedia.sort((media1, media2) => {
          return priorities.get(media1.format) - priorities.get(media2.format);
        });
        return multimedia[0];
      },
      // get a topic/organization/location label for article
      label: function() {
        return (this.article.des_facet[0] || this.article.org_facet[0] ||
          this.article.geo_facet[0] || null);
      }
    },
    methods: {
      // Calculate how long ago the article was updated
      // Done as method instead of computer property cause new Date() needs to be updated every time
      timeUpdated: function() {
        // updated_date is UTC-5 time zone
        let updatedAt = new Date(this.article.updated_date);
        let millisec = new Date() - updatedAt;
        let time = millisec/1000/60; // in minutes
        let unit = 'min';
        if (time >= 60) {
          time = time/60; // in hours
          unit = 'h';
          if (time >= 24) {
            time = time/24; //in days
            unit = 'd';
          }
        }
        return Math.round(time) + unit;
      }
    }
  }
</script>

<style>
  /* make article cards uniform in size*/
  .v-card {
    height: 100%;
  }

  .v-card__title {
    font-family: 'Cardo', serif;
    font-size: 16px;
  }
</style>
