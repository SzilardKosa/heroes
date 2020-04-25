const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mctxcf', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;