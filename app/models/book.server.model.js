'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Book Schema
 */
var BookSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill book name',
		trim: true
	},
	thumbnail: {
		type: String,
		default: '',
		required: 'Please fill thumbnail',
		trim: true
	},
	big_cover: {
		type: String,
		default: '',
		required: 'Please fill big cover',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill description',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	category: {
		type: Schema.ObjectId,
		required: 'Please select a category',
		ref: 'Category'
	},
	authors:[ {type : Schema.ObjectId, ref : 'Author'} ],
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Book', BookSchema);