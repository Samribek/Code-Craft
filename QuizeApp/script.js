const form = document.querySelector(".quiz-form");

const questions =  document.querySelectorAll(".question");
const result = document.querySelector('.result');
const correctAnswers = ['D','B','C','B','D'] ;

form.addEventListener('submit', (e) =>{
    // Your code
    let score=0;
  e.preventDefault();
  questions.forEach(q => q.classList.remove('correct', 'wrong'));
 const userAnswers=[
form.q1.value,
form.q2.value,
form.q3.value,
form.q4.value,
form.q5.value,
];
console.log(userAnswers);
 userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
    score++;
        questions[index].classList.add('correct');
    }
    else{
    
        questions[index].classList.add('wrong');
    }
});
    result.classList.remove('hide');
    scrollTo(0,0);
result.textContent = `Your score is ${score} points`;
});