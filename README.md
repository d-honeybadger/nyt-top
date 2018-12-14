# nyt-top
The New York Times stories from Top Stories API.
## !This app needs an API key
Please put an ```.env.local``` file in the *root* directory.
Inside that file, set ```VUE_APP_API_KEY=your_nyt_api_key```.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Code organization
* ```main.js``` is the Vue entry point with ```App.vue``` being the main component.
* ```router.js``` sets up routes that correspond to different sections of NYT news.
* The only view component (i.e. displayed on a route) is ```views/ArticleList.vue```.
* The rest of the components (in ```/components```) are prefixed 'Base' if they are
general-purpose dumb components and 'The' if they have only one instance.
