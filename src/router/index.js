import Vue from 'vue'
import Router from 'vue-router'
import TopHeader from '@/components/TopHeader'
import TopIndex from '@/components/TopIndex'
import HotNews from '@/components/HotNews'
import HotNewsRecommend from '@/components/HotNewsRecommend'
import HotNewsJava from '@/components/HotNewsJava'
import HotNewsPhp from '@/components/HotNewsPhp'
import HotNewsHtml from '@/components/HotNewsHtml'
import TopKnowledge from '@/components/TopKnowledge'
import TopTopic from '@/components/TopTopic'
import TopArticle from '@/components/TopArticle'
import TopIndexTask from '@/components/TopIndexTask'
import TaskDetial from '@/components/TaskDetial'
import TaskDynamic from '@/components/TaskDynamic'
import TaskProblem from '@/components/TaskProblem'


Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/index',
      name: 'topIndex',
      component: TopIndex,
      children:[
        { 
          path: '/index', 
          name: 'hotNewsRecommend', 
          component: HotNewsRecommend
        },
        { 
          path: '/index/java',
          name: 'hotNewsJava',
          component: HotNewsJava
        },
        {
          path: '/index/php',
          name: 'hotNewsPhp',
          component: HotNewsPhp
        },
        {
          path: '/index/html',
          name: 'hotNewsHtml',
          component: HotNewsHtml
        }
      ]
    },
    {
      path: '/index/task',
      name: 'topIndexTask',
      component: TopIndexTask,
      children:[
        {
          path: '/index/task',
          name: 'taskDetial',
          component: TaskDetial
        },
        {
          path: '/index/task/dynamic',
          name: 'taskDynamic',
          component: TaskDynamic
        },
        {
          path: '/index/task/problem',
          name: 'taskProblem',
          component: TaskProblem
        }
      ]
    },
    {
      path: '/knowledge',
      name: 'topKnowledge',
      component: TopKnowledge
    },
    {
      path: '/topic',
      name: 'topTopic',
      component: TopTopic
    },
    {
      path: '/article',
      name: 'topArticle',
      component: TopArticle
    }   
  ]
})
