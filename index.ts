import { Layer } from './neural_net/Layer';
import NeuralNetwork from './neural_net/NeuralNetwork';

const nn = new NeuralNetwork();

const layer1 = new Layer({ no_of_inputs: 2, no_of_neuron: 1 });

nn.addLayers(layer1);

console.log(nn.feedForward([0, 0]));
console.log(nn.feedForward([0, 1]));
console.log(nn.feedForward([1, 1]));
console.log(nn.feedForward([1, 0]));
