interface LayerConfig {
  no_of_neuron: number;
  no_of_inputs: number;
  weights?: number[][];
  bias?: number[];
}

export class Layer {
  config: LayerConfig;
  weights: number[][];
  bias: number[];

  constructor(config: LayerConfig) {
    this.config = config;
    this.weights = [];
    this.bias = [];

    if (config.weights) {
      this.weights = config.weights;
    } else {
      //init with random weights
      for (let i = 0; i < this.config.no_of_neuron; i++) {
        let neuron_weights = [];
        for (let j = 0; j < this.config.no_of_inputs; j++) {
          neuron_weights.push(Math.random());
        }
        this.weights.push(neuron_weights);
      }
    }

    if (config.bias) {
      this.bias = config.bias;
    } else {
      //init with random bias
      for (let i = 0; i < this.config.no_of_neuron; i++) {
        this.bias.push(Math.random());
      }
    }
  }

  activation(z: number) {
    return 1 / (1 + Math.exp(-z));
  }

  getOutput(inputs: number[]): number[] {
    if (inputs.length !== this.config.no_of_inputs) {
      throw new Error(`
            Invalid number of inputs found. The number of inputs (${inputs.length})
            specified in the layer configuration should match the 
            number of inputs supplied (${this.config.no_of_inputs})
        `);
    }

    let outputs: number[] = [];

    for (let i = 0; i < this.config.no_of_neuron; i++) {
      let weighted_sum = 0;
      for (let j = 0; j < this.config.no_of_inputs; j++) {
        weighted_sum += this.weights[i][j] * inputs[i];
      }
      outputs.push(this.activation(weighted_sum + this.bias[i]));
    }

    return outputs;
  }
}
