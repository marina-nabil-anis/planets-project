var FirstBTN =document.getElementById('OverViewBTN')
var SecondBTN =document.getElementById('InternalStructureBTN')
var ThirdBTN =document.getElementById('SurfaceGeologyBTN')
var FirstP =document.getElementById('OverVeiwP')
var SecondP =document.getElementById('InternalP')
var ThirdP =document.getElementById('GeologyP')
var FirstPic =document.getElementById('MainUranusPic')
var SecondPic =document.getElementById('InternalUranusIMG')
var ThirdPic =document.getElementById('geologypic')

FirstBTN.onclick=function(){
    FirstBTN.style.backgroundColor=('#1EC1A2')
    SecondBTN.style.backgroundColor=('Transparent')
    ThirdBTN.style.backgroundColor=('Transparent')
    FirstP.style.display=('flex')
    SecondP.style.display=('none')
    ThirdP.style.display=('none')
    FirstPic.style.display=('flex')
    SecondPic.style.display=('none')
    ThirdPic.style.display=('none')

}
SecondBTN.onclick=function(){
    FirstBTN.style.backgroundColor=('Transparent')
    SecondBTN.style.backgroundColor=('#1EC1A2')
    ThirdBTN.style.backgroundColor=('Transparent')
    FirstP.style.display=('none')
    SecondP.style.display=('flex')
    ThirdP.style.display=('none')
    FirstPic.style.display=('none')
    SecondPic.style.display=('flex')
    ThirdPic.style.display=('none')

}

ThirdBTN.onclick=function(){
    FirstBTN.style.backgroundColor=('Transparent')
    SecondBTN.style.backgroundColor=('Transparent')
    ThirdBTN.style.backgroundColor=('#1EC1A2')
    FirstP.style.display=('none')
    SecondP.style.display=('none')
    ThirdP.style.display=('flex')
    FirstPic.style.display=('flex')
    SecondPic.style.display=('none')
    ThirdPic.style.display=('flex')

}

var Menu = document.getElementById("PlanetNames")
var MobileBTN = document.getElementById('mobilemenu')

MobileBTN.onclick =function(){
   

    var mybtn = MobileBTN.getAttribute('mybtn')

    if (mybtn == 'true') {
        Menu.style.display=('flex')
        MobileBTN.setAttribute('mybtn','false')


    }else{
        Menu.style.display=('none')
        MobileBTN.setAttribute('mybtn','true')

    }
  } 