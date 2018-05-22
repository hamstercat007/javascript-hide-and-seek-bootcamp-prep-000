function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').getElementsByClassName("target")[0]

}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedList = document.getElementsByClassName("ranked-list")
  for (let i = 0; i < rankedList.length; i++) {
  rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
 var currentNode = document.getElementById('grand-node')
 while(true){
   if (currentNode.children.length === 0){
     return node
   }
   else node = node.children[0]
 }
}
