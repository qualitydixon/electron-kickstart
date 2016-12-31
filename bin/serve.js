#!/usr/bin/env node

const fs = require('fs');

if (fs.existsSync('./.env')) {
	console.log('heeeerrreee');
	require('dotenv').config({ path: './.env' });
	// console.log(process.env);
}
