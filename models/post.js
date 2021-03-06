'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Post = sequelize.define('post', {
  // user_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pv: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: "浏览数"
  },
  reply_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: "回复数"
  },
  // allow_comment: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   defaultValue: 1,
  //   comment: "1：允许评论；0：不允许评论"
  // },
  // is_public: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   defaultValue: 1,
  //   comment: "1：公开；0：不公开"
  // },
  // last_reply_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   defaultValue: 1,
  //   comment: "最近回复用户的ID"
  // }
  // ,
  // last_reply_date_time: {
  //   type: Sequelize.DATE,
  //   allowNull: false,
  //   defaultValue: Sequelize.NOW,
  //   comment: "最近回复的时间"
  // }
});

Post.sync({
  // force: true
}); //创建表

module.exports = Post;
