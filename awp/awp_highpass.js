class awp_highpass extends AudioWorkletProcessor {
  constructor(options){
    super();
    this.tmp = 0;
    this.smp = [];
    for(var x=0; x<sampleRate; x++){
      this.smp[x] =  Math.sin(2 * Math.PI * x / sampleRate);
      }
    }
  static get parameterDescriptors () {return [
    { name: 'frequency', defaultValue: 2000, minValue: 0, maxValue: sampleRate * 0.5 }
    ]}
  process(inputs, outputs, parameters) {;
    var f;
    for(var n=0; n<outputs[0][0].length; n++){
      f = parameters.frequency.length>1 ? parameters.frequency[n] : parameters.frequency[0];
      this.x = Math.exp(-this.smp[parseInt(f)]);
      this.a0 = 1.0 - this.x;
      this.b1 = -this.x;
      outputs[0][0][n] = this.a0 * inputs[0][0][n] - this.b1 * this.tmp;
      this.tmp = outputs[0][0][n];
      outputs[0][0][n] -= inputs[0][0][n];
      }    
    return true;
    }
  }
registerProcessor("highpass", awp_highpass);
