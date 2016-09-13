var $=require('libs/jquery.js');

var common=require('utils/common.util.js');

var tplHeader=require('tpls/header.string');
var tplDetailBody=require('tpls/detail.body.string');
var tplfooter=require('tpls/footer.string');

$(function(){
	common.renderHtml(tplHeader+tplDetailBody+tplfooter);
});
