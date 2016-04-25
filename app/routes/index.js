/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

module.exports = function (app) {

  app.route('/')
    .get(function(req, res) {
      var ip = req.socket.remoteAddress; 
      var language = req.headers['accept-language'].split(',')[0];
      var operatingSystem = req.headers['user-agent'].split(') ')[0].split(' (')[1];
      var payload = {
        ip,
        language,
        operatingSystem
      };
      res.send(payload);
    });
};
