import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

//semiotic
//import { edgeData } from './data/flare.json';
import SemioticHierarchy from './components/SemioticHierarchy';
import { flareData } from './data/flare.js';
import { flareNodes } from './data/flareNodes.js';

//lodash
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// begin constants to move to another file later
// material ui styles
const styles = theme => ({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const edgeData = JSON.parse(flareData);
const nodeData = JSON.parse(flareNodes);
const DataBlick = ["#000000","#FDC219","#00BFF3","#F07AAE"]
const NurielStone = ["#8175AA", "#6FB899", "#31A1B3", "#CCB22B", "#A39FC9", "#94D0C0", "#959C9E", "#027B8E", "#9F8F12"]
const JewelBright = ["#EB1E2C","#FD6F30","#F9A729","#F9D23C","#F5BB68","#64CDCC","#91DCEA","#A4A4D5","#BBC9E5"]
const defaultColor = ["#D3D3D3"]
const demoColors = ["#000000"] // colorlogical
const semioticDefault = ['#00a2ce','#4d430c','#b3331d','#b6a756']

const colors = [
  {palleteName: "Default Color", hexValues: defaultColor},
  {palleteName: "Demo Color", hexValues: defaultColor},
  {palleteName: "Nuriel Stone", hexValues: NurielStone},
  {palleteName: "Jewel Bright", hexValues: JewelBright},
  {palleteName: "DataBlick", hexValues: DataBlick},
  {palleteName: "Semiotic", hexValues: semioticDefault},
]

// end constants to move to another file later

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      height: 300,
      width: 300,
      data: edgeData,
      nodeData: nodeData,
      color: JewelBright,
      colors: colors,
      edgeRender: "normal",
      nodeRender: "normal",
      edgeColor: "target",
      padAngle: 0.01,
      hoverAnnotation: true, 
      highlightOn: []
    };
  }

  clickCallBack = d => {
    if ( d ) {
      this.setState({
        highlightOn: [{
          type: 'highlight',
          ...d,
          style : {
            stroke: "#f3c",
            strokeWidth: 10,
            strokeOpacity: 1
          }
        }]
      });
    } else {
      this.setState({
        highlightOn: []
      });
    }
  }

  hoverCallBack = d => {
    const hoverAnnotation = [];

    console.log(
      '%c in on hover callback',
      'background: OLIVE',
      d
    );  

    // if we are actually hovering on something then we should call this function
    if ( d ) {
      // hoverAnnotation.push({
      //   type: 'highlight',
      //   ...d,
      //   style : {
      //     stroke: "#222222",
      //     strokeWidth: 2,
      //     strokeOpacity: 1
      //   }
      // });
      this.setState({
        hoverAnnotation: [{
          type: 'highlight',
          style : {
            stroke: "#222222",
            strokeWidth: 2,
            strokeOpacity: 1
          }
        }, { type: "frame-hover" }]
      }); //, () => this.applyMouseActionsToSheets(d, hoverAction, hoverField));
    } else {
      this.setState({
        hoverAnnotation: true
      });
    }
  }

  render() {
    const { classes } = this.props;

    console.log('this', this, this.state.data);
    return (
      <div className="App">
        <SemioticHierarchy
          className={classes.chart}
          edgeData={edgeData}
          color={this.state.color}
          defaultColor={defaultColor}
          width={this.state.width}
          height={this.state.height}
          nodeRender={this.state.nodeRender}
          edgeRender={this.state.edgeRender}
          hoverAnnotation={this.state.hoverAnnotation}
          hierarchyData={this.state.data}
          nodeData={nodeData}
          annotations={this.state.highlightOn}
          hoverCallBack={this.hoverCallBack}
          clickCallBack={this.clickCallBack}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);