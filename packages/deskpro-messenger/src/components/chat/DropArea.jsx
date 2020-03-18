import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from "react-intl";

class DropArea extends PureComponent {
  static propTypes = {
    progress: PropTypes.number,
    isDragActive: PropTypes.bool
  };

  static defaultProps = {
    progress: -1
  };

  renderDrop = () =>
    <div>
      <i className="fa fa-3x fa-image" />
      <p>
        <FormattedMessage
          id="chat.dragdrop.drag_and_drop"
          defaultMessage="Drag and drop file here"
        />
      </p>
    </div>;

  renderProgress = () => {
    const { progress } = this.props;
    return (
      <div>
        {progress > 0 ? <span>{progress} %</span> : null}
        <p><FormattedMessage
          id="chat.dragdrop.uploading"
          defaultMessage="Uploading"
        />...</p>
      </div>
    );
  };

  render() {
    const {
      isDragActive,
      progress,
      ...inputProps
    } = this.props;

    return (
      <Fragment>
        <div
          className="dpmsg-ChatMessagesDropZone"
          style={{
            display: isDragActive || progress !== -1 ? 'block' : 'none'
          }}
        >
          {progress === -1 ? this.renderDrop() : this.renderProgress()}
        </div>
        <input {...inputProps} />
      </Fragment>
    );
  }
}

export default compose(
  injectIntl
)(DropArea);