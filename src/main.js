'use strict';

const INPUT_BUTTON_TYPES = ['button', 'submit', 'reset'];

// eslint-disable-next-line no-unused-vars
function onSubmit(event) {
  event.preventDefault();

  const { target: form } = event;

  const formValue = [...form.elements]
    .filter(({ type }) => !INPUT_BUTTON_TYPES.includes(type))
    .reduce((acc, { value, name }) => ({
      ...acc, [name]: value,
    }), {});

  window.alert(
    `Form name: ${form.name}\nForm value: ${JSON.stringify(formValue, null, 4)}`
  );
}
