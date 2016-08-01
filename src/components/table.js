var  React = require('react');
var  Rows = require('./rows');

var Message = React.createClass({
	render : function(){
		return <div><i>The store is used to store and fetch the data. The store uses Events Emitter to emit and listen for events whenever the Add Row button is clicked. Consequently, based on events the setState of table component is called to view the changes occcured.</i></div>
	}
})

module.exports  = React.createClass({

	render : function(){
		
		return <div><table className = "center"><thead><tr><th>S.NO</th><th>Value</th></tr></thead><Rows data={this.props.data}></Rows></table><br/><Message></Message></div>
	}
});

