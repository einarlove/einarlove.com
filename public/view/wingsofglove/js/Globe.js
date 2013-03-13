function Globe(options){
	"use strict";

	var globe = new THREE.Object3D();
	globe.verticalAxis = new THREE.Object3D();

	globe.size = options.size || 10;
	globe.color = options.color || 0x000000;
	globe.segments = options.segments || 5;
	globe.wireframe = options.wireframe || false;
	globe.name = "Globe";

	// Load texture and create a pattern of it
	globe.texture = THREE.ImageUtils.loadTexture( 'js/textures/Texture_Grass.jpg' );
	globe.texture.wrapS = globe.texture.wrapT = THREE.RepeatWrapping;
	globe.texture.repeat.set( 40, 40 );

	var geometry = new THREE.SphereGeometry(globe.size, globe.segments, globe.segments);
	var material = new THREE.MeshPhongMaterial();
	material.color = new THREE.Color(globe.color);
	material.map = globe.texture;
	material.wireframe = globe.wireframe;

	var mesh = new THREE.Mesh(geometry, material);
	mesh.name = "Globe";
	globe.receiveShadow = true;
	mesh.receiveShadow = true;

	globe.add(mesh);

	globe.verticalAxis.add(globe);
	scene.add(globe.verticalAxis);

	// Create trees on globe
	// @param Object{ size: $, amount: $ }
	globe.createTrees = function(s){
		var points = THREE.GeometryUtils.randomPointsInGeometry(geometry, s.amount);
		points.forEach(function(position){
			globe.add( new Tree(s.size, position) )
		})
	}

	// Create grass on globe
	// @param Object{ size: $, amount: $ }
	globe.createGrasses = function(s){
		var points = THREE.GeometryUtils.randomPointsInGeometry(geometry, s.amount);
		points.forEach(function(position){
			globe.add( new Grass(s.size, position) )
		})
	}

	return globe;
}