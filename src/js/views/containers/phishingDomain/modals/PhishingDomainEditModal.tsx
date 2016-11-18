import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import PhishingDomainForm from '../../../components/phishingDomain/PhishingDomainEdit';
import PhishingDomainAction from '../../../../actions/phishingDomain/PhishingDomainAction'
import PhishingDomainState from '../../../../model/state/PhishingDomainState';
import { AppState } from '../../../../model/state/AppState';

const PhishingDomainEditModalContainer = (props: Props) => {

    return <EditModalContainer
        title="Edit Phishing Domain"
        action={ PhishingDomainAction }
        {...props}>
            <PhishingDomainForm {...props.state} />
    </EditModalContainer>
}

// const mapStateToProps = (state: AppState): Props => ({
//     state: state.phishingDomain.edit
// })

const PhishingDomainEditModal = connect(
    null, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PhishingDomainEditModalContainer);

export default PhishingDomainEditModal;
