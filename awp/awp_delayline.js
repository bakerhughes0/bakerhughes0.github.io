
class awp_delayline extends AudioWorkletProcessor {
  constructor(options){
    super();
    this.smp = [];
    for(this.x=0; this.x<sampleRate; this.x++){
      this.smp[this.x] = 0;
      }
    this.x = 0;
    }
  static get parameterDescriptors () {return [
    { name: 'delaytime', defaultValue: 0.25, minValue: 0, maxValue: 0.999 },
    ]}
  process(inputs, outputs, parameters) {;
    var d, x2;
    d = parameters.delaytime.length>1 ? parameters.delaytime[n] : parameters.delaytime[0];
    x2 = this.x - (sampleRate * d);
    if(x2>=sampleRate) {x2 = x2 % sampleRate;}else if(x2<0){x2 = sampleRate + (x2 % sampleRate); }

    for(var n=0; n<inputs[0][0].length; n++){
      this.smp[this.x] = inputs[0][0][n];
      outputs[0][0][n] = this.smp[this.x] * .999 + this.smp[x2]*.5;
      this.x++;
      if(this.x>=sampleRate) {this.x = this.x % sampleRate;}
      x2++;
      if(x2>=sampleRate) {x2 = x2 % sampleRate;}
      }    
    return true;
    }
  }

registerProcessor("delayline", awp_delayline);
