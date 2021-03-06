#!/usr/bin/env node
/**
 * @see https://www.youtube.com/watch?v=24X9FpeSASY
 * @see http://nordycka.wikia.com/wiki/Specjalna:Dodaj_film
 * @see /index.php?title=Special:WikiaVideoAdd&action=submit
 */
const bot = require('..'),
	client = new bot('config.js');

const url = 'https://www.youtube.com/watch?v=24X9FpeSASY',
	fileName = 'VideoTest';

client.logIn((err) => {
	client.log(`Uploading ${url}...`);

	client.uploadVideo(fileName, url, (err, res) => {
		if (err) {
			client.log(err);
			return;
		}

		client.log('Upload completed!');
		client.log(res);
	});
});
