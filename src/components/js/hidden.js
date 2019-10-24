export default function hidden(callback){
    window.addEventListener('keydown', function(e){
        if(e.altKey&&e.key=='x') callback()
    })
}