import React from 'react';
import Card from './card';
import myData from './gamesext.json';


class ZooModal extends React.Component {

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
  render() {
    var category = this.state.gamedata;
    var renderResult = [];
    for(var i=0; i<category.length; i++){
      console.log(category[i].title);
      renderResult.push(
        <Card year = {category[i].release_year}
          name = {category[i].title}>
        </Card>
        );
    }
    return (
    <div className="zoo-modal">
      <button className="import-textbox-button btn btn-default col-md-2 col-md-offset-5"  
          id="change" onClick={() => this.props.zooSearch()}>Search
        &nbsp;<span className="glyphicon  glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </button>
        <div className="centered-zoo-modal">
          <div className="zoo-modal-model">
            <div className="row">
            {renderResult}
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default ZooModal;
