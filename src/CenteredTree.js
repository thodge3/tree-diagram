import React from "react";
import Tree from "react-d3-tree";
import treeData from "./data.json";


const containerStyles = {
  width: '100%',
  height: '100vh',
}

export default class CenteredTree extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 3
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
        data={treeData}
        orientation={"vertical"}
        translate={this.state.translate}
        separation={{ siblings: 2, nonSiblings: 2 }}
        transitionDuration={600}
        initialDepth={2}
      />
      </div>
    );
  }
}
