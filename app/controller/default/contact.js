'use strict';

const Controller = require('egg').Controller;

class ContactController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('/default/contact');
  }
}

module.exports = ContactController;
