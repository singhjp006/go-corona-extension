var elementsInsideBody = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

var words = ['zoombie', 'alien', 'baby cow', 'haha', 'cool', 'princess', 'go corona'];


function replaceText (node) {
    let value = node.nodeValue;

    value = value.replace(/coronavirus/gi, words[Math.floor(Math.random() * words.length)]);
    value = value.replace(/Coronavirus/gi, words[Math.floor(Math.random() * words.length)]);
    value = value.replace(/corona/gi, words[Math.floor(Math.random() * words.length)]);
    value = value.replace(/Corona/gi, 'haha');
    value = value.replace(/covid/gi, 'trump');
    value = value.replace(/Covid/gi, 'yo');
    value = value.replace(/covid19/gi, words[Math.floor(Math.random() * words.length)]);
    value = value.replace(/Covid19/gi, words[Math.floor(Math.random() * words.length)]);
    node.nodeValue = value;
}

window.onload = findAndReplace();