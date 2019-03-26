import { connect } from 'react-redux';
import * as actionCreators from '../actions';

/* eslint react-redux/connect-prefer-named-arguments: 0 */
export default mapStateToProps => Component => connect(mapStateToProps, actionCreators)(Component);
