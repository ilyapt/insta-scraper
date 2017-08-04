/**
 * Created by ilyapt on 30/09/16.
 */

'use strict';

var request = require('request');

exports.getAccountInfo = function(username, cb){
    getInstaJson('https://www.instagram.com/' + username + '/?__a=1'
        , function(error, json){
            cb(error, json.user);
        });
};


exports.getAccountMedia = function(username, param2, param3){
    var cb, maxid;
    if(!param3){ cb = param2; maxid = ''; }else{ cb = param3; maxid='&max_id=' + param2; }
    getInstaJson('https://www.instagram.com/' + username + '/media/?__a=1' + maxid
        , function(error, json){
          if (json != null) {
            if (json.items != null) {
              cb(error, json.items);
            } else {
              cb(error, []);
            }
          } else {
            cb(error, []);
          }
        });
};


exports.getMediaByTag = function(tag, param2, param3){
    var cb, maxid;
    if(!param3){ cb = param2; maxid = ''; }else{ cb = param3; maxid='&max_id='+param2; }
    getInstaJson('https://www.instagram.com/explore/tags/' + encodeURIComponent(tag) + '/?__a=1' + maxid
        , function(error, json){
            cb(error, json.tag);
        });
};


exports.getMediaByLocationId = function(locationId, param2, param3){
    var cb, maxid;
    if(!param3){ cb = param2; maxid = ''; }else{ cb = param3; maxid='&max_id='+param2; }
    getInstaJson('https://www.instagram.com/explore/locations/' + locationId + '/?__a=1' + maxid
        , function(error, json){
            cb(error, json.location);
        });
};


exports.getMediaByCode = function(code, cb){
    getInstaJson('https://www.instagram.com/p/' + code + '/?__a=1'
        , function(error, json){
            cb(error, json.media);
        });
};


exports.generalSearch = function(search, cb){
    getInstaJson('https://www.instagram.com/web/search/topsearch/?query=' + encodeURIComponent(search)
        , function(error, json){
            cb(error, json);
        });
};


exports.generalQuery = function(query, cb){
    getInstaJson('https://www.instagram.com/query/?q=' + encodeURIComponent(query)
        , function(error, json){
            cb(error, json);
        });
};



function getInstaJson(url,cb){
    request.get(url, function(error, response, body){
        if(error) cb(error, null);
        else if(response.statusCode != 200) cb(response.statusCode, null);
        else{
            try{ var json = JSON.parse(body); }catch(err){ cb(err, null); return; }
            cb(null, json);
        }
    });
}
