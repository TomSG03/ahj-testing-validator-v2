import Cells from './cells';

const field = document.getElementById('field');

const cellsField = new Cells(4, 4, field);

cellsField.create();
cellsField.goStartPosition();
cellsField.startRandom();
