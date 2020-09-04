'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //前台
  //首页
  router.get('/', controller.default.home.index);
  //关于
  router.get('/about',controller.default.about.index);
  //联系我们
  router.get('/contact',controller.default.contact.index);
  //最新资讯
  router.get('/news',controller.default.news.index);
  //后台
  
  //小程序api

};
