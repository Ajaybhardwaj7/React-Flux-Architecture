var React = require('react');
var ReactDOM = require('react-dom');
var Content = require('./components/main');
require('./styles/style.css');

var Component = React.createClass({

						render : function(){
							return <div className='center'><h1>React & Flux Architecture</h1><h4><i>This example will demonstrate the fundamentals of implementing React using Flux</i></h4><br/><Content></Content></div>
						}
				});

ReactDOM.render(<Component /> , document.getElementById('main'));