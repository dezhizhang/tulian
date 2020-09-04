'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('/default/news');
  }
}

module.exports = NewsController;
