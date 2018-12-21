import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

//semiotic
import { lesMisData } from './data/lesMis.js';
import flareData from './data/flare.json'
import { ResponsiveNetworkFrame } from 'semiotic';
import * as d3Scale from "d3-scale";

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

const dematrixifiedEdges = [
  { source: "a", target: "a", value: 11975},
  { source: "a", target: "b", value: 5871},
  { source: "a", target: "c", value: 8916},
  { source: "a", target: "d", value: 2868},
  { source: "b", target: "a", value: 1951},
  { source: "b", target: "b", value: 10048},
  { source: "b", target: "c", value: 2060},
  { source: "b", target: "d", value: 6171},
  { source: "c", target: "a", value: 8010},
  { source: "c", target: "b", value: 16145},
  { source: "c", target: "c", value: 8090},
  { source: "c", target: "d", value: 8045},
  { source: "d", target: "a", value: 1013},
  { source: "d", target: "b", value: 990},
  { source: "d", target: "c", value: 940},
  { source: "d", target: "d", value: 6907},
]

const data = [
  {"Has":"black","Prefers":"red","value":2868},
  {"Has":"blonde","Prefers":"red","value":6171},
  {"Has":"brown","Prefers":"red","value":8045},
  {"Has":"red","Prefers":"red","value":6907},
  {"Has":"black","Prefers":"brown","value":8916},
  {"Has":"blonde","Prefers":"brown","value":2060},
  {"Has":"brown","Prefers":"brown","value":8090},
  {"Has":"red","Prefers":"brown","value":940},
  {"Has":"black","Prefers":"blonde","value":5871},
  {"Has":"blonde","Prefers":"blonde","value":10048},
  {"Has":"brown","Prefers":"blonde","value":16145},
  {"Has":"red","Prefers":"blonde","value":990},
  {"Has":"black","Prefers":"black","value":11975},
  {"Has":"blonde","Prefers":"black","value":1951},
  {"Has":"brown","Prefers":"black","value":8010},
  {"Has":"red","Prefers":"black","value":1013}
];

const nodeSizeScale = d3Scale.scaleSqrt()
    .domain([1,1000])
    .range([1, 5]);

// end constants to move to another file later

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      height: 600,
      width: 600,
      data: JSON.parse(lesMisData),
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
    const lesMisDataParsed = JSON.parse(lesMisData);
    const type = "force";

    console.log('this', this, this.state.data, this.state.data[0].value, lesMisDataParsed, flareData);


    return (
      <div className="App" width={500} height={500}>
      <p>here!</p> 
      <ResponsiveNetworkFrame
        responsiveWidth
        edges={flareData}
        nodeIDAccessor={"child"}
        // edgeWidthAccessor={d=>d["value"]}
        nodeSizeAccessor={d => nodeSizeScale(d["SUM(Value)"]) || 1}
        edgeType={ type === "force" ? 'normal' : undefined }

        nodeStyle={(d, i) => ({
          fill: DataBlick[2],
          fillOpacity: 0.25,
          stroke: DataBlick[2],
          strokeOpacity: 0.6
        })}

        edgeStyle={(d, i) => ({
          fill: type === "force" ? '#fff' : DataBlick[2],
          fillOpacity: type === "force" ? 0 : .25,
          stroke: DataBlick[2],
          opacity: 0.5
        })} 

        networkType={{
          type: type,
          projection: "vertical",
          padAngle: 0.01,
          nodePadding: 1,
          forceManyBody: type === "force" ? -250 : undefined,
          edgeStrength: type === "force" ? 2 : undefined,
          distanceMax: type === "force" ? 500 : undefined,
          iterations: type === "force" ? 1000 : undefined,
          padding: 0
        }}

        annotations={[
          {
              type: "enclose-hull",
              ids: ["_",
                    "add",
                    "and",
                    "average",
                    "count",
                    "distinct",
                    "div",
                    "eq",
                    "fn",
                    "gt",
                    "gte",
                    "iff",
                    "isa",
                    "lt",
                    "lte",
                    "max",
                    "min",
                    "mod",
                    "mul",
                    "neq",
                    "not",
                    "or",
                    "orderby",
                    "range",
                    "select",
                    "stddev",
                    "sub",
                    "sum",
                    "update",
                    "variance",
                    "where",
                    "xor"
                  ],
              color: "#000",
              label: "these are methods!",
              strokeWidth: 1,
              padding: 20
          }
      ]}

      hoverAnnotation={true}
      />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);