
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
exports.fluid = function(req, res){
  res.render('fluid', { title: 'Express' })
};
exports.container = function(req, res){
  res.render('container', { title: 'Express' })
};
