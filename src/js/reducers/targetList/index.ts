import reduce from '../common';
import TargetListState from '../../model/stateZ/targetList/TargetListState'
import TargetListRecord from '../../model/stateZ/targetList/TargetListRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new TargetListState(), new TargetListRecord());