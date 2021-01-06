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

const FormTwo = (props) => {
  return (
    <div>
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
    <button onClick={props.handleBack}>GO BACK</button>
    </div>
  );
};

const FormThree = (props) => {
  return (
    <div>
    <form onSubmit={props.handleSubmit}>
      <label>Credit Card Number:
        <input type="text" name= "creditcardnumber" value={props.creditcardnumber} onChange={props.handleChange}></input>
      </label>
      <label>Expiry date: (mm/yy)
        <input type="text" name= "expirydate" value={props.expirydate} onChange={props.handleChange}></input>
      </label>
      <label>CVV:
        <input type="password" name= "cvv" value={props.cvv} onChange={props.handleChange}></input>
      </label>
      <label>Billing Zip Code:
        <input type="text" name= "billingzip" value={props.billingzip} onChange={props.handleChange}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
    <button onClick={props.handleBack}>GO BACK</button>
    </div>
  );
};

const FinalConfirmation = (props) => {
  let address = `${props.lineone}
  ${props.linetwo}
  ${props.city}
  ${props.state}
  ${props.zipcode}
  ${props.phonenumber}`;

  let billing = `${props.creditcardnumber}
  ${props.expirydate}
  ${props.cvv}
  ${props.billingzip}`;

  return(
    <div>
      <h1>Confirmation</h1>
      <h3>Your name: </h3>
      <h5>{props.name}</h5>
      <h3>Your email: </h3>
      <h5>{props.email}</h5>
      <h3>Your complete Address: </h3>
      <h5>{address}</h5>
      <h3>Your Billing Information: </h3>
      <h5>{billing}</h5>
      <button onClick={props.handleBack}>GO BACK</button>
      <button onClick={props.handleFinalSubmit}>SUBMIT ORDER</button>
    </div>
  )
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
    this.handleBack = this.handleBack.bind(this);
    this.handleFinalSubmit = this.handleFinalSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.setState((state) => ({
      step: state.step + 1
    }));
    event.preventDefault();
  }

  handleBack() {
    this.setState((state) => ({
      step: state.step - 1
    }));
  }

  handleFinalSubmit() {
    let data = this.state;
    delete data.step;
    console.log(data)
    axios.post('/api', data)
      .then((response) => {
        console.log(response)
      });
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
        <FormTwo lineone={this.state.lineone} linetwo={this.state.linetwo} city={this.state.city} state={this.state.state} zipcode={this.state.zipcode} phonenumber={this.state.phonenumber} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleBack={this.handleBack}/>
      )

    } else if (currentStep === 2){
      return (
        <FormThree creditcardnumber={this.state.creditcardnumber} expirydate={this.state.expirydate} cvv={this.state.cvv} billingzip={this.state.billingzip} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleBack={this.handleBack}/>
      );
    } else if (currentStep === 3) {
      return (
        <FinalConfirmation name={this.state.name} email={this.state.email} password={this.state.password} lineone={this.state.lineone} linetwo={this.state.linetwo} city={this.state.city} state={this.state.state} zipcode={this.state.zipcode} phonenumber={this.state.phonenumber} creditcardnumber={this.state.creditcardnumber} expirydate={this.state.expirydate} cvv={this.state.cvv} billingzip={this.state.billingzip} handleFinalSubmit={this.handleFinalSubmit} handleBack={this.handleBack}/>
      );
    } else {
      return(
        <h1>END</h1>
      )
    }
  }
};


ReactDOM.render(<App/>, document.getElementById('root'));

