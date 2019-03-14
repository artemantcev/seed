import React from 'react';
import {connect} from 'react-redux';
import {
  hideRuleEngineReportsForm,
  updateReportText,
  updateReport,
  deleteReport
} from '../store/actions/rule-engine-actions';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiFlexGroup,
  EuiFlexItem,
  EuiInMemoryTable,
  EuiButton,
  EuiLink,
  EuiOverlayMask,
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiSelect
} from '@elastic/eui';

const hideReportForm=(props)=>{
  props.hideRuleEngineReportsForm();
}

 const updateSeletedReport=(props)=>{
  let {reportsState} = props.RuleEngineReducer;
  let selectedReport = reportsState.selectedReport;
  props.updateReport(selectedReport);

 }

 const deleteSelectedReport=(props)=>{
  let {reportsState} = props.RuleEngineReducer;
  let selectedReport = reportsState.selectedReport;
  props.deleteReport(selectedReport);
 }

 const updateReportTextBox=(props,e,type)=>{
    props.updateReportText({value:e.target.value,type:type})
 }

const ruleEngineReportsFrom = props => {
  let {reportsState,aliases} = props.RuleEngineReducer;
  let selectedReport = reportsState.selectedReport;
  let selectOptions = []
  selectOptions.push({value:'',text:'Select and Index'});
  aliases.forEach((alias)=>{
    selectOptions.push({value:alias,text:alias});
  })
  
  return (<EuiPage>
    <EuiPageBody>
      <EuiPageContent>
      <EuiPageContentBody>
      <EuiFlexGroup>
        <EuiFlexItem grow={10}>
        <h3>Report Edit</h3>
        </EuiFlexItem>
        <EuiFlexItem>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton
            fill
            onClick={()=>hideReportForm(props)}
            color="ghost">Back</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton
            fill
            onClick={()=>updateSeletedReport(props)}
            color="primary">Update</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton
            fill
            onClick={()=>deleteSelectedReport(props)}
            color="danger">Delete</EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiForm>
      <EuiFormRow label="Index" compressed>
            <EuiSelect
            options={selectOptions}
            value={ selectedReport['config']['indexName'] ?  selectedReport['config']['indexName']: null}
            onChange={(e) => updateReportTextBox(props,e,'indexName')}/>
          </EuiFormRow>
      <EuiFormRow label="Query" compressed>
          <EuiTextArea
          name="query"
          placeholder="Query"
          value={selectedReport['config']['query'] ? selectedReport['config']['query']: ''}
          onChange={(e) => updateReportTextBox(props,e,'query')}/>
      </EuiFormRow>
      <EuiFormRow label="Sort Field" compressed>
          <EuiFieldText
          placeholder="Sort Field"
          value={selectedReport['config']['sortField'] ? selectedReport['config']['sortField']: ''}
          onChange={(e) => updateReportTextBox(props,e,'sortField')}/>
      </EuiFormRow>
      <EuiFormRow label="Sort Direction" compressed>
          <EuiFieldText
          placeholder="Sort Direction"
          value={selectedReport['config']['sortDirection'] ? selectedReport['config']['sortDirection']: ''}
          onChange={(e) => updateReportTextBox(props,e,'sortDirection')}/>
      </EuiFormRow>
    </EuiForm>
      </EuiPageContentBody>
    </EuiPageContent>
  </EuiPageBody>
 </EuiPage>)
}




const mapStateToProps = ({RuleEngineReducer}) => {
  return {RuleEngineReducer}
}
const actions = {hideRuleEngineReportsForm,updateReportText,updateReport,deleteReport}
const RuleEngineReportsForm = connect(mapStateToProps, actions)(ruleEngineReportsFrom);

export default  RuleEngineReportsForm;