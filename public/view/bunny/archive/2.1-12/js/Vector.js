/**
 * Vector
 *
 * Javascript implementation of the processing PVector class.
 * http://code.google.com/p/processing/source/browse/trunk/processing/core/src/processing/core/PVector.java
 */


var Vector = function(_x, _y, _z){

  "use strict";


  var pub = this;

  pub.x = _x || 0;
  pub.y = _y || 0;
  pub.z = _z || 0;



  /**
   * set()
   * Set the x, y, and z component of the vector.
   */
  pub.set = function(_x, _y, _z){

    pub.x = _x;
    pub.y = _y;
    pub.z = _z || 0;
  }


  /**
   * get()
   * Get a copy of the vector.
   */
  pub.get = function(){

    return new Vector(pub.x, pub.y, pub.z);
  }


  /**
   * mag()
   * Calculate the magnitude of the vector.
   */
  pub.mag = function(){

    return Math.sqrt(pub.x*pub.x + pub.y*pub.y + pub.z*pub.z);
  }


  /**
   * magSq()
   * Calculate the magnitude of the vector, squared.
   */
  pub.magSq = function(){

    return (pub.x*pub.x + pub.y*pub.y + pub.z*pub.z);
  }


  /**
   * add()
   * Adds x, y, and z components to a vector, one vector to another, 
   * or two independent vectors.
   */
  pub.add = function(_vector){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    pub.x += _vector.x;
    pub.y += _vector.y;
    pub.z += _vector.z || 0;
  }


  /**
   * sub()
   * Subtract x, y, and z components from a vector, one vector from another, 
   * or two independent vectors.
   */
  pub.sub = function(_vector){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    pub.x -= _vector.x;
    pub.y -= _vector.y;
    pub.z -= _vector.z || 0;
  }


  /**
   * mult()
   * Multiply a vector by a scalar or one vector by another.
   */
  pub.mult = function(_vector){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    pub.x *= _vector.x;
    pub.y *= _vector.y;
    pub.z *= _vector.z || 1;
  }


  /**
   * div()
   * Divide a vector by a scalar or one vector by another.
   */
  pub.div = function(_vector){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    pub.x /= _vector.x;
    pub.y /= _vector.y;
    pub.z /= _vector.z || 1;
  }


  /**
   * dist()
   * Calculates the distance between two points.
   */
  pub.dist = function(_vector){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    var dx = pub.x - _vector.x;
    var dy = pub.y - _vector.y;
    var dz = pub.z - (_vector.z || 0);
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
  }


  /**
   * dot()
   * Calculate the dot product of two vectors.
   */
  pub.dot = function(_vector){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    return pub.x*_vector.x + pub.y*_vector.y + pub.z*(_vector.z || 0);
  }


  /**
   * cross()
   * Calculate and return the cross product.
   */
  pub.cross = function(_vector){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    var crossX = pub.y * _vector.z - _vector.y * pub.z;
    var crossY = pub.z * _vector.x - _vector.z * pub.x;
    var crossZ = pub.x * _vector.y - _vector.x * pub.y;

    return new Vector(crossX, crossY, crossZ);
  }


  /**
   * normalize()
   * Normalize the vector to a length of 1.
   */
  pub.normalize = function(){

    var m = pub.mag();
    if (m != 0 && m != 1) {
      pub.div(new Vector(m, m, m));
    }
  }


  /**
   * limit()
   * Limit the magnitude of the vector.
   */
  pub.limit = function(_max){

    if (pub.magSq() > _max * _max) {
      pub.normalize();
      pub.mult(new Vector(_max, _max, _max));
    }
  }


  /**
   * setMag()
   * Set the magnitude of the vector.
   */
  pub.setMag = function(_len){

    pub.normalize();
    pub.mult(new Vector(_len, _len, _len));
  }


  /**
   * heading()
   * Calculate the angle of rotation for this vector.
   */
  pub.heading = function(){

    var angle = Math.atan2(-pub.y, pub.x);
    return -1*angle;
  }


  /**
   * rotate()
   * Rotate the vector by an angle (2D only).
   */
  pub.rotate = function(_theta){

    var xTemp = pub.x;

    pub.x = pub.x*Math.cos(_theta) - pub.y*Math.sin(_theta);
    pub.y = xTemp*Math.sin(_theta) + pub.y*Math.cos(_theta);
  }


  /**
   * lerp()
   * Linear interpolate the vector to another vector.
   */
  pub.lerp = function(_vector, _amt){

    if(_vector.y === undefined) _vector = new Vector(_vector, _vector);

    pub.x = lerp(pub.x, _vector.x, _amt);
    pub.y = lerp(pub.y, _vector.y, _amt);
    pub.z = lerp(pub.z, (_vector.z) || 0, _amt);
  }


  var lerp = function(_start, _end, _amt){

    return (_start + _amt*(_end - _start));
  }


  /**
   * array()
   * Return a representation of the vector as a float array.
   */
  pub.array = function(){

    return [pub.x, pub.y, pub.z];
  }
}



/**
 * random2D
 * Make a new 2D unit vector with a random direction.
 */
Vector.random2D = function(){

  return Vector.fromAngle(Math.random()*Math.PI*2);
}


/**
 * random3D
 * Make a new 3D unit vector with a random direction.
 */
Vector.random3D = function(){

  var tmpVector =  Vector.fromAngle(Math.random()*Math.PI*2);
  tmpVector.z = (Math.random() * 2) - 1;

  return tmpVector;
}


/**
 * fromAngle
 * Make a new 2D unit vector with a random direction.
 */
Vector.fromAngle = function(_angle){

  return new Vector(Math.cos(_angle), Math.sin(_angle));
}


/**
 * angleBetween()
 * The angle between to vectors.
 */
Vector.angleBetween = function(_v1, _v2){

  var x = _v1.x - _v2.x;
  var y = _v1.y - _v2.y;
  var z = _v1.z - _v2.z;
  return Math.atan2(y, Math.sqrt(x*x + z*z));
}


/**
 * radToDeg()
 * Converts radians to degrees.
 */
Vector.radToDeg = function(_rad){

  var deg = _rad * 180 / Math.PI;
  return deg;
}


/**
 * degToRad()
 * Converts degress to radians.
 */
Vector.degToRad = function(_deg){

  var rad = _deg * Math.PI / 180;
  return rad;
}


/**
 * linear()
 */
Vector.linear = function(_v0, _v1, _t){

  var x = (1-_t) * _v0.x + _t * _v1.x;
  var y = (1-_t) * _v0.y + _t * _v1.y;
  return new Vector(x, y);
}


/**
 * quadratic()
 */
Vector.quadratic = function(_v0, _v1, _v2, _t){

  var x = Math.pow((1-_t), 2) * _v0.x + (2*_t) * (1-_t) * _v1.x + Math.pow(_t, 2) * _v2.x;
  var y = Math.pow((1-_t), 2) * _v0.y + (2*_t) * (1-_t) * _v1.y + Math.pow(_t, 2) * _v2.y;
  return new Vector(x, y);
}


/**
 * cubic()
 */
Vector.cubic = function(_v0, _v1, _v2, _v3, _t){

  var x = _v0.x * Math.pow((1-_t), 3) + 3 * _v1.x * _t * Math.pow((1-_t), 2) + 3 * _v2.x * Math.pow(_t, 2) * (1-_t) + _v3.x * Math.pow(_t, 3);
  var y = _v0.y * Math.pow((1-_t), 3) + 3 * _v1.y * _t * Math.pow((1-_t), 2) + 3 * _v2.y * Math.pow(_t, 2) * (1-_t) + _v3.y * Math.pow(_t, 3);
  return new Vector(x, y);
}

