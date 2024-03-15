function createPyramid(){
    const pyramid = document.getElementById("pyramid");
    const input = document.getElementById("input");
    const layers  = parseInt(input.value);
    
    pyramid.innerHTML = "";
    count = 1;

    for(let i = 0; i < layers; i++ ){
        const layer = document.createElement("div");
        layer.classList.add("layer")

        for(let j = 0; j <= i; j++){
            const block = document.createElement("div");
            block.classList.add("block");
            block.textContent = count;
            count++; 
            layer.appendChild(block);
        }

        pyramid.appendChild(layer)
    }
}