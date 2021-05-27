function darkMode(mode) {
    if (mode == 'dark') {
        document.querySelector(':root').style.cssText = '--darkBackground: rgb(23, 23, 23); --darkText: #ffffff; --progressBackground: rgb(53, 53, 53);';
    } else if (mode == 'light') {
        document.querySelector(':root').style.cssText = '--darkBackground: rgb(255, 255, 255); --darkText: #000000; --progressBackground: rgb(222, 222, 222);';
    }
}