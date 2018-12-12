<template>
  <v-card>
    <v-card-title><h4>{{ article.title }}</h4></v-card-title>
    <v-divider></v-divider>
    <p>{{ article.abstract }}</p>
    <p><a :href="article.url">{{ article.url }}</a></p>
      <MultimediaItem v-if="media" :media="media">
      </MultimediaItem>
    {{ article }}
  </v-card>
</template>

<script>
  // Single article card

  import MultimediaItem from './MultimediaItem';

  export default {
    props: ['article'],
    components: {
      MultimediaItem
    },
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
      }
    }
  }
</script>
