var  React = require('react');
var  TableContent = require('./table');
var action = require('../actions/action');
var store = require('../store/store');


var Button = React.createClass({

	render : function(){

		return <input onClick = { this.addRow } type = 'button' value = "Add Row"/>
	},
	addRow : function(){
		if(store.getAppstateData().length >= 10){
			alert("Entries should be not be more then 10");
		}else{
			action.ADD_ROW();	
		}
		

	}
})


module.exports =  React.createClass({	

						getInitialState : function(){
							return { data : store.getAppstateData()};
						},
						render : function(){
							return  <div><Button add = {this}></Button><div><i>It generates an event action which is passed to the dispatcher</i></div> <br/> <TableContent data = {this.state.data}> </TableContent></div>
						},
						componentDidMount : function(){
							store.addEventListener(this._change);
						},
						componentWillUnMount : function(){
							store.removeEventListener(this._change);
						},
						_change : function(){
								this.setState( { data : store.getAppstateData() })
						}


					})

