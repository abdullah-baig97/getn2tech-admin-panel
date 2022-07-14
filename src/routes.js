/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/Users/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import QuizManagement from "views/QuizManagement/Index";
import AddQuiz from "views/QuizManagement/AddQuiz";
import EditQuiz from "views/QuizManagement/EditQuiz";
import ArticlesManagement from "views/ArticlesManagement/Index";
import AddArticle from "views/ArticlesManagement/AddArticle";
import EditArticle from "views/ArticlesManagement/EditArticle";
import HomeInfo from "views/HomeInfo/Index";
import Community from "views/Community/Index";
import Users from "views/Users/Index";
import CommunityDetails from "views/Community/Details";

const dashboardRoutes = [

  {
    path: "/quizmanagement",
    name: "Quizzes",
    icon: "nc-icon nc-quote",
    component: QuizManagement,
    layout: "/admin",
  },
  {
    path: "/addquiz",
    name: "Add Quiz",
    icon: "nc-icon ",
    component: AddQuiz,
    layout: "/quizmanagement",
  },
  {
    path: "/editquiz/:id",
    name: "Edit Quiz",
    icon: "nc-icon nc-chart-pie-35",
    component: EditQuiz,
    layout: "/quizmanagement",
  },
  {
    path: "/articlesmanagement",
    name: "Artciles",
    icon: "nc-icon nc-align-center",
    component: ArticlesManagement,
    layout: "/admin",
  },
  {
    path: "/addarticle",
    name: "Add Article",
    icon: "nc-icon nc-chart-pie-35",
    component: AddArticle,
    layout: "/articlemanagement",
  },
  {
    path: "/editarticle/:id",
    name: "Edit Article",
    icon: "nc-icon nc-chart-pie-35",
    component: EditArticle,
    layout: "/articlemanagement",
  },
  {
    path: "/homeinfo",
    name: "Home Info",
    icon: "nc-icon nc-istanbul",
    component: HomeInfo,
    layout: "/admin",
  },
  {
    path: "/community",
    name: "Community",
    icon: "nc-icon nc-circle-09",
    component: Community,
    layout: "/admin",
  },
  {
    path: "/communitydetails/:id",
    name: "Details",
    icon: "nc-icon nc-circle-09",
    component: CommunityDetails,
    layout: "/community",
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/userprofile/:id",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/users",
  },
 
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
