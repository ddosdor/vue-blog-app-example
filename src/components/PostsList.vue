<template>
  <div class="posts-list">
    <div class="panel panel-default post" v-for="post in posts" :key="post.id">
      <div class="panel-heading post__header">
        <h3 class="panel-title header__title" @click="goToPostDetails(post.id)">{{ post.title }}</h3>
        <small><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>{{ post.addedAt }}</small>
      </div>
      <div class="panel-body post__content">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
    };
  },
  beforeMount() {
    axios.get('https://your-project.firebaseio.com/posts.json')
      .then((response) => {
        Object.keys(response.data).forEach((key) => {
          const post = response.data[key];
          post.id = key;
          this.posts.push(post);
        });
      });
  },
  methods: {
    goToPostDetails(postId) {
      this.$router.push({ name: 'Post', params: { id: postId } });
    },
  },
};
</script>

<style>
  .posts-list {
    margin-top: 25px;
  }

  .header__title {
    font-size: 28px;
    font-weight: bold;
  }
</style>
