<template>
  <form class="add-new-post" name="add-new-post" :model="newPost" @submit.prevent="saveNewPost">
    <div class="form-group">
      <label for="post-title">Post title</label>
      <input type="text" class="form-control" name="post-title" v-model="newPost.title"></input>
    </div>
    <div class="form-group">
      <label for="post-content">Post content</label>
      <textarea name="post-content"class="form-control" v-model="newPost.content" rows="25"></textarea>
    </div>    
    <button class="btn btn-primary btn-block">Save</button>
  </form> 
</template>

<script>
import axios from 'axios';
import dateformat from 'dateformat';

export default {
  name: 'AddNewPost',
  data() {
    return {
      newPost: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    saveNewPost() {
      this.newPost.addedAt = dateformat(new Date(), 'dddd, mmmm dS, yyyy, HH:MM');
      axios.post('https://your-project.firebaseio.com/posts.json', this.newPost)
        .then(() => {
          this.newPost = {
            title: '',
            content: '',
          };
        });
    },
  },
};
</script>
<style>
  .add-new-post {
    margin-top: 20px;  
  }
</style>
