exports.viewProject = function(req,res) {
	var name = req.params.name;
	console.log("THe project name is: " + name);
	res.render('project',{
		'projectName': name
	});
}
