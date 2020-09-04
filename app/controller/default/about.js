/**
 * @author:zhangdezhi
 * @date:2020-09-04
 * @desc:关于我们
*/
'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('/default/about');
  }
}

module.exports = AboutController;
