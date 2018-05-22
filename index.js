function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').getElementsByClassName("target")[0]

}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n)
