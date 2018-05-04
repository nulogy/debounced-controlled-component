// MyTextrea.js
import debounce from 'lodash/debounce';

class DebounceControlledComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value
    }
    // debounce the passed in dispatch method
    this.onChange = debounce(this.props.onChange, 250)
  }
  // pass in the Redux action dispatcher and the
  // returned value via props
  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
  }

  componentWillReceiveProps(nextProps) {
    // synch values from props
    this.setState({ value: nextProps.value });
  }

  handleChange = e => {
    // React event weirdness requires storing
    // the synthetic event
    const val = e.target.value
    this.setState({ value: val }, () => {
      this.onChange(val)
    })
  }
  render() {
    return this.props.children(this.state.value, this.handleChange);
  }
}
