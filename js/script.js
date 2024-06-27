/**
 * 
 */
function changeFontSize() {
    var getLarger = document.querySelectorAll('.get-larger');
    for (let element of getLarger) {
        var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var newSize = parseFloat(currentSize) * 1.5;
        element.style.fontSize = newSize + 'px';
    }

    var getSmaller = document.querySelectorAll('.get-smaller');
    for (let element of getSmaller) {
        var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var newSize = parseFloat(currentSize) * 0.5;
        element.style.fontSize = newSize + 'px';
    }
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('False').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('False').offsetHeight) - 48;
    document.getElementById('False').style.left = `${x}px`;
    document.getElementById('False').style.top = `${y}px`;
}

var pressTrueButton = 0;
function doSpecialThing() {
    // Ask her first time
    if (pressTrueButton == 0) {
        changeFontSize();
        pressTrueButton++;
        document.getElementById('message1').innerHTML = "Trả lời mình thành thật thêm lần nữa đi";
        return
    }
    else if (pressTrueButton == 1) {
        changeFontSize();
        pressTrueButton++;
        document.getElementById('message2').innerHTML = "Nè cậu, đọc kĩ dòng chữ ở trên nha, đừng bảo là chữ nhỏ không nhìn thấy ^_^";
        return;
    }
    else {
        pressTrueButton++;
        document.getElementById('True').style.display = 'none';
        document.getElementById('message1').style.display = 'none';
    }
    
    document.getElementById('gift-message').style.display = 'inline-block';
    document.getElementById('gift-button').style.display = 'inline-block';
}

function nextPage() {
    window.location.href = "best-wishes.html";
    
}

function scrollPhoto(element) {
    element.style.transform = 'translateY(-45%)';
    document.getElementById('instruction').style.display = 'none';
    
    setTimeout(function() { 
        document.getElementById('refresh').style.display = 'block';
        document.getElementById('bottomButton').style.display = 'inline-block';
    }, 2100);
}

function getRandomPhoto() {
    const numberOfPhotos = 30;
    const randomIndex = 1 + Math.floor(Math.random() * numberOfPhotos);
    const selectedPhoto = "cute" + randomIndex +".jpg";
    document.getElementById('longPhoto').src ="images/mot-chut-cute/" + selectedPhoto;
    setTimeout(function(){
        document.getElementById('instruction').innerHTML = "*Cậu ơi, double tap để thấy sự bất ngờ nè";
    }, 2000);
}

