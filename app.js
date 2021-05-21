var Mock = require('mockjs');

module.exports = () =>{
	var data = Mock.mock({
		'course|227' : [
			{
				'id|+1':1000,
				course_name: '@ctitle(5,10)',
				author: '@cname',
				college: '@ctitle(6)',
				'category_Id|1-6':1
			}
		],
		'course_category|6': [
			{
				"id|+1":1,
				"pid":-1,
				cName: '@ctitle(4)'
			}
		]
	});
	return data;
}