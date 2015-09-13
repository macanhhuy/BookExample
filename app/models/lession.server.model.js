'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Lession Schema
 */
function onlyNumber(value){
	return /[0-9]+/.test(value);
}

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var mustBetween = function(password) {
	return password && password > 0 && password < 21;
};

var LessionSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Lession name',
		trim: true
	},
	pdf_file: {
		type: String,
		default: ''
	},
	order: {
		type: Number,
		min: 1,
		required: 'Please fill lession number',		
		validate: [mustBetween, 'Should write a number from 1-20'],
		default: ''
	},
	created: {
		type: Date,
		default: Date.now
	},
	level: {
		type: Schema.ObjectId,
		required: 'Please select a level',
		ref: 'Level'
	},
	streak: {
		type: Schema.ObjectId,
		ref: 'Streak'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});
mongoose.model('Lession', LessionSchema);
