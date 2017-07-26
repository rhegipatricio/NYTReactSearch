var headlines = [];

var React = require('react');

var Search = React.createClass({

	getInitialState: function () {
		return {topic: "", dates: "", datef: ""};
	},

	handleSubmit: function (event) {
		// alert('Submitted topic: ' + this.state.topic + this.state.datef);
		event.preventDefault();

		var startDate = (this.state.dates || "20170101").replace(/-/g,'');
		var endDate = (this.state.datef || "20170101").replace(/-/g,'');
	
		var userin = this.state.topic;

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({
			'api-key'    : "1d9ad7b0bbb6450fa6898276487f2e27",
			'q'		     : userin,
			'begin_date' : startDate,
			'end_date'   : endDate
		});
		$.ajax({
			url: url,
			method: 'GET',
		}).done(function(result) {

			var docs = result.response.docs;

			docs.forEach( function(doc) {
				console.log(doc.headline.main);
				headlines.push(doc)
			});

			console.log(headlines)

		}).fail(function(err) {
			throw err;

		});
	};

	handleTopicChange: function (event) {
		this.setState({topic: event.target.value});
	},
	handleDatesChange: function (event) {
		this.setState({dates: event.target.value});
	},
	handleDatefChange: function (event) {
		this.setState({datef: event.target.value});
	}, 

	render: function () {

		return (

			<div className="container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center">SEARCH</h2>
					</div>
					<div className="panel-body">

						<form onSubmit={this.handleSubmit}>
							<div className="input-group input-group-lg">
								<label>TOPIC</label>
								<input type="text" className="form-control" placeholder="Topic" required value={this.state.topic} onChange={this.handleTopicChange}/>
							</div>
							<br />

							<div className="input-group input-group-lg">
								<label>START YEAR</label>
								<input type="date" id="datestart" className="form-control" value={this.state.dates} onChange={this.handleDatesChange}/>
							</div>

							<br />

							<div className="input-group input-group-lg">
								<label>END YEAR</label>
								<input type="date" id="fdate"
			)
	}

})