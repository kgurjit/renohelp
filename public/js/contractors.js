var Contractor = React.createClass({
	render: function(){
		var c = this.props.details;
		return <div class='contractor'><h1>{c.name}</h1> <h2>{c.loc}</h2></div>;
	}
});

var ContractorList = React.createClass({
  getInitialState: function() {
    return {
      contractors: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('/api/contractors', function (result) {
      this.setState({
        contractors: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
  	var createContractor = function(c) {
            return <Contractor details={c} />;
        };

    return <div>{this.state.contractors.map(createContractor)}</div>;
  }
});

ReactDOM.render(<ContractorList />, document.getElementById('contractor-list'));