import Validator from './validator';

const validDom = document.getElementById('validator');

const valid = new Validator(validDom);
valid.check();
