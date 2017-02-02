const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));
app.get('/', (req, res) => {
	res.html('index');
});

if(!module.parent){ 
	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	}); 
}
