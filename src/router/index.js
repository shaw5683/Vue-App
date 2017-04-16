import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import discovery from '../components/discovery/discovery.vue'
import message from '../components/message/message.vue'
import me from '../components/me/me.vue'
import selectBar from '../components/selectBar/selectBar.vue'
import comment from '../components/comment/comment.vue'
import article from '../components/article/article.vue'
import weekHot from '../components/weekHot/weekHot.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'selectBar',
          component: selectBar
        },
        {
          path: 'comment',
          component: comment
        }
      ]
    },
    {
      path: '/discovery',
      component: discovery,
      children: [
        {
          path: 'weekHot',
          component: weekHot
        }
      ]
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/article',
      component: article
    },
    {
      path: '/me',
      component: me
    }
  ]
})
