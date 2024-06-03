document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-item');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем стандартное действие ссылки
            
            var targetId = this.getAttribute('href'); // Получаем значение атрибута href
            var targetElement = document.querySelector(targetId); // Находим элемент на странице по ID
            
            if (targetElement) {
                var offset = targetElement.getBoundingClientRect().top + window.pageYOffset; // Вычисляем отступ от верха страницы до элемента
                window.scrollTo({ top: offset, behavior: 'smooth' }); // Прокручиваем страницу к элементу
            }
        });
    });
});


function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}












// Получаем элементы
var modal = document.getElementById("myModal");
var successModal = document.getElementById("successModal");
var requestModal = document.getElementById("requestModal");
var form = document.getElementById("appointmentForm");
var requestForm = document.getElementById("requestForm");
var btn = document.getElementById("openModal");
var requestBtn = document.getElementById("openRequestModal");
var closeBtn = document.querySelectorAll(".close");
var dateInput = document.getElementById("date");
var timeInput = document.getElementById("time");
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var requestNameInput = document.getElementById("requestName");
var requestPhoneInput = document.getElementById("requestPhone");
var textModal = document.getElementById("textModal");
var openRightModalBtn = document.getElementById("openRightModal");

// Функция для сброса значений полей формы
function resetForm() {
    nameInput.value = ""; 
    phoneInput.value = ""; 
    dateInput.value = ""; 
    timeInput.value = ""; 
}

function resetRequestForm() {
    requestNameInput.value = "";
    requestPhoneInput.value = "";
}

// Когда пользователь нажимает на кнопку "Записаться на приём", открыть модальное окно
btn.onclick = function() {
    modal.style.display = "block";
    resetForm();
}


// Когда пользователь нажимает на кнопку "Оставить заявку", открыть модальное окно
requestBtn.onclick = function() {
    requestModal.style.display = "block";
    resetRequestForm();
}



// Когда пользователь нажимает на кнопку "Закрыть" (x) или вне модального окна, закрыть модальное окно
closeBtn.forEach(function(button) {
    button.onclick = function() {
        modal.style.display = "none";
        successModal.style.display = "none";
        requestModal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target == modal || event.target == successModal || event.target == requestModal) {
        modal.style.display = "none";
        successModal.style.display = "none";
        requestModal.style.display = "none";
    }
}

// Устанавливаем минимальную дату на текущий день
window.onload = function() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Январь - это 0
    var year = today.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    var todayDate = year + '-' + month + '-' + day;
    dateInput.setAttribute('min', todayDate);
}

// При отправке формы записи на приём
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var selectedTime = timeInput.value;
    var selectedHour = parseInt(selectedTime.split(':')[0]);
    var selectedMinutes = parseInt(selectedTime.split(':')[1]);

    if (selectedHour < 10 || selectedHour >= 22) {
        alert("Пожалуйста, выберите время между 10:00 и 22:00.");
    } else if (![0, 15, 30, 45].includes(selectedMinutes)) {
        alert("Пожалуйста, выберите минуты 00, 15, 30 или 45.");
    } else {
        modal.style.display = "none"; 
        successModal.style.display = "block"; 
        resetForm(); 
    }
});


// При отправке формы заявки
requestForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    requestModal.style.display = "none"; 
    successModal.style.display = "block"; 
    resetRequestForm(); 
});