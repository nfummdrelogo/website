<template>

    <div>
        vi
        <canvas>

        </canvas>
    </div>

</template>

<script>

import * as THREE from "THREE"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../assets/vi/3DMODEL.glb'
var loader = new GLTFLoader()

loader.load(model, function(obj){
    console.log(obj)
})


</script>


<style>
</style>