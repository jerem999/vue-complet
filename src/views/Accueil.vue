<template>
  <div class="accueil">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row s12 m6 l3">
      <div v-if="posts && posts.length">
        <div v-for="post in posts" :key="post.id">
          <PostComponent :postData="post"/>
        </div>
      </div>
    </div>
    <div class="row s12 m6 l3">
      <div v-if="post2s && post2s.length">
        <div v-for="post2 in post2s" :key="post2.id">
          <PostComponent :postData="post2"/>
        </div>
      </div>
    </div>
    <div class="row s12 m6 l3">
      <div v-if="post3s && post3s.length">
        <div v-for="post3 in post3s" :key="post3.id">
          <PostComponent :postData="post3"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import PostComponent from '@/components/PostComponent.vue'
import axios from 'axios'

export default {
  name: 'accueil',
  components: {
    PostComponent
  },
  data () {
    return {
      posts: [],
      post2s: [],
      post3s: []
    }
  },
  created () {
    axios
      .get('http://www.madeinblue.com/wp-json/wp/v2/posts')
      .then(response => (this.posts = response.data))
    axios
      .get('http://www.madeinblue.com/wp-json/wp/v2/posts')
      .then(response => (this.post2s = response.data))
    axios
      .get('https://www.go-interim.fr/wp-json/wp/v2/posts')
      .then(response => (this.post3s = response.data))
  }
}
</script>
