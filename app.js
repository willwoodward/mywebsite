let darkMode = true;

let toggleDarkMode = function () {
    if (darkMode === false) {
        document.querySelector(':root').style.cssText = '--darkBackground: rgb(23, 23, 23); --darkText: #ffffff; --darkCardBackground: rgb(33, 33, 33); --progressBackground: rgb(53, 53, 53);';
        document.querySelector('.toggle i.switch').style.cssText = 'visibility: visible;';
        document.querySelector('.toggle i.swap').style.cssText = 'visibility: hidden;';
        darkMode = true;
    } 
    
    else if (darkMode == true) {
        document.querySelector(':root').style.cssText = '--darkBackground: rgb(255, 255, 255); --darkText: #000000; --darkCardBackground: rgb(243,243, 243); --progressBackground: rgb(222, 222, 222);';
        document.querySelector('.toggle i.switch').style.cssText = 'visibility: hidden;';
        document.querySelector('.toggle i.swap').style.cssText = 'visibility: visible;';
        darkMode = false;
    }
};

let checkDarkMode = function () {
    if (darkMode === true) {
        document.querySelector(':root').style.cssText = '--darkBackground: rgb(23, 23, 23); --darkText: #ffffff; --darkCardBackground: rgb(33, 33, 33); --progressBackground: rgb(53, 53, 53);';
        document.querySelector('.toggle i.switch').style.cssText = 'visibility: visible;';
        document.querySelector('.toggle i.swap').style.cssText = 'visibility: hidden;';
    } 
    
    else if (darkMode == false) {
        document.querySelector(':root').style.cssText = '--darkBackground: rgb(255, 255, 255); --darkText: #000000; --darkCardBackground: rgb(243,243, 243); --progressBackground: rgb(222, 222, 222);';
        document.querySelector('.toggle i.switch').style.cssText = 'visibility: hidden;';
        document.querySelector('.toggle i.swap').style.cssText = 'visibility: visible;';
    }
};

window.onload = function() {
    checkDarkMode();
};