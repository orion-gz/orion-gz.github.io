import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  imgLazy,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  toc
} from './modules/plugins';

basic();
initSidebar();
initTopbar();
imgLazy();
imgPopup();
initLocaleDatetime();
initClipboard();
toc();

/*
//Javascript
var lastScrollTop = 0;
var delta = 5;
var fixBox = $('#topbar-wrapper');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //Scroll down
        fixBox.removeClass('show');
    }else{
        if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //Scroll up
            fixBox.addClass('show');
        }
    }
    lastScrollTop = nowScrollTop;
}
*/