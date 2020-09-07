import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import GithubLogo from '../../images/GitHub_Logo.png';
import GithubCat from '../../images/GitHub_Cat.png';
import LinkedIn from '../../images/linkedin.svg';
import {withRouter} from 'react-router-dom';

class AboutMe extends Component {

    viewResume = () => {
        const {history} = this.props;
        if(history) history.push('/resume?#zoom=75');
    }

    render() {
        return (
            <div className="aboutMePage">
                
                <div className="externalButtons">
                    <a href='https://github.com'>
                        <button className="externalSource" >
                            <img src={GithubCat} />
                            <img src={GithubLogo} />
                        </button>
                    </a>
                    <a href='https://linkedin.com'>
                        <button className="externalSource">
                            <img src={LinkedIn} />  
                        </button>
                    </a>

                    <button className="externalSource" onClick={this.viewResume}>
                        Resume <Icon name='file alternate' />  
                    </button>
                </div>

                <p> Lorem ipsum dolor sit amet, facer graece sanctus has te, adhuc reprimique pro no. 
                    Pro possit luptatum splendide te, ex sale postulant consequuntur duo. Modo senserit
                    nec ne, sed cu quem tation labores, nihil tractatos at vis. Tota dictas adversarium 
                    nec no, solum utamur invenire nam no, probo munere cum ei. Per malorum urbanitas at, 
                    oportere cotidieque cum ea.
                </p>
                <p> Te usu fabulas vocibus liberavisse, modo partem scripta duo at. Libris facilisi ea nec,
                    per ea probatus pertinax. Sale accusata vix et, dicta euismod temporibus eum an. Ex 
                    has zril decore mediocrem, pri et copiosae comprehensam. Duis accusam ex has. Has ad 
                    probo incorrupte, eu admodum alienum his. Reque timeam eam no, usu an suas illum cotidieque.
                </p>
                <p> Sapientem torquatos adipiscing est at. Quo ferri fastidii persecuti ut, utroque luptatum
                    et ius, duis augue honestatis mea ea. Eu has omnes placerat, facer legere facilisi ex his.
                    Sumo exerci vim te, vel explicari definitiones te, quo quidam discere iracundia te.
                    Splendide interpretaris vis at, ea vix habeo omnes tamquam, vis alia nullam accumsan an. 
                    Vix eu inani affert animal. 
                </p>
                <p>Vis lorem eligendi no. Eirmod detracto nam cu, eum ne sanctus habemus corpora. Eam affert 
                    soluta mnesarchum ad, omnis accusamus ius et, ea eos luptatum inimicus appellantur. Has 
                    et utamur veritus nominavi, sed petentium intellegat dissentiunt ad. Has alii oratio 
                    quodsi ex. Id est dicta persius perfecto, in aperiri invenire vim. Quo in laudem
                    sanctus ponderum. Salutandi consulatu assentior mel ne.
                </p>

            </div>
        );
    }
}

export default withRouter(AboutMe);