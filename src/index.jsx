class GraphBox extends React.Component {
	/**

	 */

	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<div id={this.props.id + "GraphBox"} className="graph-box">
				<svg id={this.props.id + "Svg"} className="graph-svg"></svg>
				<div className={"graph-toolbox " + this.props.tbPosition}></div>
			</div>
		);
	}
}


function drawGraphBox(id, graph, root, simulationCfg=null, graphEvents=null, tb=true, tbPosition="east") {
	ReactDOM.render(
		<GraphBox id={id}
				  graph={graph}
				  simulation={simulationCfg}
				  graphEvents={graphEvents}
				  tb={tb}
				  tbPosition={tbPosition}/>,
		root
	)
}