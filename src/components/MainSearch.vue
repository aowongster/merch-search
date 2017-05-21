<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      A tool to help you research niches and brand name availability.
    </p>
    <ul>
      <input v-model="searchTerms"
      text="text"
      placeholder="Enter search terms here"/>
    </ul>
    <ul>

      <button v-on:click="searchShirts"
      class="button-blue" type="button" name="button">Keyword Search</button>

      <button v-on:click="searchBrands"
      class="button-blue" type="button"
      name="button">Brand Search</button>

      <button v-on:click="searchTrademarkia"
      class="button-blue" type="button"
      name="button">Trademarkia Search</button>
    </ul>


    <h2>More Links</h2>
    <ul>
      <li>
        <a v-on:click="searchAll" href="#">All Merch Shirts</a>
      </li>
      <li><a href="https://twitter.com/search-home?lang=en" target="_blank">
        Trending on Twitter</a></li>
    </ul>

    <footer>
      <!-- <p>© Alistair Wong</p> -->
    </footer>

  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'main-search',
  data () {
    return {
      msg: 'Welcome to MerchSearch',
      searchTerms: '',
      trending: ''
    }
  },
  mounted () {
    // let trendingUrl = 'https://twitter.com/i/trends?k=&lang=en&pc=true&show_context=false&src=search-home'
    // axios.get(trendingUrl)
    //   .then((response) => {
    //     this.trending = JSON.parse(response)
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  },
  methods: {
    searchShirts () {
      let searchTerms = encodeURI(this.searchTerms)
      let url =
        `https://www.amazon.com/s/ref=as_li_ss_tl?ie=UTF8&field-keywords=${searchTerms}&bbn=12035955011&field-enc-merchantbin=ATVPDKIKX0DER&hidden-keywords=ORCA&rh=i:fashion-novelty&linkCode=ll2&tag=keyword-seach-20&linkId=acec3cfb5d4e3ac750ba5fa28826c13e`
      window.open(url, '_blank')
    },
    searchBrands () {
      let searchTerms = encodeURI(this.searchTerms)
      let url =
      `https://www.amazon.com/s/ref=as_li_ss_tl?ie=UTF8&node=7141123011&field-brandtextbin=${searchTerms}&linkCode=ll2&tag=brand-search0c-20&linkId=0ef7ec36c6c8e26e1e0c7fdbf45e5221`
      window.open(url, '_blank')
    },
    searchTrademarkia () {
      let searchTerms = encodeURI(this.searchTerms)
      let url =
      `http://www.trademarkia.com/trademarks-search.aspx?tn=${searchTerms}`
      window.open(url, '_blank')
    },
    searchAll () {
      // let url = 'http://amzn.to/2mZnOqm'
      let url = 'https://www.amazon.com/s/ref=as_li_ss_tl?ie=UTF8&field-keywords=&bbn=12035955011&field-enc-merchantbin=ATVPDKIKX0DER&hidden-keywords=ORCA&rh=i:fashion-novelty&linkCode=ll2&tag=allsearch0a-20&linkId=31b711df348a66603f72aa4777bbb493'
      window.open(url, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

input {
  font-size: 24px;
  min-width: 50%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b0e3;
}

.button-blue  {
  font-size: 18px;
  background-color: #42b0e3;
  background-image: linear-gradient(to bottom, #42b0e3, #2ba9e3);
  border: 1px solid #107db0;
  box-shadow: inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  cursor: pointer;
}

</style>
