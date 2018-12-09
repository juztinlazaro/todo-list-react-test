import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

const ContactItem = props => {
  const { anchorEl, handleClick, handleClose } = props;
  const open = Boolean(anchorEl);
  return (
    <div className="contact-items">
      <div className="contact-item">
        <div className="info">
          <span className="contact-name">Some Contact</span>

          <span className="contact-position">Web developer</span>
        </div>

        <div className="info">
          <span className="contact-mobile">
            <i className="fas fa-phone" /> (214) 5555-5555
          </span>

          <span className="contact-email">
            <i className="far fa-envelope" /> foo@bar.com
          </span>
        </div>

        <div className="contact-action">
          <Button
            aria-owns={open ? 'simple-popper' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i className="fas fa-align-justify" />
          </Button>

          <Popover
            className="contact contact-action action-buttons"
            id="simple-popper"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorPosition={{ top: 300, left: 500 }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <button className="_normalize-button">Edit</button>
            <button className="_normalize-button">Delete</button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
