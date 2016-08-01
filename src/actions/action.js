var appDispatcher = require('../dispatcher/dispatcher');

module.exports = {

    ADD_ROW : function(content) {
    	appDispatcher.handleViewAction({type : "ADD_ROW" , content : content })
    }
}