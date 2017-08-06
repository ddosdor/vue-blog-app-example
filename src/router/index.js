import Vue from 'vue';
import Router from 'vue-router';
import PostsList from '@/components/PostsList';
import PostDetails from '@/components/PostDetails';
import AddNewPost from '@/components/AddNewPost';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: PostsList,
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: PostDetails,
    },
    {
      path: '/add-post',
      name: 'NewPost',
      component: AddNewPost,
    },
  ],
});
