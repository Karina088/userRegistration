// let form = document.createElement('form');
// form.action = 'https://google.com/search';
// form.method = 'GET';

// form.innerHTML = '<input name="q" value="test">';

// // перед отправкой формы, её нужно вставить в документ
// document.body.append(form);

// form.submit();

// https://habr.com/ru/post/245731/

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    console.log("Saving value", form.elements.value.value);
    event.preventDefault();
});
