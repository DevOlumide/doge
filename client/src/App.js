import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Axios from "axios";

function App(){
  return(
    <Router>
    <Switch>
    <Route path="/next" component={Next} />
    <Route path="/" component={Home} />
    </Switch>
    </Router>
    );
}


function Home() {
  return (
    <React.Fragment>
    <div className="text-center text-dark p-3">
    <span className="text-nunito" style={{fontSize: "2.33rem", fontWeight: 900}}>doge</span>
    </div>
    <div className="text-center container">
    <img src="/assets/images/background-1.webp" className="position-relative" />
    </div>
    <div className="container text-center">
      <p className="text-nunito large landing">
      You 've got no <br />
      <span>
      limits
      </span>
      </p>
      <p className="text-jost text-left">
    Inspired by the best of Doge. Scale your business superfast - as seamlessly as cutting a piece of cake. A digital bank built to perfectly serve your business.
      <p className="my-3">
      <Link className="btn btn-default" to="/next">Get started</Link>
      </p>
      </p>
      </div>
      <div className="container">
      <img src="/assets/images/plus-bg.jpeg " className="small-bg-img" />
      <img src="/assets/images/happy-ceo.jpg" className="mt-3 position-relative image-behind" />
      </div>
      <div className="mt-6 text-center container text-jost mb-5">
      <div className="row">
      
      
      <div className="col-12 col-md-4">
      <span className="label label-1">01</span>
      <p className="large-2 mt-3"> Mind-blowing 1% monthly interest rate. <br /><span className="highlight">Abracadabra </span>
      </p>
      <p className="text-jost">
      Zero-interest credit up to 500 thousand naira and loans up to a whooping amount of 10 million naira. No collateral, amazingly low interest rate. Now that's cool.
      </p>
      </div>
      
      
      <div className="col-12 col-md-4">
      <span className="label label-2">02</span>
      <p className="large-2 mt-3"> Supercharge your business with 15% annual interest on savings</p>
      <p className="text-jost">Save some money. Dilligently serve your customers, whole-heartedly pay your business and wow yourself. Feels great?</p>
      </div>
      
      
      <div className="col-12 col-md-4">
      <span className="label label-3">03</span>
      <p className="large-2 mt-3"> Bonus: Grow your business net-worth superfast</p>
      <p className="text-jost">Get unshaking advice from world-class experts. Invest in stocks, real estates and dogecoin. Get mind-blowing returns from your investments every year.</p>
      </div>
   
      </div>
   
      <Link to="/next" className="btn btn-light">Get started now</Link>
      <p className="text-muted mt-6">
      &copy; 2021 Doge digital bank development team.
      </p>
      </div>
    </React.Fragment>
  );
}


//second page 

function Next(){
  
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState("");
  const [color, setColor] = useState ("#F4689A");
  
  
  const changeName = (event) => {
    setName(event.target.value);
  }
  const changeEmail = (event) => {
    setEmail(event.target.value);
  }
 const handleSubmit = async (event) => {
    event.preventDefault();
    
    const details = {
      name: name,
      email: email
    }
    
    setComment("Loading...");
    
    await Axios.post("/app/details", details).then((result) => {
      
      
      if(status == 200){
        setColor("#2F89FC"); 
        } else{
        setColor("red");
      }
      
      setComment(result.data);
      setStatus(result.status);
    });
    
    setName("");
    setEmail("");
    
    
  }
  
  return(
    <div className="container text-center">
    <div className="text-center text-dark p-3">
    <span className="text-nunito" style={{fontSize: "2.33rem", fontWeight: 900}}>doge</span>
    </div>
    <p className="text-jost">
    Mere words cannot express our gratitude that you made it here. You 've shown us that you sincerely want this service. We really want to serve you better, but we fear to say we are not ready yet. Kindly type your name and email below so we can tell you when exactly we are ready to launch Doge digital bank.
    </p>
    <p className="comment text-nunito text-center" style={{color: color}}>{comment}</p>
    <form>
    <input type="text" className="form-control mb-3 text-nunito" placeholder="Your name here" value={name} onChange={changeName}/>
    <input type="email" className="form-control mb-3 text-nunito" value={email} onChange={changeEmail} placeholder="Your email here" />
    <input type="submit" className="text-nunito btn" value="Submit Now" onClick={handleSubmit} />
    </form>
     <p className="text-muted mt-6 text-jost">
      &copy; 2021 Doge digital bank development team.
      </p>
    </div>
    );
}


export default App;
