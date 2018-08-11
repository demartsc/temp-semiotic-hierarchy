import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

//semiotic
//import { edgeData } from './data/flare.json';
import SemioticHierarchy from './components/SemioticHierarchy';

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

const edgeData = JSON.parse('{"child":"flare","parent":null,"children":[{"child":"display","colorMetric":"1","Id":"flare.display","last dot":"6","parent":"flare","second to last dot":"0","valueMetric":null,"children":[{"child":"DirtySprite","colorMetric":"2","Id":"flare.display.DirtySprite","last dot":"14","parent":"display","second to last dot":"6","valueMetric":"8833"},{"child":"LineSprite","colorMetric":"2","Id":"flare.display.LineSprite","last dot":"14","parent":"display","second to last dot":"6","valueMetric":"1732"},{"child":"RectSprite","colorMetric":"2","Id":"flare.display.RectSprite","last dot":"14","parent":"display","second to last dot":"6","valueMetric":"3623"},{"child":"TextSprite","colorMetric":"2","Id":"flare.display.TextSprite","last dot":"14","parent":"display","second to last dot":"6","valueMetric":"10066"}]},{"child":"flex","colorMetric":"1","Id":"flare.flex","last dot":"6","parent":"flare","second to last dot":"0","valueMetric":null,"children":[{"child":"FlareVis","colorMetric":"2","Id":"flare.flex.FlareVis","last dot":"11","parent":"flex","second to last dot":"6","valueMetric":"4116"}]}]}');
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
      color: JewelBright,
      colors: colors,
      edgeRender: "normal",
      nodeRender: "normal",
      edgeColor: "target",
      padAngle: 0.01,
      hoverAnnotation: false
    };
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
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);