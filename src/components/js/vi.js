import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "@/assets/vi/3DMODEL.glb";
import map1 from "@/assets/vi/maps/Right.png";
import map2 from "@/assets/vi/maps/Left.png";
import map3 from "@/assets/vi/maps/Top.png";
import map4 from "@/assets/vi/maps/Bottom.png";
import map5 from "@/assets/vi/maps/Back.png";
import map6 from "@/assets/vi/maps/Front.png";

var gltfLoader = new GLTFLoader();
var cubeTextureLoader = new THREE.CubeTextureLoader()



export default {
  mounted(canvas) {


    var scene = new THREE.Scene
    var camera = new THREE.PerspectiveCamera(25, canvas.height / canvas.width, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({
      canvas, alpha: true, antialias: true
    })

    renderer.setClearColor(0x00000000, 0)
    renderer.setClearAlpha(0)
    renderer.clearColor()

    
    // renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.gammaOutput = true;
    renderer.gammaFactor = 1;
    
    // scene.add(new THREE.AmbientLight(0xffffff, 1))

    var textureCube = cubeTextureLoader.load([
      map1, map2, map3, map4, map5, map6
    ]);



    


    var target = new THREE.Mesh()

    gltfLoader.load(model, function (obj) {


      obj.scene.children.forEach(obj => {
        target = obj

        if (obj.type == 'Mesh') {
          obj.material = new THREE.MeshPhysicalMaterial({
            map: obj.material.map,
            metalness  : 6,
            envMap: textureCube,
            clearcoat: 1,
          })
          obj.scale.y = 1.5
          scene.add(obj)
        }

        start()

      })

    });

    camera.position.set(0, 0, 100)

    var x = 0;
    var y = 0;

    var animationObj = {
      stop: false,
      mouseMove: function (e) {
        x = e.pageX / innerWidth - 0.5
        y = e.pageY / innerHeight - 0.5
      }
    }

    addEventListener('mousemove', animationObj.mouseMove)
    function update() {
      console.log('run')
      if (animationObj.stop) return;
      requestAnimationFrame(update);

      var tx = -x * 3 + 3
      var ty = y * 3 - 2
      var tz = Math.sqrt(80 - tx * tx - ty * ty)

      target.rotation.y *= 0.985
      target.rotation.x *= 0.985


      camera.position.x += (tx - camera.position.x) * 0.035
      camera.position.y += (ty - camera.position.y) * 0.035
      camera.position.z += (tz - camera.position.z) * 0.035

      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)

    }

    function start() {
      target.rotation.y = -5;
      target.rotation.x = -1;
      update()
    }

    return animationObj
  },

  destroyed(animationObj) {
    animationObj.stop = true
    removeEventListener('mousemove', animationObj.mouseMove)

  }
}