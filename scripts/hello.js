'use strict';
/**
 * hello>と呼びかけるとslack botが応答してくれる関数
 * @param {*} robot 
 */
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });


/**
 * omikuji>と入力すると、ランダムでおみくじの結果を教えてくれる関数
 * 
 */
robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
};

