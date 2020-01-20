import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { Icon, ToggleableList } from '@deskpro/react-components';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import ChatSettings from './ChatSettings';
import EmbedWidget from './EmbedWidget';
import MessengerSettings from './MessengerSettings';
import StyleSettings from './StyleSettings';
import TicketSettings from './TicketSettings';

class Settings extends React.Component {
  static propTypes = {
    settings: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    chatDepartments: PropTypes.object,
    ticketDepartments: PropTypes.object,
    chatCustomFields: PropTypes.object
  };

  static defaultProps = {
    settings: fromJS({}),
  };

  render() {
    const {
      settings,
      handleChange,
      chatDepartments,
      chatCustomFields,
      ticketDepartments,
    } = this.props;

    return (
      <div className="dp-ms-container">
        <div>
          <Icon name={faCog} /> Site Widget & Chat
        </div>

        <ToggleableList on="click" toggle="opened">
          <StyleSettings
            id="style"
            config={settings}
            handleChange={handleChange}
          />
          <ChatSettings
            id="chat"
            config={settings}
            handleChange={handleChange}
            chatDepartments={chatDepartments}
            ticketDepartments={ticketDepartments}
            chatCustomFields={chatCustomFields}
          />
          <MessengerSettings
            id="messenger"
            config={settings}
            handleChange={handleChange}
          />
          <TicketSettings
            id="ticket"
            config={settings}
            handleChange={handleChange}
            ticketDepartments={ticketDepartments}
          />
          <EmbedWidget
            id="embed"
            config={settings}
            handleChange={handleChange}
          />
        </ToggleableList>
        { this.props.children }
      </div>
    );
  }
}

export default Settings;
