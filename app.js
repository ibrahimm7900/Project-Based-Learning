//Toggle//

// Elements //

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const bars = document.querySelector("#bars");
   strengthDiv = document.querySelector("#strength");
   passwordInput = document.querySelector("#password");
   passwordInput1 = document.querySelector('#password1')
;

// Event Listeners //

registerBtn.addEventListener('click', () => {
    container.classList.add('active')
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
});


// Password Strength Indicator //

// Elements //



const strength = {
    1: "Weak",
    2: "Medium", 
    3: "Strong",
    4: "Very-Strong",
};

const getIndicator = (password, strengthValue) => {
    strengthValue.upper = /[A-Z]/.test(password);
    strengthValue.lower = /[a-z]/.test(password);
    strengthValue.numbers = /\d/.test(password);
    strengthValue.special = /[!@#$%^&*]/.test(password);



let strengthIndicator = 0;

for (let metric in strengthValue) {
    if (strengthValue[metric] === true) {
        strengthIndicator++;
    }
}

return strength[strengthIndicator] ?? "";
};

const getStrength = (password) => {
    let strengthValue = {
        upper: false,
        numbers: false,
        lower: false,
    };

return getIndicator(password, strengthValue);
};

const handleChange = () => {
    let { value: password } = passwordInput;

    console.log(password);

    const strengthText = getStrength(password);

    bars.classList = "";

    if (strengthText) {
        strengthDiv.innerText = `${strengthText} Password`;
        bars.classList.add(strengthText);
    } else {
        strengthDiv.innerText = "";
    }
};

// Password visibiliy toggle //



document.addEventListener('DOMContentLoaded', (event) => {
    ;
    const togglePasswordButton = document.getElementById('togglePassword');
    const togglePasswordIcon = togglePasswordButton.querySelector('i');

    togglePasswordButton.addEventListener('click', () => {
        // Toggle the type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the icon
        if (type === 'password') {
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
        } else {
            togglePasswordIcon.classList.remove('fa-eye');
            togglePasswordIcon.classList.add('fa-eye-slash');
        }
    });
});




document.addEventListener('DOMContentLoaded', (event) => {
    const passwordInput1 = document.getElementById('password1');
    const togglePasswordButton1 = document.getElementById('togglePassword1');
    const togglePasswordIcon1 = togglePasswordButton1.querySelector('i');

    togglePasswordButton1.addEventListener('click', () => {
        // Toggle the type attribute
        const type = passwordInput1.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput1.setAttribute('type', type);

        // Toggle the icon
        if (type === 'password') {
            togglePasswordIcon1.classList.remove('fa-eye-slash');
            togglePasswordIcon1.classList.add('fa-eye');
        } else {
            togglePasswordIcon1.classList.remove('fa-eye');
            togglePasswordIcon1.classList.add('fa-eye-slash');
        }
    });
});