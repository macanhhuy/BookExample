'use strict';

module.exports = {
	db: 'mongodb://localhost/book-dev',
	app: {
		title: 'Book'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'macanhhuydn@gmail.com',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
			host: 'smtp.gmail.com',
			secureConnection: true,
			port: 465,
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'macanhhuytesting@gmail.com',
				pass: process.env.MAILER_PASSWORD || 'macanhhuydn'
			}
		}
	}
};
