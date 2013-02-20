var Vector = function(x, y, z){

  if(arguments.length !== 1){
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
  else{
   this.x = x.x || 0;
   this.y = x.y || 0;
   this.z = x.z || 0;
  }

  Vector.add = function(v1, v2) {
    var v3 = new Vector();
    v3.add(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
    return v3;
  }

  Vector.sub = function(v1, v2) {
    var v3 = new Vector();
    v3.sub(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    return v3;
  }
}
Vector.prototype = {

  get : function(){
    return new Vector(this.x, this.y, this.z);
  },

  add : function(v, y, z){
    if(arguments.length === 1){
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
    } else {
      this.x += v;
      this.y += y;
      this.z += z;
    }
  },
  sub : function(v, y, z){
    if(arguments.length === 1){
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
    } else {
      this.x -= v;
      this.y -= y;
      this.z -= z;
    }
  },
  mult : function(v){
    this.x *= v;
    this.y *= v;
    this.z *= v;
  },
  div : function(v){
    this.x /= v;
    this.y /= v;
    this.z /= v;
  },
  mag : function(){
    return Math.sqrt(this.x*this.x + this.y*this.y)
  },
  normalize : function(){
    var m = this.mag();
    if(m > 0) this.div(m)
  },
  limit : function(max){
    if(this.mag() > max){
      this.normalize();
      this.mult(max);
    }
  }
}
