document.getElementById('header-container').style.backgroundColor = 'darkgreen';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'salmon';

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(255, 234, 118)';

for (let index = 0; index < document.querySelectorAll('.emergency-tasks h3').length ; index += 1) {
    document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = 'purple';
}

for (let index = 0; index < document.querySelectorAll('.no-emergency-tasks h3').length ; index += 1) {
    document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = 'black';
}

document.getElementsByTagName('footer')[0].style.backgroundColor = 'seagreen';

