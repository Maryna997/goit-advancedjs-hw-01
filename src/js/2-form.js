const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');

const formData = {
    email: "",
    message: "",
};

form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

    try {
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    } catch (error) {
        console.error(error);
    }
});

try { 
    const lsValue = localStorage.getItem("feedback-form-state");
    if (lsValue) {
        const parsedValue = JSON.parse(lsValue);
        formData.email = parsedValue.email || "";
        formData.message = parsedValue.message || "";
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
} catch (error) {
    console.error(error);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (Object.values(formData).some(value => value === "")) {
        return alert("Fill please all fields");
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
});
