var action = require('../actions/action');
var appDispatcher = require('../dispatcher/dispatcher');
var events = require('events')
var emitter = new events.EventEmitter();

"use strict";

const ADD_ROW_EVENT = "ADD_ROW";

var _appState = {
	config : {},
	add_row_data : []
};

var generateRandom = function(){
	return Date.now();
};

var addRow = function(){
	_appState.add_row_data.push({ key : _appState.add_row_data.length, value : generateRandom()});
};

var store = {

	getAppstateData : function(){
		    if(! _appState.add_row_data.length) addRow();
			return _appState.add_row_data;
		},

	dispatcherIndex : appDispatcher.register(function(action){

		var actionType = action.actionType;

		switch(actionType) {

			case 'ADD_ROW' : {
				addRow();
				emitter.emit(ADD_ROW_EVENT);
			}
		}

		return true;
	}),
	addEventListener : function(callback){
		emitter.addListener(ADD_ROW_EVENT , callback)
	},
	removeEventListener : function(){
		emitter.removeListener(ADD_ROW_EVENT)
	}
};

module.exports = store;

