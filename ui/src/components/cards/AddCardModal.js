import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import {
EuiButton,
EuiButtonEmpty,
EuiFieldText,
EuiForm,
EuiFormRow,
EuiModal,
EuiModalBody,
EuiModalFooter,
EuiModalHeader,
EuiModalHeaderTitle,
EuiOverlayMask,
EuiRange,
EuiSwitch,
EuiFlexItem,
EuiFlexGroup
} from '@elastic/eui';
import CardsSearchSortBar from './CardsSearchSortBar';
import CardsList from './CardsList';
import {hideAddCardModal,addOrEditCard,updateCurrentCardValue} from '../store/actions/cards-actions';
import { EuiSpacer } from '@elastic/eui';
const hideUserCardAddModal=(props)=>{
props.hideAddCardModal();
}
const updateCurrentCard = (props,e,type)=>{
let updatedValue={type:type,value:e.target.value};
props.updateCurrentCardValue(updatedValue);
}
const addUserGroupCard = (props)=>{
props.addOrEditCard();
}
const addCardModal = (props)=>{
let {currentCard} = props.CardsReducer;
const addForm = (

<EuiFlexGroup justifyContent="spaceAround" >
<EuiForm >
  <h2>New User Group Card</h2>
  <EuiSpacer size="l" />
   <EuiFormRow label="Card Name">
      <EuiFieldText name="cardName"
         value={currentCard.name} 
         onChange={(e)=>
      updateCurrentCard(props,e,'name')}/>
   </EuiFormRow>
   <EuiFormRow label="Description">
      <EuiFieldText name="cardDescription" 
         value={currentCard.description}
         onChange={(e)=>
      updateCurrentCard(props,e,'description')}/>
   </EuiFormRow>
   <EuiFlexGroup style={{ maxWidth: 600 }}>
   <EuiFlexItem>
      <EuiFormRow>
         <EuiButtonEmpty
            onClick={()=>hideUserCardAddModal(props)}>
            Cancel
         </EuiButtonEmpty>
      </EuiFormRow>
   </EuiFlexItem>
   <EuiFlexItem>
      <EuiFormRow>
         <EuiButton onClick={()=>addUserGroupCard(props)} fill>
            Save
         </EuiButton>
      </EuiFormRow>
   </EuiFlexItem>
   </EuiFlexGroup>
</EuiForm>
</EuiFlexGroup>
);
return ( 
<Fragment>
   {addForm}
</Fragment>
)
}
const mapStateToProps = ({CardsReducer}) => {
return {
CardsReducer
}
}
const actions = {
addOrEditCard,
hideAddCardModal,
updateCurrentCardValue
}
const AddCardModal = connect(mapStateToProps, actions)(addCardModal)
export default AddCardModal;