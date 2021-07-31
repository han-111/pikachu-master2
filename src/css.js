const string = `
.skin *{
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
}
.skin *::after,.skin *::before{
    content: '';
}
.skin{
    height: 50vh;
    background: #ffe600;
    position: relative;
}
.nose{
    position: relative;
    left: 50%;
    border: 10px solid #000;
    border-color:#000 transparent transparent;
    width: 0px;
    height: 0px;
    top: 140px;
    border-bottom: none;
    margin-left: -10px;
}
.yuan{
    position: absolute;
    width: 20px;
    height:8px;
    top: -14px;
    background-color: #000;
    border-radius: 10px 10px 0 0;
    left: -10px;
}
.eye{
    position: absolute;
    background: #2e2e2e;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    width: 64px;
    height: 64px;
    line-height: 64px;
    border-radius: 64px;
    border: 1px solid #000;
}
.eye::before{
    border: 2px solid #000;
    height:25px;
    display: block;
    border-radius: 50%;
    width: 25px;
    background: #fff;
    position: relative;
    left: 8px;
    top: 4px;
}
.left_eye{
    transform: translate(-100px);

}
.right_eye{
transform: translate(100px);
}
.face{
    position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  border-radius: 50%;
  background: #ff0000;
  z-index: 3;
}
.face > img{
    position: absolute;
    top: 50%;
    left: 50%;
  }
.left_face{
    transform: translate(-150px)
}
.left_face> img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
.right_face{
    transform: translate(150px);

}
.mouse{
    width: 180px;
    height: 180px;
    left: 50%;
    top: 180px;
    position: absolute;
    margin-left: -90px;
}
.mouse .up{
    top: -20px;
    position: relative;
    z-index: 1;
}
.mouse .up .lip{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
 .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
.lip.left{
    border-radius: 0 0 0 40px;
    transform: rotate(-15deg) translateX(-53px);
  }
.lip.right{
    border-radius: 0 0 50px 0px;
    transform: rotate(15deg) translateX(53px);
  }
 
.lip.left::before{
    right: -6px;
  }
.lip.right::before{
    left: -6px;
  }
.down{
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
  }
  .yuan2{
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  
  }
`
export default string