import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Counter from '../pages/customCounter'
import * as CounterActions from '../store/actions/customCounter.action'

function mapStateToProps(state) {
    return {
      count: state._counter.count
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);