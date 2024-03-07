const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

try {
  if(localStorage.getItem(STORAGE_KEY) !== null){
    const initialFormValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    Array.from(form.elements).forEach(element => {
    const storageValue = initialFormValue[element.name];
        if (storageValue) {
            element.value = storageValue;
         };        
        })
    };
} catch (error){
console.log("LOCAL STORAGE IS EMPTY OR PARSE ERROR");
};

let formObject = {};
form.addEventListener("input", () => {
    const formValue = new FormData(form);
    formValue.forEach((value, key) => {
        formObject[key] = value.trim();
    }); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
});

form.addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});