/*
	 This is empty on purpose! Your code to build the resume will go here.
	 */
//var awesomeThoughts=("I am john and I am awesome");
//	var funThoughts=awesomeThoughts.replace("awesome","FUN");
// $("#main").append(funThoughts);

//var array1=["english","chinese","japanese","korean","franch"];
//console.log(array1.length);
//var array2=[10,20,30,40,50,60];
//array2[5]=array2[5]+1;
//console.log(array2[5]);
/*var name="cAmEROn PittMAN";
	var array3=name.split(" ");
	array3[0]=array3[0].slice(0,1).toUpperCase()+array3[0].slice(1).toLowerCase();
	array3[1]=array3[1].toUpperCase();
	name=array3[0]+' '+array3[1];
	console.log(name);

	var bio={
	"name":"John",
	"role":"web develooper",
	"Contact":"0468871215",
	"picture":"www",
	"welcome":"hi,there",
	"skills":"skills"
	}
	$("#header").append(bio.name);
	$("#header").append(bio.role);
	$("#header").append(bio.Contact);
	*/
var work={
	"jobs":[
	{"employer":"CPE",
		"title":"engineer",
		"location":"beiing",
		"dates":"2015",
		"description":"this is my most recent job"
	},
	{"employer":"mplink",
		"title":"staff",
		"location":"garden city",
		"dates":"2015",
		"description":"this is my part-time job"
	}
	]
};
var projects={
	"project":[
	{
		"title":"lead engineer",
		"dates":"2014",
		"description":"it is a large scale project taken place in Iran",
		"images":""
	},
	{
		"title":"engineer",
		"dates":"2015",
		"description":"it is a large scale project taken place in Iraq",
		"images":""
	}
	]
};
//work.position="web developer";
//work.years=15;
//work.city="beijing";
/*var education={};
	education["name"]="bechelor";
	education["years"]=4;
	education["city"]="dongying";
	$("#header").append(work["position"]);
	$("#header").append(education.name);
	*/
var education={
	"schools":[
	{"name":"UPC",
		"location":"beijing",
		"degree":"bechelor",
		"major":["telecom","electrical","petroleum","civil","HVAC","automation"],
		"dates":"2000",
		"url":"http://www.upc.com.cn",
	},
	{"name":"tsinghua",
		"location":"beijing",
		"degree":"master",
		"major":["telecom","electrical","petroleum","civil","HVAC","automation"],
		"dates":"2004",
		"url":"http://www.tsinghua.com.cn",
	},
	{"name":"piking university",
		"location":"beijing",
		"degree":"doctor",
		"major":["telecom","electrical","petroleum","civil","HVAC","automation"],
		"dates":"2008",
		"url":"http://www.beijing.com.cn",
	}
	],

		"onlineCourses":[
		{"title":"english",
			"school":"UPC",
			"dates":"2015",
			"url":"www.upc.com.cn"
		},
		{"title":"math",
			"school":"tsinghua",
			"dates":"2015",
			"url":"www.tsinghua.com.cn"
		},
		{"title":"literacy",
			"school":"piking university",
			"dates":"2016",
			"url":"www.beijing.com.cn"
		}
	]
}
var bio={
	"name":"John",
	"role":"engineer",
	"welcomeMessage":"I am a telanted engineer",
	"contacts":{
		"mobile":"0468871215",
		"email":"linjiang82@gmail.com",
		"github":"linjiang82",
		"location":"6 luton st"
	},
	"skill":["FEED","EPC","OIL&GAS","SITE SURVEY","SITE SUPPORT"]
}
if (bio.skill.length>0){
	$("#header").append(HTMLskillsStart);
	var formatSkill=HTMLskills.replace("%data%",bio.skill[0]);
	$("#skills").append(formatSkill);
	var formatSkill=HTMLskills.replace("%data%",bio.skill[1]);
	$("#skills").append(formatSkill);
	var formatSkill=HTMLskills.replace("%data%",bio.skill[2]);
	$("#skills").append(formatSkill);
	var formatSkill=HTMLskills.replace("%data%",bio.skill[3]);
	$("#skills").append(formatSkill);

}
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedWorkEmployerandTitle=formattedWorkEmployer+formattedWorkTitle;
$(".work-entry:last").append(formattedWorkEmployerandTitle);
var formattedWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
var formattedWorkDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedWorkLocation);
$(".work-entry:last").append(formattedWorkDates);
$(".work-entry:last").append(formattedWorkDescription);
	}
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

