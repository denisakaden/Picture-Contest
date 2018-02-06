import React from 'react';
import './Searcher.css';

class Searcher extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      term:"",   // search Businesses
      location: "", //location to Search
      sortBy: "best_match" //sorting options
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    //this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }


  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">נופים</a>
            <a href="#">אנשים</a>
            <a href="#">בעלי חיים</a>
            <a href='#'>אירועים מיוחדים</a>
            <a href="#">כלל התמונות</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Searcher;
