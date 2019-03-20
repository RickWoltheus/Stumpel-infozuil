import React from 'react';
import c from 'classnames';

import './style.scss';

const Container = (props) => {
  const { small, large, children, className } = props;
  const classes = c('container', className, {
    'container--small': small,
    'container--large': large,
  },
  );
  return <div className={classes}>{children}</div>;
};

export default Container;
