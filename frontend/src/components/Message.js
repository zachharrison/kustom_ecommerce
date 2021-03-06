import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => (
  <Alert variant={variant}>{children}</Alert>
);

Message.defaultPropes = {
  variant: 'info',
};

export default Message;
