import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import myData from './gamesext.json';


class ZooSearch extends React.Component {

  constructor() {
      super();
      this.state = {
        open:1,
        text:"Back",
        searchText:"Start typing .....",
        searchResult:[" "],
        gamedata:myData
      };
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
      for(i=0; i<4; i++){
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
        <Card year = {category[i].release_year}
          name = {category[i].title}>
        </Card>
        
      );
      }
    return (
    <div className="zoo-modal">
        <div className="centered-zoo-modal">
          <div className="zoo-modal-model">
            <input className="zoo-textbox-input" ref='searchBar' onChange={this.handleSearch.bind(this)} type="text" placeholder="Search..." />
            <h3 className="zoo-modal-text">{this.state.searchText}</h3>
            <div className="row">
              {renderSearch}
            </div>
          </div> 

          <button className="import-textbox-button btn btn-default col-md-2 col-md-offset-5"  
              id="change" onClick={() => this.props.zooModal()}>Back
            &nbsp;<span className="glyphicon  glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </button> 
        </div>
      </div>
    );
  }
}

export default ZooSearch;
