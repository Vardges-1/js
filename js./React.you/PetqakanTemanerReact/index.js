import React, {PureComponent} from 'react'
import ArticleList from './ArticleList/index'
import articles from '../fixo'
import 'bootstrap/dist/css/bootstrap.min.css'

// isk yete ogtagorcenq Purcomponent vor mer vertualni dom anntat perestroyka chani u-
// mer Article functiona class function anenq u eli poxenq Purcomponent sovorakan componenti tex@ -
//  u inchi chi ashxatum et metod@ index.js mecj vor PurCompobnent grenq vorovhetev, mer setState reverti mech sxmveluc heto -
// vertualni domna mer sksum perestroyka linel u mechi ArticleList vor@ index.jsi mecha bayv mi anqam revert aneluc heto el chi ashxatum -
// vorovehetev PurComponenta nshac, poxumes Cömponent sovorakan ashxatauma eli, Purcomponenti depqum propsner@ chi poxvum
// menak poxvuma this.props@  ArticleListi mechi

class App extends PureComponent{

    state = {
        reverted: false
    }  
    
    // pri sozdanie this mi sozdayom lokalnuyu copy etovo array s pomshyu slice() i teper u nashevo App -
    // budet svoya copy articles u es copia mijocov karoxenq ashxatel bayc esel etqan hajox chi dzev@
    // articles = articles.slice()

render(){
    // stex conolei ognutyam imanumenq click exela u erku vor hertakanutyun@ haskananq vonca gnacel -
    // this.state grumenq vr imananq tugenq sostayaniyan poxvela te che
    console.log('-----', 2, this.state)
    return(
        <div className="container">
            <div className="jumbotron">
            <h1 className="display-3">
                App Name
                <button className="btn" onClick={this.revert}>Revert</button>
                </h1>
            </div>
            {/* etim mi gavarim this.state reverted nash onClick i yesel najato to method reversemenyaet nash spiisok mestami */}
            {/* Article list poluchayet array statey kam teqvac kamel svorakan u reverse() menak chi veradarcnum teqvac -
            array nayev poxuma objekt@ silkayov */}
            {/* <ArticleList articles = {this.state.reverted ? articles.reverse() : articles}/> */}
                 {/* ----- */}
            {/* stex grumenq this vorovhetev vervnelenq arel articles =articles */}
            {/* <ArticleList articles = {this.articles}/>  */}
            {/* ------ */}
            {/* ameniaschisht variant@ esa petqa copy anel vor article vor silkayov chpoxvi u copyn nor reverse anel() */}
            <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles}/> 
        </div>
    )
}

revert = () =>  {
      // u menq senc chenq tequm hima global articles ayl en vor mer this-uma aprum bayc esel lav variant chi
    //   this.articles.reverse()
      this.setState({
   
        reverted: !this.state.reverted
    })
}

// revert = () => this.setState({
   
//     reverted: !this.state.reverted
// })
}


export default App;