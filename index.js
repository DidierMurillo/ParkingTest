var app = require('express')();
const path = require('path')
const PORT = process.env.PORT || 5000
const { Client } = require('pg'); 


app.get('/db', (req, res) => {
	var dbOpts = {
	      connectionString:"postgres://vazsqrtoctrufg:89e207a7b94975b481192566f6ce32fe707d2a301fc19a7ef3575422a1c02381@ec2-54-225-196-122.compute-1.amazonaws.com:5432/d443i12h38tk1", 
	      ssl : true
	    }
	const client = new Client(dbOpts);    
	client.connect();    
	client.query('SELECT id, name, Description__c FROM salesforce.example__c;', (err, dbRes) => {
	      if (err) throw err;     
	 
	      res.render('pages/db',{
	        results : dbRes.rows
	      });
	 
	      client.end();
	    });
	 
	client.end();	   
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

 	  

