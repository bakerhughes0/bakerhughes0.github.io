
class awp_lowpass extends AudioWorkletProcessor {
  constructor(options){
    super();
    this.tmp = 0;
    this.smp = [];
    for(this.x=0; this.x<sampleRate; this.x++){
      this.smp[this.x] =  Math.sin(2 * Math.PI * this.x / sampleRate);
      }
    }
  static get parameterDescriptors () {return [
    { name: 'frequency', defaultValue: 2000, minValue: 0, maxValue: sampleRate * 0.5 }
    ]}
  process(inputs, outputs, parameters) {;
    this.x = Math.exp(-this.smp[parseInt(parameters.frequency[0])]);
    for(var n=0; n<outputs[0][0].length; n++){
      if(parameters.frequency.length>1){
        this.x = Math.exp(-this.smp[parseInt(parameters.frequency[n])]);
        }
      this.a0 = 1.0 - this.x;
      this.b1 = -this.x;
      outputs[0][0][n] = this.a0 * inputs[0][0][n] - this.b1 * this.tmp;
      this.tmp = outputs[0][0][n];
      }    
    return true;
    }
  }
registerProcessor("lowpass", awp_lowpass);


class awp_whitenoise extends AudioWorkletProcessor {
  constructor(options){
    super();
    }
  static get parameterDescriptors () {return [
    { name: 'gain', defaultValue: .2, minValue: 0, maxValue: 1 }
    ]}
  process(inputs, outputs, parameters) {
    for(var n=0; n<outputs[0][0].length; n++){
      outputs[0][0][n] = parameters.gain * ( Math.random() * 2 - 1);
      }
    return true;
    }
  }
registerProcessor("whitenoise", awp_whitenoise);