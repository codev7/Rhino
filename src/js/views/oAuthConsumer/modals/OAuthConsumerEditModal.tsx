import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import OAuthConsumerAction from '../../../actions/OAuthConsumerAction2'
import OAuthConsumerState from '../../../model/stateZ/oAuthConsumer/OAuthConsumerState';
import OAuthConsumerForm from '../OAuthConsumerForm';
import { AppState } from '../../../model/stateZ/AppState';

const OAuthConsumerEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit OAuth Consumer"
        action={ OAuthConsumerAction }
        {...props}>
            <OAuthConsumerForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthConsumer
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthConsumerEditModal);
