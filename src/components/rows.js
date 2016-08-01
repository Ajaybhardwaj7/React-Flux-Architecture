var  React = require('react');


module.exports  = React.createClass({

						render : function(){
							var data = this.props.data;
						    var rows = data.map(function(columnValues){
							 		return <tr key = {columnValues.key}><td>{columnValues.key}</td><td>{columnValues.value}</td></tr>
							 });
						    return <tbody>{rows}</tbody>
						}
					})

		 
	
