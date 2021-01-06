const FormTwo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Address Line 1:
        <input type="text" name= "lineone" value={props.lineone} onChange={props.handleChange}></input>
      </label>
      <label>Address Line 2:
        <input type="text" name= "linetwo" value={props.linetwo} onChange={props.handleChange}></input>
      </label>
      <label>City:
        <input type="text" name= "city" value={props.city} onChange={props.handleChange}></input>
      </label>
      <label>State:
        <input type="text" name= "state" value={props.state} onChange={props.handleChange}></input>
      </label>
      <label>Zip Code:
        <input type="text" name= "zipcode" value={props.zipcode} onChange={props.handleChange}></input>
      </label>
      <label>Phone number:
        <input type="text" name= "phonenumber" value={props.phonenumber} onChange={props.handleChange}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
};

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
        <input type="password" name= "password" value={props.password} onChange={props.handleChange}></input>
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
      lineone: '',
      linetwo: '',
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

  componentDidMount() {
    this.setState({step: 0});
  }


  render() {
    let currentStep = this.state.step
    if (currentStep === 0) {
      return (
        <FormOne name={this.state.name} email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      )
    } else if (currentStep === 1) {
      return (
        <FormTwo lineone={this.state.lineone} linetwo={this.state.linetwo} city={this.state.city} state={this.state.state} zipcode={this.state.zipcode} phonenumber={this.state.phonenumber} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      )
    } else {
      return (
        <div>
        <div>
        <FormOne name={this.state.name} email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div>
        <FormTwo lineone={this.state.lineone} linetwo={this.state.linetwo} city={this.state.city} state={this.state.state} zipcode={this.state.zipcode} phonenumber={this.state.phonenumber} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        </div>
      );
    }
    }

};


ReactDOM.render(<App/>, document.getElementById('root'));

