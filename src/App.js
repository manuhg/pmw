import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-overlays/lib/Modal';
const moment = require('moment');
import InputMoment from 'hb-input-moment';
import {Router,Route,IndexRoute,hashHistory,IndexLink,Link} from 'react-router';

var popmsg,cartadd;
var fmt='ddd, MMM D YYYY hh:mm A';
const im=moment()._d;
const modalStyle = {
  position:'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0,
  minHeight:'50%',
  minWidth:'50%',
  alignContent:'stretch',
};
const backdropStyle = {
  position:'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};
const dialogStyle = function() {
  return {
    position: 'absolute',
    // width: 400,
    top: '50%',
    left: '50%',
    transform: `translate(-${50}%, -${50}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};
const comm={
  // position:'absolute',
  // width:'90%',
  margin:'auto auto',
  // right:'0',
  // left:'0',
  backgroundSize: 'cover',
  backgroundColor: 'rgba(255,255,255,0.9)',

};
const pwrap={
  // ...comm,
  textAlign:'center',
  // backgroundPosition:'right bottom',
  // backgroundSize: '35%',
  // background:'url(img/bcg/rose.jpg) no-repeat',

};
const pdstyle={
  position:'absolute',
  ...comm,
  // minHeight:'90%',
  // top:'0px',

};

var imgs={
    "Aanjaneya":'img/hanuman.png',
    "Aayushya":'img/homa_aayushya.jpg',
    "Abhishekam":'img/abhishekam.jpg',
    "Annapraashanam":'img/Annaprashana.jpg',
    "Archana":'img/archane.jpg',
    "Ganapati":'img/ganesha.png',
    "Ganesha":'img/ganesha.png',
    "Homam":'img/homa.jpg',
    "Home visit pooja":'img/home_visit.jpg',
    "Keshamundanam":'img/keshamundanam.jpg',
    "Krishna":'img/krishna.jpg',
    "Mahadevi":'img/mahadevi.png',
    "Moksharchana":'img/Moksharchana.jpg',
    "Mrutyunjaya":'img/mrutyunjaya-homam.jpg',
    "Murugan":'img/murugan.png',
    "Naamakaranam":'img/namakarana.png',
    "Navagraha":'img/navagraha.png',
    "Purattasi Shani Lamp":'img/Purattasi.jpg',
    "Rama":'img/rama.png',
    "Rudra":'img/homa_rudra.jpg',
    "Satyanarayana Pooja":'img/satyanarayan.jpg',
    "Seemantam":'img/seemantam.jpg',
    "Shiva":'img/shiva.png',
    "Sudarshana":'img/sudarshana-homam.jpg',
    "Vaahana Pooja":'img/vahana.jpg',
    "Venkateshwara":'img/venkateshwara.png',
    "Vidyarambham":'img/vidyarambham.jpg',
    "Vivaaha":'img/vivaaha.jpg',
};
const pujas=[
   {
    desc:"Archana",
    price:10,
    list:['Ganesha', 'Shiva', 'Murugan', 'Mahadevi', 'Rama', 'Aanjaneya',
     'Venkateshwara', 'Krishna', 'Navagraha', 'Moksharchana']
   },
   {
    desc:"Abhishekam",
    price:71,
    list:['Ganesha', 'Shiva', 'Murugan', 'Mahadevi',  'Venkateshwara', 'Navagraha']
   },
   {
     desc:"Homam",
     price:101,
     list:['Ganapati','Rudra','Mrutyunjaya','Navagraha','Sudarshana','Aayushya' ]
   },
   {
     desc:"Satyanarayana Pooja",
     price:101
   },
   {
     desc:"Home visit pooja",
     price:71
   },
   {
     desc:"Purattasi Shani Lamp",
     price:5
   },
   {
     desc:"Vaahana Pooja",
     price:51
   },
   {
     desc:"Naamakaranam",
     price:101
   },
   {
     desc:"Annapraashanam",
     price:101
   },
   {
     desc:"Keshamundanam",
     price:101
   },
   {
     desc:"Vidyarambham",
     price:101
   },
   {
     desc:"Vivaaha",
     price:1200
   },
   {
     desc:"Seemantam",
     price:101
   },
];
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
const Popup = React.createClass({
  getInitialState(){
    var html='';
    return { showModal: false };
  },
  render() {
    popmsg=this;
    return (<Modal
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          //  onHide={this.close}
                  >
          <div style={dialogStyle()} >
          <button style={{float:'right', color:'red'}} type="button" class="ion-close-round btn btn-default"
          onClick={this.close} ></button>
          {this.html}
          </div>
        </Modal>
    );
  },
  close(){
    this.setState({ showModal: false });
  },
  open(html){
    this.html=html;
    this.setState({ showModal: true });
  }
});
const Datetime_pick = React.createClass({
  displayName: 'Datetimepicker',
  getInitialState() {
    return {
      m: moment()
    };
  },
  render(){
    var dateeOnly = (this.props.dateOnly)?true:false;
    var lstyle={width:'350px'};
    var wwidth=$(window).width();
    var hheight=$(window).height();//*0.5)+"px";
    var dts={position:"relative",alignContent:"stretch",fontSize:"150%"};
    if(hheight>=wwidth)
    {
      wwidth=hheight=(hheight*0.40)+"px";
    }
    else
    {
      console.log(hheight);
        wwidth=hheight=(hheight*0.65)+"px";
        // if(hheight< 600)
        //   dts.fontSize="100%";
    }
    dts.minWidth=wwidth;
    dts.minHeight=hheight;
    const obj=this.props.infoObj;
    if(dateeOnly==true)
    {
      fmt='ddd, MMM D YYYY';
      lstyle={width:'40%'};
    }
    return (
      <div style={dts} class="Datetime_pick" >
        <form>
        <div className= "input" >
        <input style= {lstyle} type="text" value={this.state.m.format(fmt)} readOnly />
        </div>
        <InputMoment
          moment={this.state.m}
          onChange={this.handleChange}
          onSave={()=>this.handleSave(obj)}
          dateOnly={dateeOnly}
          hh={hheight}
          ww={wwidth}
        />
        </form>
      </div>
    );
  },
  handleChange(m) {
    if(m.isBefore(im))
    {
      var x=moment(im);
      this.setState({m: x});
    }
    else
      this.setState({m: m});
  },
  handleSave(obj){
    cartadd(this.state.m,obj);
    popmsg.close();
  }
});
class Cart extends React.Component{
  constructor(){
    super();
    this.state={Items:[]};
    this.restoreAll();
  }
  render(){
    cartadd=this.add.bind(this);
    var nItems=this.state.Items.length;
    this.storeAll();
    return (<button type="button" onClick={this.display.bind(this)} class="btn btn-default btn-lg">
        <i className="ion-ios-cart"></i> Cart [{nItems}]</button>);
  }
  add(m,o){
    if(this.state.Items.length==0)
      this.state.Items.push({m:m,o:o});
    else
    {
      for(var i=0;i< this.state.Items.length; i++)
        if(m.isBefore(this.state.Items[i].m))
         break;
      this.state.Items.splice(i,0,{m:m,o:o});
    }
    this.forceUpdate();
  }
  remove(i){
    this.state.Items.splice(i,1);
    this.forceUpdate();
    this.display();
  }
  display(){
    var ar=Array();
    var total=0;
    var wwidth=$(window).width();
    var hheight=$(window).height();
    if(hheight>wwidth)
    {
      wwidth=(wwidth*0.8)+"px";
      hheight=(hheight*0.5)+"px";
    }
    else
    {
      wwidth=(wwidth*0.8)+"px";
      hheight=(hheight*0.5)+"px";
    }
    for(let i=0; i< this.state.Items.length;i++)
    {
      total+=this.state.Items[i].o.price;
      ar.push(
        <tr key={"rk"+i}><td>{this.state.Items[i].o.name}</td>
            <td>${this.state.Items[i].o.price}</td>
            <td>{this.state.Items[i].m.format(fmt).toString()}</td>
            <td><button class="btn btn-default" onClick={()=>this.remove(i)} type="button">Remove</button></td>
        </tr>);
    }
    popmsg.open(
    <div style={{fontSize:"150%"}} class="container-fluid"><h2><i className="ion-ios-cart"></i> Cart [{this.state.Items.length}] : ${total}</h2><div
      style={{minHeight:hheight, minWidth:wwidth}} class="panel panel-default">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Pooje</th>
            <th>Amount</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>{ar}</tbody>
        </table>
    </div>
    <span style={{float:'right'}}><button type="button" className="btn btn-default">Checkout</button></span>
        </div>);
  }
  storeAll(){
    var name=[],price=[],date=[];
    var I=this.state.Items;
    document.cookie="";
    for(let i=0;i< I.length;i++)
    {
      name.push(I[i].o.name);
      price.push(I[i].o.price);
      date.push(I[i].m.toISOString());
    }
    setCookie("name",name.toString(),7);
    setCookie("price",price.toString(),7);
    setCookie("date",date.toString(),7);
  }
  restoreAll(){
    var obj=[],len;
    var name,price,date;
    name=getCookie("name").split(",");
    price=getCookie("price").split(",");
    date=getCookie("date").split(",");
    len=name.length;
    len=(price.length< len)?price.length:len;
    len=(date.length< len)?date.length:len;
    for(var i=0;i< len;i++)
    {
      if(name[i]==""||price[i]==""||date[i]=="")
       continue;
      obj.push({m:moment(date[i]),o:{name:name[i],price:parseInt(price[i])}});
    }
    this.state.Items=obj;
  }
}
function Pooje(props){
  var str=props.name;
  const transparent=false;
  if('concat' in props && props.concat)
    str+=" "+props.desc;
  var obj={name:str,price:props.price};
  // var smval=3;
  var imstyle={
    paddingTop:'10px',
    width:'90%',
    height:'90%',
  };
  var sz,fsz,fsz2;
  var wstyle={display:"inline-block",marginLeft:'20px',marginRight:'5px',minHeight:'300px',padding:"10px"};
  var wwidth=$(window).width();
  var hheight=$(window).height();
  if(hheight<=wwidth)
  {
    fsz='1.6vw';
    fsz2='1.4vw';
    if(wwidth<=1100)
    {
      wstyle.marginRight='10px';
      wstyle.marginLeft='10px';
    }
    else
    {
      wstyle.marginRight='3px';
      wstyle.marginLeft='10px';
    }
    wstyle.width='251px';
    sz='btn-md';
  }
  else
  {
    fsz='3vw';
    fsz2='2.5vw';
    wstyle.width='373px';
    sz='btn-lg';
  }
  if(transparent)
   wstyle.background='none';
  var innerText= <span><span style={{fontSize:fsz2}}>Amount: ${props.price}</span><br/>
                 <button type="button" style={{width:"100%"}} class={"btn btn-info "+sz}  onClick={()=>props.onClick(obj)}>Reserve Seva</button>
                 </span>;
  if('vA' in props && 'LinkName' in props)
    innerText = <span>
        <br/>
        <Link to={props.LinkName}><button style={{width:"100%"}} type="button" class={"btn btn-info vab"+sz}>
          View All</button></Link>
        </span>
  return (
  <div style={wstyle} class={"witem panel panel-default "}>
    <div class="text-center"><span> <img src={props.img}  style={imstyle} alt={'"'+props.desc+'"'}/></span></div>
    <div class="text-center"><span style={{fontSize:fsz}}>{props.name}</span></div>
    <div class="text-center"><span>{innerText}</span>
  </div>
  </div>
 );
}
class Poojas extends React.Component{
  render(){
    var concat=false;
    var obj=this.props.obj;
    if('list' in obj)
    {
      if( 'scv' in this.props )
      {
        var retval=[];
        var ars=obj.list;
        for(var i=0; i< ars.length;i++)
        {
          retval.push(<Pooje name={ars[i]} img={imgs[ars[i]]} price={obj.price} smval={5}
            onClick={this.book.bind(this)} desc={obj.desc} key={ars.length+i}  concat={true} />);
        }
        return (<div><h2 style={{margin:'10px'}}>{obj.desc}</h2><div style={pwrap}>{retval}</div></div>);
      }
      //if not scv
      return(<Pooje name={obj.desc} img={imgs[obj.desc]} price={obj.price} desc={obj.desc} LinkName={obj.desc} vA={true} />); //vA: viewAll
    }
    //Otherwise
    return(<Pooje name={obj.desc} img={imgs[obj.desc]} price={obj.price}
      onClick={this.book.bind(this)} desc={obj.desc}/>);
  }
  book(o){
    let html=
    <div class="container-fluid">
       <h4>Reserving {o.name} </h4>
       <Datetime_pick infoObj={o} dateOnly={true}/>
    </div>;
    popmsg.open(html);
  }
}
function Archane(props){
  var obj=pujas[0];
  $(".nav").find(".active").removeClass("active");
  $("#"+obj.desc).parent().addClass("active");
  return(<Poojas obj={obj}  scv={true} />);
}
function Abhisheka(props){
  var obj=pujas[1];
  $(".nav").find(".active").removeClass("active");
  $("#"+obj.desc).parent().addClass("active");
  return(<Poojas obj={obj}  scv={true} />);
}
function Homa(props){
  var obj=pujas[2];
  $(".nav").find(".active").removeClass("active");
  $("#"+obj.desc).parent().addClass("active");
  return(<Poojas obj={obj}  scv={true} />);
}
function Homepage(props){
  $(".nav").find(".active").removeClass("active");
  $("#home").parent().addClass("active");
  const pjs=pujas.map((obj)=>(<Poojas obj={obj} key={obj.desc} />)); //scv:sub category view
  return(<div><h1 style={{margin:'10px'}}>Poojas Available</h1><div style={pwrap}>{pjs}</div></div>);
}
function mh(){$(function(){$('.witem').matchHeight()});}
var lobj;
class Layout extends React.Component{
  render(){
    lobj=this.forceUpdate.bind(this);
    return (
      <div>
      <section>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div  class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Reserve Pooja</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><IndexLink id="home" to="/"><i class="ion-ios-home"></i>All Pooja</IndexLink></li>
            <li><Link id="Archana" to="Archana">Archana</Link></li>
            <li><Link id="Abhishekam" to="Abhishekam">Abhishekam</Link></li>
            <li><Link id="Homam" to="Homam">Homam</Link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right"><li><a><Cart/></a></li></ul>
        </div>
      </nav>
      </section>
      <section>
      <div id="bcont" onLoad={()=>mh()} style={
          {
            marginTop:"50px",textAlign:"center",
            backgroundSize: 'scale',backgroundColor: 'rgba(255,255,255,0.8)'
          }} class=" col-md-12"><Popup/><br/>
        {this.props.children}
      </div>
    </section>
  </div>
    );
  }
}
function changeactive(desc)
{
  $(".nav").find(".active").removeClass("active");
  $("#"+desc).parent().addClass("active");
}
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/"  component={Layout}>
      <IndexRoute onenter={changeactive("home")} component={Homepage}></IndexRoute>
      <Route path={pujas[0].desc} name={pujas[0].desc} onenter={changeactive(pujas[0].desc)} component={Archane}></Route>
      <Route path={pujas[1].desc} name={pujas[1].desc} onenter={changeactive(pujas[1].desc)} component={Abhisheka}></Route>
      <Route path={pujas[2].desc} name={pujas[2].desc} onenter={changeactive(pujas[2].desc)} component={Homa}></Route>
    </Route>
  </Router>
    ,document.getElementById('app'));
    window.location="#";
  // window.addEventListener('orientationchange',()=>lobj());
