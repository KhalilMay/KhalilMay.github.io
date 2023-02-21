window.onload = function () { 
checkBox = document.getElementById('checkbox');
r = document.querySelector(':root');
rs = getComputedStyle(r);

checkBox.addEventListener('change', (e) =>{
    if(checkBox.checked){

        r.style.setProperty('--mainTextColor', rs.getPropertyValue('--mainTextColor-light'));
        r.style.setProperty('--secondaryTextColor', rs.getPropertyValue('--secondaryTextColor-light'));
        r.style.setProperty('--mainLinkColor', rs.getPropertyValue('--mainLinkColor-light'));
        r.style.setProperty('--mainBorderColor', rs.getPropertyValue('--mainBorderColor-light'));
        r.style.setProperty('--mainBgColor', rs.getPropertyValue('--mainBgColor-light'));
    }
    else{
        r.style.setProperty('--mainTextColor', rs.getPropertyValue('--mainTextColor-dark'));
        r.style.setProperty('--secondaryTextColor', rs.getPropertyValue('--secondaryTextColor-dark'));
        r.style.setProperty('--mainLinkColor', rs.getPropertyValue('--mainLinkColor-dark'));
        r.style.setProperty('--mainBorderColor', rs.getPropertyValue('--mainBorderColor-dark'));
        r.style.setProperty('--mainBgColor', rs.getPropertyValue('--mainBgColor-dark'));
    }
});
}
