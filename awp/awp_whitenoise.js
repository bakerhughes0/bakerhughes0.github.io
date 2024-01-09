
class awp_whitenoise extends AudioWorkletProcessor {
  constructor(options){
    super();
    }
  static get parameterDescriptors () {return [
    { name: 'gain', defaultValue: .2, minValue: 0, maxValue: 1 }
    ]}
  process(inputs, outputs, parameters) {
    var a;
    for(var n=0; n<outputs[0][0].length; n++){
      a = parameters.gain.length>1 ? parameters.gain[n] : parameters.gain[0];
      outputs[0][0][n] = a * ( Math.random() * 2 - 1);
      }
    return true;
    }
  }
registerProcessor("whitenoise", awp_whitenoise);