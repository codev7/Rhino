import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import OAuthEngagementAction from '../../../actions/OAuthEngagementAction2'
import OAuthEngagementState from '../../../model/stateZ/oAuthEngagement/OAuthEngagementState';
import OAuthEngagementForm from '../OAuthEngagementForm';
import { AppState } from '../../../model/stateZ/AppState';

const OAuthEngagementEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit OAuth Engagement"
        action={ OAuthEngagementAction }
        {...props}>
            <OAuthEngagementForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthEngagement
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthEngagementEditModal);
