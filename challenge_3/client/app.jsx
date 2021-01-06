const FormOne = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Name:
        <input type="text" name= "name" value={props.name} onChange={props.handleChange}></input>
      </label>
      <label>Email:
        <input type="text" name= "email" value={props.email} onChange={props.handleChange}></input>
      </label>
      <label>Password:
        <input type="text" name= "password" value={props.password} onChange={props.handleChange}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phonenumber: '',
      creditcardnumber: '',
      expirydate: '',
      cvv: '',
      billingzip:'',
      step: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.setState((state) => ({
      step: state.step + 1
    }));
    console.log(this.state);
    event.preventDefault();
  }


  render() {
    return (
      <FormOne name={this.state.name} email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    );
  }
};


ReactDOM.render(<App/>, document.getElementById('root'));

