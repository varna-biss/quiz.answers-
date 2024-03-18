window.onload = function(){
  let result = {};
  let step = 0;


  function showQuestion(questionNumber) {
    document.querySelector(".question").innerHTML = quiz[step]['q'];
    let answer = '';
    for (let key in quiz[step]['a']) {
      answer += `<li data-v="${key}" class="answer-variant">${quiz[step]['a'][key]}</li>`;
    }
    document.querySelector(".answer").innerHTML = answer;
  }
  document.onclick = function (event) {
    event.stopPropagation();
    if (event.target.classList.contains('answer-variant') && step < quiz.length) {
      if (result[event.target.dataset.v] != undefined) {
        result[event.target.dataset.v]++;
      }
      else {
        result[event.target.dataset.v] = 0;
      }
      step++;
      if (step == quiz.length) {
        document.querySelector('.question').remove();
        document.querySelector('.answer').remove();
        showResult();
        
      }
      else {
        showQuestion(step);
      }
    }
    console.log(result);
  }
  function showResult(){
    let key = Object.keys(result).reduce(function (a,b) {
      return result[a] > result[b] ? a : b;
    });
    let div = document.createElement('div');
    div.classList.add('result');
    div.innerHTML = answers[key]['description'];
    document.querySelector('main').appendChild(div);
    
    let h3 = document.createElement('h3');
    h3.classList.add('text-ansvers');
    h3.innerHTML = answers[key]['text-title'];
    document.querySelector('main').appendChild(h3);
    
    let a = document.createElement('a');
    a.classList.add('link');
    a.href = answers[key]['next'];
    a.innerHTML = answers[key]['text'];
    document.querySelector('main').appendChild(a);
    
    let img = document.createElement('img');
    img.classList.add('image');
    img.src = answers[key]['image'];
    document.querySelector('main').appendChild(img);
    
    let b = document.createElement('a');
    b.classList.add('link');
    b.setAttribute('data-fancybox', 'gallery');
    b.href = answers[key]['video'];
    b.innerHTML = answers[key]['text-demo'];
    document.querySelector('main').appendChild(b);




    let film = document.createElement('img');
    film.classList.add('image-film');
    film.src = answers[key]['image-film'];
    document.querySelector('main').appendChild(film);

    let c = document.createElement('a');
    c.classList.add('link');
    c.setAttribute('data-fancybox', 'gallery');
    c.href = answers[key]['youtube'];
    c.innerHTML = answers[key]['text-vid'];
    document.querySelector('main').appendChild(c);

     
  }
  
  showQuestion(step);
}