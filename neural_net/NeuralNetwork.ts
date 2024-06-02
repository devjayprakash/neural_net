import { Layer } from './Layer';
import SoftMaxLayer from './SoftMaxLayer';

class NeuralNetwork {
  layers: (Layer | SoftMaxLayer)[];

  constructor() {
    this.layers = [];
  }

  addLayer(layer: Layer) {
    this.layers.push(layer);
  }

  addLayers(...layers: Layer[]) {
    for (let i = 0; i < layers.length; i++) {
      this.layers.push(layers[i]);
    }
  }

  feedForward(inputs: number[]) {
    let layer_output = inputs;
    for (let i = 0; i < this.layers.length; i++) {
      let layer = this.layers[i];
      let output = layer.getOutput(layer_output);
      layer_output = output;
    }
    return layer_output;
  }
}

export default NeuralNetwork;
