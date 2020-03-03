export const flareData = `
{
    "name": "flare",
    "children": [
     {
      "name": "analytics",
      "children": [
       {
        "name": "cluster",
        "children": [
         {"name": "AgglomerativeCluster", "valueMetric": 3938},
         {"name": "CommunityStructure", "valueMetric": 3812},
         {"name": "HierarchicalCluster", "valueMetric": 6714},
         {"name": "MergeEdge", "valueMetric": 743}
        ]
       },
       {
        "name": "graph",
        "children": [
         {"name": "BetweennessCentrality", "valueMetric": 3534},
         {"name": "LinkDistance", "valueMetric": 5731},
         {"name": "MaxFlowMinCut", "valueMetric": 7840},
         {"name": "ShortestPaths", "valueMetric": 5914},
         {"name": "SpanningTree", "valueMetric": 3416}
        ]
       },
       {
        "name": "optimization",
        "children": [
         {"name": "AspectRatioBanker", "valueMetric": 7074}
        ]
       }
      ]
     },
     {
      "name": "animate",
      "children": [
       {"name": "Easing", "valueMetric": 17010},
       {"name": "FunctionSequence", "valueMetric": 5842},
       {
        "name": "interpolate",
        "children": [
         {"name": "ArrayInterpolator", "valueMetric": 1983},
         {"name": "ColorInterpolator", "valueMetric": 2047},
         {"name": "DateInterpolator", "valueMetric": 1375},
         {"name": "Interpolator", "valueMetric": 8746},
         {"name": "MatrixInterpolator", "valueMetric": 2202},
         {"name": "NumberInterpolator", "valueMetric": 1382},
         {"name": "ObjectInterpolator", "valueMetric": 1629},
         {"name": "PointInterpolator", "valueMetric": 1675},
         {"name": "RectangleInterpolator", "valueMetric": 2042}
        ]
       },
       {"name": "ISchedulable", "valueMetric": 1041},
       {"name": "Parallel", "valueMetric": 5176},
       {"name": "Pause", "valueMetric": 449},
       {"name": "Scheduler", "valueMetric": 5593},
       {"name": "Sequence", "valueMetric": 5534},
       {"name": "Transition", "valueMetric": 9201},
       {"name": "Transitioner", "valueMetric": 19975},
       {"name": "TransitionEvent", "valueMetric": 1116},
       {"name": "Tween", "valueMetric": 6006}
      ]
     },
     {
      "name": "data",
      "children": [
       {
        "name": "converters",
        "children": [
         {"name": "Converters", "valueMetric": 721},
         {"name": "DelimitedTextConverter", "valueMetric": 4294},
         {"name": "GraphMLConverter", "valueMetric": 9800},
         {"name": "IDataConverter", "valueMetric": 1314},
         {"name": "JSONConverter", "valueMetric": 2220}
        ]
       },
       {"name": "DataField", "valueMetric": 1759},
       {"name": "DataSchema", "valueMetric": 2165},
       {"name": "DataSet", "valueMetric": 586},
       {"name": "DataSource", "valueMetric": 3331},
       {"name": "DataTable", "valueMetric": 772},
       {"name": "DataUtil", "valueMetric": 3322}
      ]
     },
     {
      "name": "display",
      "children": [
       {"name": "DirtySprite", "valueMetric": 8833},
       {"name": "LineSprite", "valueMetric": 1732},
       {"name": "RectSprite", "valueMetric": 3623},
       {"name": "TextSprite", "valueMetric": 10066}
      ]
     },
     {
      "name": "flex",
      "children": [
       {"name": "FlareVis", "valueMetric": 4116}
      ]
     },
     {
      "name": "physics",
      "children": [
       {"name": "DragForce", "valueMetric": 1082},
       {"name": "GravityForce", "valueMetric": 1336},
       {"name": "IForce", "valueMetric": 319},
       {"name": "NBodyForce", "valueMetric": 10498},
       {"name": "Particle", "valueMetric": 2822},
       {"name": "Simulation", "valueMetric": 9983},
       {"name": "Spring", "valueMetric": 2213},
       {"name": "SpringForce", "valueMetric": 1681}
      ]
     },
     {
      "name": "query",
      "children": [
       {"name": "AggregateExpression", "valueMetric": 1616},
       {"name": "And", "valueMetric": 1027},
       {"name": "Arithmetic", "valueMetric": 3891},
       {"name": "Average", "valueMetric": 891},
       {"name": "BinaryExpression", "valueMetric": 2893},
       {"name": "Comparison", "valueMetric": 5103},
       {"name": "CompositeExpression", "valueMetric": 3677},
       {"name": "Count", "valueMetric": 781},
       {"name": "DateUtil", "valueMetric": 4141},
       {"name": "Distinct", "valueMetric": 933},
       {"name": "Expression", "valueMetric": 5130},
       {"name": "ExpressionIterator", "valueMetric": 3617},
       {"name": "Fn", "valueMetric": 3240},
       {"name": "If", "valueMetric": 2732},
       {"name": "IsA", "valueMetric": 2039},
       {"name": "Literal", "valueMetric": 1214},
       {"name": "Match", "valueMetric": 3748},
       {"name": "Maximum", "valueMetric": 843},
       {
        "name": "methods",
        "children": [
         {"name": "add", "valueMetric": 593},
         {"name": "and", "valueMetric": 330},
         {"name": "average", "valueMetric": 287},
         {"name": "count", "valueMetric": 277},
         {"name": "distinct", "valueMetric": 292},
         {"name": "div", "valueMetric": 595},
         {"name": "eq", "valueMetric": 594},
         {"name": "fn", "valueMetric": 460},
         {"name": "gt", "valueMetric": 603},
         {"name": "gte", "valueMetric": 625},
         {"name": "iff", "valueMetric": 748},
         {"name": "isa", "valueMetric": 461},
         {"name": "lt", "valueMetric": 597},
         {"name": "lte", "valueMetric": 619},
         {"name": "max", "valueMetric": 283},
         {"name": "min", "valueMetric": 283},
         {"name": "mod", "valueMetric": 591},
         {"name": "mul", "valueMetric": 603},
         {"name": "neq", "valueMetric": 599},
         {"name": "not", "valueMetric": 386},
         {"name": "or", "valueMetric": 323},
         {"name": "orderby", "valueMetric": 307},
         {"name": "range", "valueMetric": 772},
         {"name": "select", "valueMetric": 296},
         {"name": "stddev", "valueMetric": 363},
         {"name": "sub", "valueMetric": 600},
         {"name": "sum", "valueMetric": 280},
         {"name": "update", "valueMetric": 307},
         {"name": "variance", "valueMetric": 335},
         {"name": "where", "valueMetric": 299},
         {"name": "xor", "valueMetric": 354},
         {"name": "_", "valueMetric": 264}
        ]
       },
       {"name": "Minimum", "valueMetric": 843},
       {"name": "Not", "valueMetric": 1554},
       {"name": "Or", "valueMetric": 970},
       {"name": "Query", "valueMetric": 13896},
       {"name": "Range", "valueMetric": 1594},
       {"name": "StringUtil", "valueMetric": 4130},
       {"name": "Sum", "valueMetric": 791},
       {"name": "Variable", "valueMetric": 1124},
       {"name": "Variance", "valueMetric": 1876},
       {"name": "Xor", "valueMetric": 1101}
      ]
     },
     {
      "name": "scale",
      "children": [
       {"name": "IScaleMap", "valueMetric": 2105},
       {"name": "LinearScale", "valueMetric": 1316},
       {"name": "LogScale", "valueMetric": 3151},
       {"name": "OrdinalScale", "valueMetric": 3770},
       {"name": "QuantileScale", "valueMetric": 2435},
       {"name": "QuantitativeScale", "valueMetric": 4839},
       {"name": "RootScale", "valueMetric": 1756},
       {"name": "Scale", "valueMetric": 4268},
       {"name": "ScaleType", "valueMetric": 1821},
       {"name": "TimeScale", "valueMetric": 5833}
      ]
     },
     {
      "name": "util",
      "children": [
       {"name": "Arrays", "valueMetric": 8258},
       {"name": "Colors", "valueMetric": 10001},
       {"name": "Dates", "valueMetric": 8217},
       {"name": "Displays", "valueMetric": 12555},
       {"name": "Filter", "valueMetric": 2324},
       {"name": "Geometry", "valueMetric": 10993},
       {
        "name": "heap",
        "children": [
         {"name": "FibonacciHeap", "valueMetric": 9354},
         {"name": "HeapNode", "valueMetric": 1233}
        ]
       },
       {"name": "IEvaluable", "valueMetric": 335},
       {"name": "IPredicate", "valueMetric": 383},
       {"name": "IvalueMetricProxy", "valueMetric": 874},
       {
        "name": "math",
        "children": [
         {"name": "DenseMatrix", "valueMetric": 3165},
         {"name": "IMatrix", "valueMetric": 2815},
         {"name": "SparseMatrix", "valueMetric": 3366}
        ]
       },
       {"name": "Maths", "valueMetric": 17705},
       {"name": "Orientation", "valueMetric": 1486},
       {
        "name": "palette",
        "children": [
         {"name": "ColorPalette", "valueMetric": 6367},
         {"name": "Palette", "valueMetric": 1229},
         {"name": "ShapePalette", "valueMetric": 2059},
         {"name": "SizePalette", "valueMetric": 2291}
        ]
       },
       {"name": "Property", "valueMetric": 5559},
       {"name": "Shapes", "valueMetric": 19118},
       {"name": "Sort", "valueMetric": 6887},
       {"name": "Stats", "valueMetric": 6557},
       {"name": "Strings", "valueMetric": 22026}
      ]
     },
     {
      "name": "vis",
      "children": [
       {
        "name": "axis",
        "children": [
         {"name": "Axes", "valueMetric": 1302},
         {"name": "Axis", "valueMetric": 24593},
         {"name": "AxisGridLine", "valueMetric": 652},
         {"name": "AxisLabel", "valueMetric": 636},
         {"name": "CartesianAxes", "valueMetric": 6703}
        ]
       },
       {
        "name": "controls",
        "children": [
         {"name": "AnchorControl", "valueMetric": 2138},
         {"name": "ClickControl", "valueMetric": 3824},
         {"name": "Control", "valueMetric": 1353},
         {"name": "ControlList", "valueMetric": 4665},
         {"name": "DragControl", "valueMetric": 2649},
         {"name": "ExpandControl", "valueMetric": 2832},
         {"name": "HoverControl", "valueMetric": 4896},
         {"name": "IControl", "valueMetric": 763},
         {"name": "PanZoomControl", "valueMetric": 5222},
         {"name": "SelectionControl", "valueMetric": 7862},
         {"name": "TooltipControl", "valueMetric": 8435}
        ]
       },
       {
        "name": "data",
        "children": [
         {"name": "Data", "valueMetric": 20544},
         {"name": "DataList", "valueMetric": 19788},
         {"name": "DataSprite", "valueMetric": 10349},
         {"name": "EdgeSprite", "valueMetric": 3301},
         {"name": "NodeSprite", "valueMetric": 19382},
         {
          "name": "render",
          "children": [
           {"name": "ArrowType", "valueMetric": 698},
           {"name": "EdgeRenderer", "valueMetric": 5569},
           {"name": "IRenderer", "valueMetric": 353},
           {"name": "ShapeRenderer", "valueMetric": 2247}
          ]
         },
         {"name": "ScaleBinding", "valueMetric": 11275},
         {"name": "Tree", "valueMetric": 7147},
         {"name": "TreeBuilder", "valueMetric": 9930}
        ]
       },
       {
        "name": "events",
        "children": [
         {"name": "DataEvent", "valueMetric": 2313},
         {"name": "SelectionEvent", "valueMetric": 1880},
         {"name": "TooltipEvent", "valueMetric": 1701},
         {"name": "VisualizationEvent", "valueMetric": 1117}
        ]
       },
       {
        "name": "legend",
        "children": [
         {"name": "Legend", "valueMetric": 20859},
         {"name": "LegendItem", "valueMetric": 4614},
         {"name": "LegendRange", "valueMetric": 10530}
        ]
       },
       {
        "name": "operator",
        "children": [
         {
          "name": "distortion",
          "children": [
           {"name": "BifocalDistortion", "valueMetric": 4461},
           {"name": "Distortion", "valueMetric": 6314},
           {"name": "FisheyeDistortion", "valueMetric": 3444}
          ]
         },
         {
          "name": "encoder",
          "children": [
           {"name": "ColorEncoder", "valueMetric": 3179},
           {"name": "Encoder", "valueMetric": 4060},
           {"name": "PropertyEncoder", "valueMetric": 4138},
           {"name": "ShapeEncoder", "valueMetric": 1690},
           {"name": "SizeEncoder", "valueMetric": 1830}
          ]
         },
         {
          "name": "filter",
          "children": [
           {"name": "FisheyeTreeFilter", "valueMetric": 5219},
           {"name": "GraphDistanceFilter", "valueMetric": 3165},
           {"name": "VisibilityFilter", "valueMetric": 3509}
          ]
         },
         {"name": "IOperator", "valueMetric": 1286},
         {
          "name": "label",
          "children": [
           {"name": "Labeler", "valueMetric": 9956},
           {"name": "RadialLabeler", "valueMetric": 3899},
           {"name": "StackedAreaLabeler", "valueMetric": 3202}
          ]
         },
         {
          "name": "layout",
          "children": [
           {"name": "AxisLayout", "valueMetric": 6725},
           {"name": "BundledEdgeRouter", "valueMetric": 3727},
           {"name": "CircleLayout", "valueMetric": 9317},
           {"name": "CirclePackingLayout", "valueMetric": 12003},
           {"name": "DendrogramLayout", "valueMetric": 4853},
           {"name": "ForceDirectedLayout", "valueMetric": 8411},
           {"name": "IcicleTreeLayout", "valueMetric": 4864},
           {"name": "IndentedTreeLayout", "valueMetric": 3174},
           {"name": "Layout", "valueMetric": 7881},
           {"name": "NodeLinkTreeLayout", "valueMetric": 12870},
           {"name": "PieLayout", "valueMetric": 2728},
           {"name": "RadialTreeLayout", "valueMetric": 12348},
           {"name": "RandomLayout", "valueMetric": 870},
           {"name": "StackedAreaLayout", "valueMetric": 9121},
           {"name": "TreeMapLayout", "valueMetric": 9191}
          ]
         },
         {"name": "Operator", "valueMetric": 2490},
         {"name": "OperatorList", "valueMetric": 5248},
         {"name": "OperatorSequence", "valueMetric": 4190},
         {"name": "OperatorSwitch", "valueMetric": 2581},
         {"name": "SortOperator", "valueMetric": 2023}
        ]
       },
       {"name": "Visualization", "valueMetric": 16540}
      ]
     }
    ]
   }`;