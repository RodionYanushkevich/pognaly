import {getMailRegEx} from '../form-validate/regular-expression';

const initValidation = () => {
  const container = document.querySelector('[data-el="registration"]');
  if (!container) {
    return;
  }
  const [registrationInputWrapper, registrationBtn] = container.children;
  const registrationInput = registrationInputWrapper.children[0].children[0];

  const inputValidation = () => {
    const emailValue = registrationInput.value;
    registrationInput.classList.remove('valid', 'error');


    if (!registrationInput.checkValidity() || !getMailRegEx().test(emailValue)) {
      registrationInput.reportValidity();
      registrationInput.classList.add('error');
      return;
    } else {
      registrationInput.classList.add('valid');
    }
  };

  registrationBtn.addEventListener('click', inputValidation);
  registrationInput.addEventListener('focus', ()=> {

    registrationInput.classList.remove('valid', 'error');
  });
};
export {initValidation};
