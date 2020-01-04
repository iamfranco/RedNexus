*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #0072CE;
}
h1{
  font-size: 28px;
  margin: 4vh;
  color: #0072CE;
}
h2, p{
  font-size: 26px;
  margin: 4vh;
  color: #0072CE;
}
a{
  text-decoration: none;
}
img{
  clear: left;
  display: block;
  float: left;
  margin: 20px;
  max-width: 240px;
}
div{
  width: 100%;
}
.logo{
  width: 14vh;
  height: 8vh;
  float: left;
  margin: 0;
  cursor: pointer;
}
.index-pic{
  max-height: 200px;
  height: auto;
  max-width: 75%;
  width: auto;
  margin:10px;
  float: left;
}
div.pic img{
  clear: left;
  display: block;
  float: left;
  margin: 10px;
  object-fit: cover;
  overflow: hidden;
}
.nav-links{
  display: flex;
  justify-content: space-around;
  width: 60%;
}
.burger{
  display: none;
  cursor: pointer;
}
div.box{
  background-color: #0072CE;
  height: 160px;
  margin: 30px 30% 0 30%;
  text-align: right;
  width: 40%;
}
div.box h1{
  margin: 0px;
  overflow: hidden;
  text-align: right;
}
div.box h2{
  margin: 0px;
  overflow: hidden;
  text-align: right;
}
div.layer1{
  background: orange;
  height: 400px;
  margin-top: 80px;
}
div.layer2{
  background: red;
  height: 360px;
}
div.layer3{
  background: yellow;
  height: 360px;
}
.nav-links li{
  list-style: none;
}
.nav-links a{
  color: white;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 23px;
}
.burger div{
  width: 22px;
  height: 3px;
  background-color: white;
  margin: 5px;
}
@media screen and (max-width: 1200px){
  body{
    overflow-x: hidden;
  }
  .nav-links{
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background-color: #0072CE;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    transform: translateX(100%);
    transition: transform 0.4s ease-in;
  }
  .nav-links li{
    opacity: 0px;
  }
  .burger{
    display: block;
  }
  div.box img{
    height: 24vh;
  }
  .box h1{
    margin: 0px;
  }
  .box h2{
    margin: 0px;
  }
  div.interview img{
    margin-left: 34vw;
  }
}

.nav-active{
  transform: translateX(0%);
}

@media screen and (max-width: 800px){
  .box{
    height: 24vh;
    margin: 4vh 10vw;
    text-align: left;
    min-width: 480px;
  }
  .index-pic img{
    display: block;
    float: none;
    margin-top: 2vh;
    max-height: 80px;
  }
  .box h1{
    margin-top: 10px;
  }
  div.interview img{
    margin-left: 32vw;
    margin-right: 26vw;
  }
}

@media screen and (max-width: 600px){
  .box{
    min-width: 80vw;
  }
  .index-pic img{
    max-height: 70px;
  }
}
