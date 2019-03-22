import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'components/importers/file/actions';
import FileImporter from 'components/importers/file/FileImporter';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FileImporter);