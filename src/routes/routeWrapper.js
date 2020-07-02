import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
// import { useSelector } from 'react-redux';

// import { AuthSignedSelector } from '../Redux/Auth/selector';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = ''// useSelector(AuthSignedSelector);

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/mentores" />
  }

  return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}

export { RouteWrapper }
