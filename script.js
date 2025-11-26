// const modal = document.getElementById("modal");
// const openBtn = document.getElementById("openModal");
// const closeBtn = document.getElementById("closeModal");

// openBtn.addEventListener("click", () => {
//   modal.classList.remove("hidden");
// });

// closeBtn.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

// 1. Открытие / закрытие модального окна


// Находим модалку
const modal = document.getElementById("modal");

// Находим кнопку "Open"
const openBtn = document.getElementById("openModal");

// Находим кнопку "Close"
const closeBtn = document.getElementById("closeModal");

// Когда нажимаем кнопку → модалка появляется
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden"); // убираем скрывающий класс
});

// Когда нажимаем "Close" → модалка исчезает
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden"); // добавляем скрывающий класс
});

// Если кликнули по фону (а не по окну) → закрыть модалку
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});


// 2. ПРОСТАЯ ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ИМЕНИ / FUNCTION FOR CHECKING A NAME

function validateName(name) {
  // убираем пробелы в начале и в конце
  name = name.trim();

  // если пусто или меньше 2 букв → ошибка
  if (name.length < 2) {
    return "Name must contain at least 2 letters";
  }
    
  // Проверяем максимальную длину
  if (name.length > 40) {
    return "Name is too long (max 40 characters)";
  }

  // проверяем, что допустимы только буквы и пробелы
  if (!/^[A-Za-z\s]+$/.test(name)) {
    return "Name can only contain letters";
  }

  // если всё нормально → возвращаем имя как есть
  return name;
}

// 3. ОБРАБОТКА ФОРМЫ / FORM PROCESSING

// Находим форму
const form = document.getElementById("messageForm");

// Добавляем обработчик отправки / Adding a send handler
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Disable page reloading

  // take values ​​from form fields
  const rawName = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value.trim();
  const message = document.querySelector("textarea[name='message']").value.trim();

  // Regular expression for EMAIL validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // массив, куда добавляются ошибки / array where errors are added
  let errors = [];

  // ------ Проверка имени ------
  const nameValidation = validateName(rawName); // вызываем нашу функцию

  // Если функция вернула сообщение с ошибкой
  if (nameValidation.includes("Name")) {
    errors.push(nameValidation);
  }

  // ------ Проверка email ------
  if (!emailPattern.test(email)) {
    errors.push("The email looks wrong");
  }

  // ------ Проверка сообщения ------
  if (message === "") {
    errors.push("Message cannot be empty");
  }

  // 4. Если ошибки есть → печатаем их в консоль
  if (errors.length > 0) {
    console.log("ERRORS:");
    errors.forEach((err) => console.log(err));
    return; // останавливаем выполнение дальше
  }

  // 5. Если ошибок НЕТ → выводим данные в консоль
  console.log("Name:", nameValidation); 
  console.log("Email:", email);
  console.log("Message:", message);
});
