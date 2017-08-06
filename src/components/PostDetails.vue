<template>
  <div class="post-details">
    <div class="panel panel-default post">
      <div class="panel-heading post__header">
        <h3 class="panel-title header__title">{{ post.title }}</h3>
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
      post: {},
    };
  },
  beforeMount() {
    const postId = this.$route.params.id;
    axios.get(`https://your-project.firebaseio.com/posts/${postId}.json`)
      .then((response) => {
        this.post = response.data;
      });
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