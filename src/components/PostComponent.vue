<template>
  <div id="postData">
    <div class="col s12 m6 l3">
      <div class="card blue-grey darken-1">
        <div style="height:250px; border-width:1;" class="card-content white-text">
          <span class="card-title" v-html="postData.title.rendered"/>
          <div class="row">
            <p v-html="getLength(postData.content.rendered)"/>
          </div>
        </div>
        <div style="height:50px; border-width:1;" class="card-action">
          <a style="font-size: 12px;">{{getPost(postData.date)}}</a>
          <a style="font-size: 12px;">{{getDate(postData.date)}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostComponent',
  props: ['postData'],
  methods: {
		getDate: function(x) {
			return moment(x, "YYYYMMDD").fromNow()
    },
    getPost: function(y) {
      return moment(y).format('DD/MM/YYYY')
    },
    getLength: function(z) {
      if (z.length > 200) {
        return z.substr(0, 180) + '...'
      }
      return z
    }
	}
}
</script>