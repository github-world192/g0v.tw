var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var e,t,n,r,o=[];for(e=0,n=(t=deferSrcSetters).length;n>e;++e)r=t[e],o.push(r());return o}),angular.module("g0v.tw",["firebase","btford.markdown"]).config(["$httpProvider",function(e){var t,n;return e.defaults.useXDomain=!0,n=(t=e.defaults.headers.common)["X-Requested-With"],delete t["X-Requested-With"],n}]).factory({fireRoot:["angularFireCollection"].concat(function(){var e;return e="https://g0vsite.firebaseio.com",new Firebase(e)})}).directive("deferSrc",function(){return{restrict:"A",link:function(e,t){var n;return n=t.attr("defer-src"),deferSrcSetters.push(function(){return t.attr("src",n)})}}}).controller({EventCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,n){return e.events=t(n.child("feed/events/articles").limit(2))})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,n){return e.articles=t(n.child("feed/blog/articles").limit(4))})}).controller({FeaturedCtrl:["$scope","angularFireCollection"].concat(function(e,t){var n;return n=new Firebase("https://g0vhub.firebaseio.com/projects"),e.projects=t(n),e.nextProject=function(){return void 0!==e.idx?($("#prj-img").css("opacity",0),++e.idx,e.idx%=e.featured.length):void 0},e.$watch("projects.length",function(){var t,n,r,o,a;for(t=[],n=0,o=(r=e.projects).length;o>n;++n)a=r[n],a.thumbnail&&t.push(a);return e.featured=t,e.idx=Math.floor(Math.random()*e.featured.length)}),e.$watch("idx",function(t,n){return void 0!==n?e.project=e.featured[n]:void 0})})}).controller({CommuniqueCtrl:["$scope","$http","$element"].concat(function(e,t,n){return t.get("http://g0v-communique-api.herokuapp.com/api/1.0/entry/all?limit=50").success(function(t){return e.idx=0,e.nextCommunique=function(){return void 0!==e.idx?(++e.idx,e.idx%=t.length):void 0},e.$watch("idx",function(r,o){var a,i,c,u;for(void 0!==o&&(e.communique=t[o]),a=0,c=(i=e.communique.urls).length;c>a;++a)u=i[a],e.communique.content=e.communique.content.replace(u.name,'<a target="_blank" href="'+u.url+'">'+u.name+"</a>");return n.find(".description").html(e.communique.content)})}).error(function(t,n){return e.message=n})})}).controller({BuildIdCtrl:["$scope"].concat(function(e){return e.buildId=window.global.config.BUILD})}),show=function(){var e,t;return e=$("#prj-img"),e.animate({opacity:1},500),t=[40+e.height()][0],$("#prj-img-div").animate({height:t+"px"},500)},$(function(){return $(".ui.dropdown").dropdown({on:"hover",transition:"fade"})}),function(){var e={};e.exports={BUILD:"git-bc8c06b"},window.global||(window.global={}),window.global.config=e.exports}.call(this);