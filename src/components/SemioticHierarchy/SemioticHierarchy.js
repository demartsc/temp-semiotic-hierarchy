import React from 'react';
import PropTypes from 'prop-types';

//semiotic
import { ResponsiveNetworkFrame } from 'semiotic';

//d3
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";

//lodash
import _ from 'lodash';

//material ui
import { withStyles } from '@material-ui/core/styles';
import { stackedArea } from '../../../node_modules/semiotic/lib/svg/lineDrawing';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const MIN_MARKER_RADIUS = 5;
const MAX_MARKER_RADIUS = 15;

class SemioticHierarchy extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        edgeData: [],
        nodeData: []
      }  
    }

    // unflatten function was obtained from stack overflow link below and modified slightly for use herein
    // https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
    unflatten = ( array, parent, tree ) => {
        tree = typeof tree !== 'undefined' ? tree : [];
        parent = typeof parent !== 'undefined' ? parent : { id: 0 };
    
        var children = _.filter( array, function(child){ return child.parent == parent.child; });
    
        if( !_.isEmpty( children )  ){
            if( parent.child == 'flare' ) {
                tree = Object.assign({}, parent, {"parent": null, "children": children});
            }
            else {
                parent['children'] = children;
            }
            _.each( children, (child) => { this.unflatten( array, child ); } );
        }  

        return tree;
    }

    buildNodeSizeScale = (nodeData, markerMinRadius, markerMaxRadius) => {
        if (!nodeData) {
          return () => {};
        }
        function remapper(d) {
          return parseFloat(d["valueMetric"] || 0) || 0;
        }
        return d3Scale.scaleSqrt()
          .domain(d3Array.extent(nodeData, remapper))
          .range([
            markerMinRadius*1 || MIN_MARKER_RADIUS*1,
            markerMaxRadius*1 || MAX_MARKER_RADIUS*1,
          ]);
    }

    componentDidMount() {
        console.log('in semiotic component mount', this.props.hierarchyData);

        //let edgeData = this.unflatten(this.props.hierarchyData,{child: 'flare'});
        const edgeData = this.props.edgeData
        console.log('edgeData', edgeData, this.props.hierarchyData);

        // const nodeData = _.uniqBy(this.props.hierarchyData, 'name'); //_.filter(_.uniqBy(this.props.hierarchyData, 'child'), (o) => { return o.child !== 'flare'; });
        const nodeData = this.props.nodeData;
        console.log('nodeData', nodeData);

        const nodeSizeScale = this.buildNodeSizeScale(nodeData, MIN_MARKER_RADIUS, MAX_MARKER_RADIUS);

        this.setState({
            edgeData: edgeData,
            nodeData: nodeData, 
            nodeSizeScale: nodeSizeScale
        })
    }
  
    render() {
        const {
            classes,
            color,
            defaultColor,
            height,
            width,
            hierarchyType,
            hierarchyData,
            nodeRender,
            edgeRender,
            hoverAnnotation,
            type, 
            annotations
        } = this.props;

        // create the custom tooltip for semiotic
        const popOver = (d) => {
            // console.log('in tooltip', d);
            return (
                <Paper style={{'padding': '5px'}}>
                    <Typography> {'parent'}: {d.parent.name} </Typography>
                    <Typography> {'child'}: {d.name} </Typography>
                    <Typography> {'value'}: {d.valueMetric} </Typography>
                </Paper>
            );
        }
        

        console.log('hierarchy Data in sub component', this.props.highlightOn);
        return (
            <div className="semiotic-hierarchy" style={{ padding: '1%', height: height, width: width, float: 'none', margin: '0 auto' }}>
                <ResponsiveNetworkFrame
                    responsiveWidth
                    responsiveHeight
                    edges={this.state.edgeData}
                    nodeIDAccessor={d => d.name}
                    nodeSizeAccessor={
                        d => this.state.nodeSizeScale(d.valueMetric || 0)
                    } // this breaks the treemap and circlepack
                    nodeRenderMode={nodeRender}
                    edgeRenderMode={edgeRender}
                    nodeStyle={(d,i) => ({ fill: color[d.depth] || defaultColor , stroke: color[d.depth] || defaultColor })}
                    edgeStyle={(d,i) => ({ fill: defaultColor, stroke: defaultColor, opacity: 0.5 })}
                    // edgeWidthAccessor={d => d.valueMetric || 0}
                    hoverAnnotation={[{
                        type: 'highlight',
                        style : {
                          stroke: "#222222",
                          strokeWidth: 2,
                          strokeOpacity: 1
                        }
                      }, { type: "frame-hover" }]}
                    // hoverAnnotation={hoverAnnotation}
                    // customHoverBehavior={this.props.hoverCallBack}
                    customClickBehavior={this.props.clickCallBack}
                    annotations={annotations}
                    networkType={{
                        type: "tree",
                        zoom: true,
                        projection: "vertical",
                        nodePadding: 1,
                        forceManyBody: -15,
                        edgeStrength: 1.5,
                        padding: type === "treemap" ? 3 : type === "circlepack" ? 2 : 0,
                        //hierarchySum: d => d.valueMetric || 0
                    }}
                    tooltipContent={d => popOver(d)}
                />
            </div>
        );
    }
}

// SemioticHierarchy.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
  
export default SemioticHierarchy;
  