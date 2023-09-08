
class awp_operator extends AudioWorkletProcessor {
  constructor(options){
    super();
    this.smp = [];
    for(this.x=0; this.x<sampleRate; this.x++){
      this.smp[this.x] =  Math.sin(2 * Math.PI * this.x / sampleRate);
      }
    }
  static get parameterDescriptors () {return [
    { name: 'amplitude', defaultValue: 0.25, minValue: -10000, maxValue: 10000 },
    { name: 'frequency', defaultValue: 440, minValue: -100000, maxValue: 100000 }
    ]}
  process(inputs, outputs, parameters) {;
    var f, a;
    for(var n=0; n<outputs[0][0].length; n++){
      f = parameters.frequency.length>1 ? parameters.frequency[n] : parameters.frequency[0];
      a = parameters.amplitude.length>1 ? parameters.amplitude[n] : parameters.amplitude[0];
      this.x += f;
      if(this.x>=sampleRate) {this.x = this.x % sampleRate;}else if(this.x<0){this.x = sampleRate + (this.x % sampleRate); }
      outputs[0][0][n] = this.smp[parseInt(this.x)] * a;
      }    
    return true;
    }
  }

registerProcessor("operator", awp_operator);
