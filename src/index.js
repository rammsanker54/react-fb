import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './a1.jpg';
import logo1 from './a2.jpg';
import logo2 from './a3.jpg';
// import logo3 from './a1.jpg';
import logo4 from './a4.jpg';
import logo5 from './a5.jpg';
import logo6 from './a6.jpg';
import logo7 from './a7.jpg';




//import App from './App';
//import reportWebVitals from './reportWebVitals';

// var red = React.createElement("div",{}, React.createElement("h1",{},"rammsanker")) ;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(red);

const elm = <div className='container' style={{width:"100%",height:"auto",display:"flex"}}>
{/* <input>search here</input> */}
<div className='flex-menu' style={{margin:"10px",height:"100%",overflowY:"scroll", overflowX:"hidden",bottom:"0px",position:"absolute",left:"140px",marginTop:"250px",scrollbarColor:"blue"}} >
<h3><a href="mailto:ramm">HOME</a></h3>
<h3><a href="mailto:ramm">ACCOUNT</a></h3>
<h3><a href="mailto:ramm">LINKS</a></h3>
<h3><a href="mailto:ramm">FRIENDS</a></h3>
<h3><a href="mailto:ramm">GROUPS</a></h3>
<h3><a href="mailto:ramm">MARKETPLACE</a></h3>
<h3><a href="mailto:ramm">WATCH</a></h3>
<h3><a href="mailto:ramm">MEMORIES</a></h3>
<h3><a href="mailto:ramm">SAVED</a></h3>
<h3><a href="mailto:ramm">PAGES</a></h3>
<h3><a href="mailto:ramm">EVENTS</a></h3>
<h3><a href="mailto:ramm">^ SEEMORE</a></h3>
<h3><a href="mailto:ramm">LOG-OUT</a></h3>
<h3><a href="mailto:ramm">LINKS</a></h3>
<h3><a href="mailto:ramm">FRIENDS</a></h3>
<h3><a href="mailto:ramm">GROUPS</a></h3>
<h3><a href="mailto:ramm">MARKETPLACE</a></h3>
<h3><a href="mailto:ramm">WATCH</a></h3>
<h3><a href="mailto:ramm">MEMORIES</a></h3>
<h3><a href="mailto:ramm">SAVED</a></h3>
<h3><a href="mailto:ramm">PAGES</a></h3>
<h3><a href="mailto:ramm">LINKS</a></h3>
<h3><a href="mailto:ramm">FRIENDS</a></h3>
<h3><a href="mailto:ramm">GROUPS</a></h3>
<h3><a href="mailto:ramm">MARKETPLACE</a></h3>
<h3><a href="mailto:ramm">WATCH</a></h3>
<h3><a href="mailto:ramm">MEMORIES</a></h3>
<h3><a href="mailto:ramm">SAVED</a></h3>
<h3><a href="mailto:ramm">EVENTS</a></h3>
<h3><a href="mailto:ramm">^ SEEMORE</a></h3>


</div>
<div class='timeline'style={{margin:"10px",height:"100%",overflowY:"scroll", overflowX:"hidden",bottom:"0px",position:"absolute",right:"300px",left:"300px",marginTop:"250px"}}>
<div className='imag'>
    <img src={logo4} width= "100%" height={"2%"}/>
    <img src={logo1} width= "100%" height={"100%"}/>
    <img src={logo5} width= "100%" height={"100%"}/>
    <img src={logo4} width= "100%" height={"100%"}/>
    <img src={logo5} width= "100%" height={"100%"}/>
    {/* <img src={logo3} width= "100%" height={"100%"}/> */}
    <img src={logo6} width= "100%" height={"100%"}/>
    {/* <img src={logo} width= "100%" height={"100%"}/> */}
    <img src={logo1} width= "100%" height={"100%"}/>
    <img src={logo7} width= "100%" height={"100%"}/>

    {/* <img src={logo} width= "100%" height={"100%"}/> */}
</div>



</div>
<div class='story'style={{width:"25%",height:"auto",textAlign:"center",overflowY:"scroll", overflowX:"hidden",position:"absolute",right:"0px",marginTop:"0px"}}>
<h3><a href="mailto:ramm">SPONCERS</a></h3>
<h3><a href="mailto:ramm">PROFILE</a></h3>
<h3><a href="mailto:ramm">PAGES</a></h3>
<h3><a href="mailto:ramm">FRIEND-REQUEST</a></h3>
<h3><a href="mailto:ramm">BIRTHDAYS</a></h3>
<h3><a href="mailto:ramm">CONTACTS</a></h3>
<h3><a href="mailto:ramm">MESSAGES</a></h3>
<h3><a href="mailto:ramm">MEMORIES</a></h3>
<h3><a href="mailto:ramm">SAVED</a></h3>
<h4><a href="mailto:ramm">PAGES</a></h4>
<h4><a href="mailto:ramm">EVENTS</a></h4>
<h3><a href="mailto:ramm">SEEMORE</a></h3>
<h3><a href="mailto:ramm">LOG-OUT</a></h3>
</div>
</div>
// var red = React.createElement("div",{}, React.createElement("h1",{},"rammsanker")) ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elm);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
