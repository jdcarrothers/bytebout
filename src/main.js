import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import LobbyAdminPanelComponent from './components/LobbyAdminPanelComponent.vue'
import LiveQuestionComponent from './components/LiveComponent.vue'
import JoinOrCreateLobbyComponent from './components/JoinOrCreateLobbyComponent.vue'
import LobbyUserPanelComponent from './components/LobbyUserPanelComponent.vue'
import AdminQuizOverviewComponent from './components/AdminQuizOverviewComponent.vue'
import SigninComponent from './components/SigninComponent.vue'
import SignupComponent from './components/SignupComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import HostFinishComponent from './components/HostFinishComponent.vue'
import UserFinishComponent from './components/UserFinishComponent.vue'
const routes = [
  { 
    name: 'LiveQuestion',
    path: '/lobby/:lobbyID', 
    component: LiveQuestionComponent,
  },
  { 
    name: 'HostLobbyAdmin',
    path: '/host/:lobbyID', 
    component: LobbyAdminPanelComponent,
  },
  { 
    name: 'UserLobby',
    path: '/join/:lobbyID', 
    component: LobbyUserPanelComponent,
    params: true
  },
  { 
    name: 'CreateLobby',
    path: '/connect', 
    component: JoinOrCreateLobbyComponent 
  },
  { 
    name: 'AdminQuizOverview',
    path: '/admin/:lobbyID', 
    component: AdminQuizOverviewComponent 
  },
  {
    name: 'Signin',
    path: '/signin',
    component: SigninComponent,
    meta: {hideNavbar: true}
  },
  {
    name: 'Register',
    path: '/signup',
    component: SignupComponent,
    meta: {hideNavbar: true}
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: DashboardComponent
  }
  ,
  {
    name: 'HostFinish',
    path: '/end/:lobbyID',
    component: HostFinishComponent
  }
  ,
  {
    name: 'UserFinish',
    path: '/endUser/:lobbyID',
    component: UserFinishComponent
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)


app.use(router)
app.mount('#app')