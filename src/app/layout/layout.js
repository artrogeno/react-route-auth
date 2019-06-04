import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { LayoutContext, layout } from 'app/public/contexts/LayoutContext'

class Layout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.toggleSideBar = () => {
      this.setState(state => ({
        layout: this.getLayout(state.layout)
      }));
    };

    this.state = {
      layout: layout,
      toggleSideBar: this.toggleSideBar
    }
  }

  getLayout(layout) {
    let { config } = layout
    // MANU
    config.sidebar = !config.sidebar
    return layout
  }

  componentDidUpdate() {
    let updateLayout = { ...this.state.layout }
    let { config } = updateLayout
    if (config.location.pathname !== this.props.location.pathname) {
      config.match = this.props.match
      config.location = this.props.location
      config.history = this.props.history
      this.setState({ layout: updateLayout })
    }
  }

  componentDidMount() {
    this.setState({ layout: layout })
  }

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
        {this.props.children}
      </LayoutContext.Provider>
    )
  }
}

export default withRouter(Layout)
