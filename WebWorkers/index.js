var numDiv,worker=null;
window.onload = function(){
  numDiv = document.getElementById('numDiv');

  document.getElementById('start').onclick = startWorker;
  document.getElementById('stop').onclick = function(){
    console.log('stop');
    if(worker) {
      worker.terminate();
      worker = null;
    }
  };
}

function startWorker() {
  if(worker) {
    return;
  }
  worker = new Worker('count.js');
  worker.onmessage = function(e) {
    numDiv.innerHTML = e.data;
  }
}