import React, { Component, Fragment } from 'react';
import ColumnDefinitionContainer from '../columnDefinition/ColumnDefinitionContainer';
import RuleEngineHome from '../rule-engine/RuleEngineHome';
import { connect } from 'react-redux';
import {
  getIndices
} from '../store/actions/column-definition-actions';
import {
  getSettings
} from '../store/actions/rule-engine-actions';

import {
  EuiTabbedContent
} from '@elastic/eui';

class HomePage extends Component {
  constructor(props) {
    super(props);



    this.tabs = [{
      id: 'generalSettings',
      name: 'General Settings',
      content: (
        <Fragment>
         General Settings
        </Fragment>
      ),
    }, {
      id: 'columnDefinition',
      name: 'Column Definition',
      content: (
        <ColumnDefinitionContainer />
      ),
    }, {
      id: 'ruleEngine',
      name: 'Rule Engine',
      content: (
        <RuleEngineHome/>
      ),
    }];
  }
  componentDidMount() {
    this.props.getIndices();
    this.props.getSettings();
  }



  render() {
    return (
      <EuiTabbedContent
        tabs={this.tabs}
        initialSelectedTab={this.tabs[2]}
      />
    );
  }
}
const mapStateToProps = ({
    columnDefinitionReducer
  }) => {
    return {
      columnDefinitionReducer
    }
  }
  const actions = {
    getIndices,getSettings
  }
  export default connect(mapStateToProps, actions)(HomePage)