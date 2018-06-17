import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import myData from './gamesext.json';


class ZooSearch extends React.Component {

  constructor() {
      super();
      this.state = {
        sortDir:" -- ",
        text:"Back",
        searchText:"",
        searchResult:myData,
        gamedata:myData,
        color:['#fcd000', '#0ebeff', '#47cf73', '#ae63e4']
      };
      this.olddata = JSON.parse(JSON.stringify(myData));
  }
  handleSort(){
    var bar = ReactDOM.findDOMNode(this.refs.sortBar);
    var word = bar.value;
    var result = [];
    var i = 0;
    var allgamedata = this.state.gamedata;
    console.log(word);
    if(word ==="Ascending"){
      var ascdata = allgamedata.sort((a, b) => (a.score - b.score));
      for(i=0; i<ascdata.length; i++){
            result.push(ascdata[i]);
      }
    }
    else if(word ==="Descending"){
      var dscdata = allgamedata.sort((a, b) => (b.score - a.score));
      for(i=0; i<dscdata.length; i++){
            result.push(dscdata[i]);
      }
    } 
    else
    {
      // console.log("None");
      for(i=0; i<this.olddata.length; i++){
        result.push(this.olddata[i]);
      }
    }
    this.setState({searchResult:result});
    this.setState({gamedata:result});
    this.setState({sortDir:word});
  }
  handleSearch(){
    var bar = ReactDOM.findDOMNode(this.refs.searchBar);
    var word = bar.value;
    var result = [];
    var i = 0;
    var allgamedata = this.state.gamedata;
    this.setState({searchText:"Search Result"});
    console.log(word);
    if(word ===""){
      for(i=0; i<allgamedata.length; i++){
        result.push(allgamedata[i]);
      }
      this.setState({searchResult:result});
    }
    else{
      word = word.toLowerCase();
      for(i=0; i<allgamedata.length; i++){
        if(String(allgamedata[i].title).toLowerCase().indexOf(word)!==-1){
            result.push(allgamedata[i]);
        }
      }
      this.setState({searchResult:result});
    } 
  }
  render() {
    var category = this.state.searchResult;
    var renderSearch = [];
    for(var i=0; i<category.length; i++){
      renderSearch.push(
        <Card 
          title = {category[i].title}
          release_year = {category[i].release_year}
          platform = {category[i].platform}
          score = {category[i].score}
          genre = {category[i].genre}
          url = {category[i].url}
          editors_choice = {category[i].editors_choice}
          clr = {this.state.color[(i+1)%4]}>
        </Card>
        
      );
      }
    return (
    <div className="zoo-modal">
        <div className="centered-zoo-modal">
          <div className="zoo-modal-model">
          <header className="App-header">
            <h1 className="zoo-modal-text">Load From Zoo</h1> 
            <input className="zoo-textbox-input" ref='searchBar' onChange={this.handleSearch.bind(this)} type="text" placeholder="Search..." />
            <span>             </span>
            <select 
            ref='sortBar'
            value={this.state.sortDir} 
            onChange={this.handleSort.bind(this)} >
            <option value=""> --- </option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </header>
          <br />
            <div className="row">
              {renderSearch}
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default ZooSearch;
