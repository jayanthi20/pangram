var MongoClient=require('mongodb').MongoClient

function pangram(str,cb){
	var sentence=str
	str=str.toLowerCase().split("")
	var count={};
	str.forEach(function(i) {
		if (i.match(/[a-z]/)) {
				count[i] = (count[i]||0)+1;  
			}
		});
	var array=[]
	for(key in count)
	{
		array.push(key+":"+count[key])
	}

	MongoClient.connect("mongodb://0.0.0.0/test", function(err, db) {
				if(err) { 
				console.log('error:'+err)					
				}
				else{
							
					db.collection('pangram').insert({sentence:sentence,letters:array},function(err,doc){
						if(err){
						 cb(err)
						}
						else{
						if(array.length==26)
						{
							cb('It is a pangram sentence')
						}
						else{
							cb('It is not a pangram sentence')
						}
						}
					})
				}
	})
}

module.exports=pangram

