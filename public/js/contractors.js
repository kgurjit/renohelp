var Contractor = React.createClass({
	render: function(){
		var c = this.props.details;
    if(!c.address) {
      return <div class='contractor'>
              <h3>{c.name}</h3> 
              {c.city}<br/>
              <a href='/login?r=contractors'>Login to view address</a>
            </div>;  
    }
    return <div class='contractor'>
              <h3>{c.name}</h3> 
              {c.address}<br/>
              {c.city}<br/>
              {c.phoneNumber}
            </div>;  
		
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