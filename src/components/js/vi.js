import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "@/assets/vi/3DMODEL2.glb";
import map1 from "@/assets/vi/maps/Right.png";
import map2 from "@/assets/vi/maps/Left.png";
import map3 from "@/assets/vi/maps/Top.png";
import map4 from "@/assets/vi/maps/Bottom.png";
import map5 from "@/assets/vi/maps/Back.png";
import map6 from "@/assets/vi/maps/Front.png";



export default {
  mounted(canvas) {


    let scene = new THREE.Scene
    let camera = new THREE.PerspectiveCamera(25, canvas.height / canvas.width, 0.1, 1000);
    let manager = new THREE.LoadingManager();
    let gltfLoader = new GLTFLoader(manager);
    let cubeTextureLoader = new THREE.CubeTextureLoader(manager)

    let renderer = new THREE.WebGLRenderer({
      canvas, alpha: true, antialias: true
    })

    renderer.setClearColor(0x00000000, 0)
    renderer.setClearAlpha(0)
    renderer.clearColor()


    // renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;

    scene.add(new THREE.AmbientLight(0xffffff, 1))

    let textureCube = cubeTextureLoader.load([
      map1, map2, map3, map4, map5, map6
    ]);






    let target = new THREE.Mesh()

    gltfLoader.load(model, function (obj) {


      obj.scene.children.forEach(obj => {
        target = obj

        if (obj.type == 'Mesh') {
          // obj.material = new THREE.MeshPhysicalMaterial({
          //   map: obj.material.map,
          //   metalness: 6,
          //   envMap: textureCube,
          //   clearcoat: 1,
          //   shading: THREE.SmoothShading
          // })
          obj.material.envMap = textureCube
          obj.material.envMapIntensity = 2
          obj.material.metalness = .99
          obj.scale.y = 1.3
          scene.add(obj)
        }


      })

    });

    manager.onProgress = function (item, loaded, total) {
      console.log('loading', loaded + "/" + total)
      if (loaded == total)
        start()
    }

    camera.position.set(0, 0, 100)

    let x = 0;
    let y = 0;

    function move(ex, ey) {
      x = ex / innerWidth - 0.5
      y = ey / innerHeight - 0.5
    }

    let animationObj = {
      stop: false,
      mouseMove: function (e) {
        move(e.pageX, e.pageY)
      },
      touchmove: function (e) {
        move(e.changedTouches[0].pageX, e.changedTouches[0].pageY)
      },
      click: function () {
        target.rotation.y = -2 * Math.PI
      }, canvas
    }

    addEventListener('mousemove', animationObj.mouseMove)
    addEventListener('touchmove', animationObj.touchmove)
    addEventListener('click', animationObj.click)

    function update() {
      // console.log('run')
      if (animationObj.stop) return;
      requestAnimationFrame(update);

      let tx = -x * 4 + 2
      let ty = y * 4 - 1.5
      let tz = Math.sqrt(Math.abs(80 - tx * tx - ty * ty))

      target.rotation.y *= 0.95
      target.rotation.x *= 0.95


      camera.position.x += (tx - camera.position.x) * 0.1
      camera.position.y += (ty - camera.position.y) * 0.1
      camera.position.z += (tz - camera.position.z) * 0.1

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
    removeEventListener('touchmove', animationObj.touchmove)
    removeEventListener('click', animationObj.click)

  }
}