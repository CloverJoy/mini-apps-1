const FormOne = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <label>Name:
        <input type="text" name= "customername" value={props.customername} onChange={props.handleChange}></input>
      </label>
      <label>Email:
        <input type="text" name= "email" value={props.email} onChange={props.handleChange}></input>
      </label>
      <label>Password:
        <input type="password" name= "customerpassword" value={props.customerpassword} onChange={props.handleChange}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
    <button onClick={props.handleBack}>GO BACK</button>
    <button onClick={props.handleBackToHome}>BACK TO SHOPPING</button>
    </div>

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
        <input type="text" name= "customerstate" value={props.customerstate} onChange={props.handleChange}></input>
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
    <button onClick={props.handleBackToHome}>BACK TO SHOPPING</button>
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
    <button onClick={props.handleBackToHome}>BACK TO SHOPPING</button>
    </div>
  );
};

const FinalConfirmation = (props) => {
  let address = `${props.lineone}
  ${props.linetwo}
  ${props.city}
  ${props.customerstate}
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
      <h5>{props.customername}</h5>
      <h3>Your email: </h3>
      <h5>{props.email}</h5>
      <h3>Your complete Address: </h3>
      <h5>{address}</h5>
      <h3>Your Billing Information: </h3>
      <h5>{billing}</h5>
      <button onClick={props.handleBackToHome}>BACK TO SHOPPING</button>
      <button onClick={props.handleBack}>GO BACK</button>
      <button onClick={props.handleFinalSubmit}>SUBMIT ORDER</button>
    </div>
  )
};

const HomePage = (props) => {
  return (
    <div>
      <h1>This is todays deal</h1>
      <button onClick={props.handleSubmit}>CHECKOUT</button>
    </div>
  );
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customername: '',
      email: '',
      customerpassword: '',
      lineone: '',
      linetwo: '',
      city: '',
      customerstate: '',
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
    this.handleBackToHome = this.handleBackToHome.bind(this);

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
    let data = {...this.state};
    delete data.step;
    if (data.customername) {
      axios.post('/api', data)
      .then((response) => {
        console.log(response.data)
      });
    }
    console.log(this.state)
    this.handleBackToHome();
  }

  handleBackToHome() {
    this.setState({step: 0});
  }

  componentDidMount() {
    this.setState({step: 0});
  }


  render() {
    let currentStep = this.state.step
    if (currentStep === 0) {
      return(
        <HomePage handleSubmit={this.handleSubmit} />
      );
    }
    if (currentStep === 1) {
      return (
        <FormOne customername={this.state.customername} email={this.state.email} customerpassword={this.state.customerpassword} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleBack={this.handleBack} handleBackToHome={this.handleBackToHome}/>
      )
    } else if (currentStep === 2) {
      return (
        <FormTwo lineone={this.state.lineone} linetwo={this.state.linetwo} city={this.state.city} state={this.state.state} zipcode={this.state.zipcode} phonenumber={this.state.phonenumber} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleBack={this.handleBack} handleBackToHome={this.handleBackToHome}/>
      )

    } else if (currentStep === 3){
      return (
        <FormThree creditcardnumber={this.state.creditcardnumber} expirydate={this.state.expirydate} cvv={this.state.cvv} billingzip={this.state.billingzip} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleBack={this.handleBack} handleBackToHome={this.handleBackToHome}/>
      );
    } else if (currentStep === 4) {
      return (
        <FinalConfirmation customername={this.state.customername} email={this.state.email} password={this.state.password} lineone={this.state.lineone} linetwo={this.state.linetwo} city={this.state.city} customerstate={this.state.customerstate} zipcode={this.state.zipcode} phonenumber={this.state.phonenumber} creditcardnumber={this.state.creditcardnumber} expirydate={this.state.expirydate} cvv={this.state.cvv} billingzip={this.state.billingzip} handleFinalSubmit={this.handleFinalSubmit} handleBack={this.handleBack} handleBackToHome={this.handleBackToHome}/>
      );
    }
  }
};


ReactDOM.render(<App/>, document.getElementById('root'));

