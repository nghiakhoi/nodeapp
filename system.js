var os = require('os');
var mess='Day la thong tin he thong';
var mang = Array('Type ' +os.type(),
	'Version '+process.version,
	'Platform '+os.platform(),
	'Hostname '+os.hostname(),
	'Total memory '+os.totalmem(),
	'Free memory '+os.freemem(),
	'Uptime '+os.uptime()
);
console.log(mess);
var arrlen=mang.length;
for(i=0;i<arrlen;i++)
{
	console.log(mang[i]);
}