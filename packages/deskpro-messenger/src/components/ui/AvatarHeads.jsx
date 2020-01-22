import React from 'react';
import PropTypes from 'prop-types';

class AvatarHeads extends React.PureComponent {
  static propTypes = {
    agentsAvailable: PropTypes.array
  };

  static defaultProps = {
    agentsAvailable: []
  };

  render() {
    const { agentsAvailable } = this.props;
    if (!Object.keys(agentsAvailable).length) {
      return null;
    }
    return (
      <div className="dpmsg-AvatarHeadsList">
        {Object.values(agentsAvailable).map(agent => (
          <div className="dpmsg-AvatarHeadsIcon">
            <img src={agent.avatar} alt="" />
          </div>
        ))}
      </div>
    );
  }
}

export default AvatarHeads;
