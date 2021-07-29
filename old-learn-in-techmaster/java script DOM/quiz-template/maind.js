

let questions = [
    {
        title : 'hết cái đố rồi viết chơi cho có  1 + 1 = ?',
        answer : '2', 
        options : ['1 ô cửa sổ', '2 ', 'không biết ', '4 mới đúng '],
    },
    {
        title : 'team Refundgaming có bao nhiêu thành viên',
        answer : 'không biết', 
        options : ['11', '15', '6', 'không biết'],
    },
    {
        title : ' con gì chín đầu chín tay chín chân ',
        answer : 'con tôm luộc', 
        options : ['con tôm', 'con cua', 'con quái vật', 'con tôm luộc'],
    },

]

let currentQuestion = 0;
let answers = [];
let score = 0;

let quizQuestion = document.querySelector('.quiz-question p')
let quizAnswer = document.querySelector('.quiz-answer ')
let progressEl = document.querySelector('.quiz-progress-bar')
let nextQuetstionEl = document.querySelector('.next-btn')
let prevEl = document.querySelector('.prev-btn')
let finishBtn = document.querySelector('.finish-btn') 




function showQuestion(index) {
    let question = questions[index]
    
    quizQuestion.innerText = `câu ${index + 1} : ${question.title}`

    
    const a = quizAnswer.innerHTML = '';

    for(i = 0; i < question.options.length; i++) {
        let t = question.options[i]
        quizAnswer.innerHTML += `
        <div class="quiz-item">
            <input type="radio" 
            id="answer-${i + 1}" 
            name="question-${index + 1}"
            ${ answers[index] == t ? 'checked' : ''}
            />
            <label for="answer-${i + 1}">
                <span></span>
                <p>${t}</p>
            </label>
        </div>`

        
    };

    // cập nhật progress bar
    updateProgressBar()

    // Câu hỏi cuối cùng thì disable nút "Next Question"
    if(!answers[index] || index == questions.length - 1) {
        nextQuetstionEl.classList.add('disable')
        finishBtn.classList.add('disable')
    }
    else{
        nextQuetstionEl.classList.remove('disable')
        finishBtn.classList.remove('disable')
    }

    // Câu hỏi cuối cùng thì disable nút "Next Question"
    if(index == 0) {
        prevEl.classList.add('disable')
    }
    else {
        prevEl.classList.remove('disable')
    }
    
    


    //show nút submit
    if(index == questions.length - 1) {
        finishBtn.style.display = 'inline-block'
        nextQuetstionEl.style.display = 'none'
    }
    else {
        nextQuetstionEl.style.display = 'inline-block'
        finishBtn.style.display = 'none'
    }

    //
    let optionsEl = document.querySelectorAll('.quiz-item input')
    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].addEventListener("change", function () {
            let value = optionsEl[i].nextElementSibling.querySelector('p').innerText;
            answers[currentQuestion] = value;
            console.log(answers)

            nextQuetstionEl.classList.remove('disable');
            finishBtn.classList.remove('disable');
        });
}   }


function updateProgressBar() {
    let value = ( (currentQuestion + 1) / questions.length * 100)
    progressEl.style.width = `${value}%`
}
nextQuetstionEl.addEventListener('click', function() {
    currentQuestion++
    if(currentQuestion > questions.length -1) {
        currentQuestion = questions.length - 1 
    }
    showQuestion(currentQuestion)
    
})

prevEl.addEventListener('click', function() {
    currentQuestion--
    if(currentQuestion < 0 ) {
        currentQuestion = 0
    }
    showQuestion(currentQuestion)
})

 let quizBottom = document.querySelector('.quiz-bottom')
 let quizResults = document.querySelector('.quiz-results')
 let quizScore = document.querySelector('.quiz-results-score')

 //sự kiện nút submit, kiểm tra và in ra kết quả
finishBtn.addEventListener('click', function() {
    quizBottom.style.display = 'none';
    quizResults.style.display = 'flex'

    //so sánh câu trả lời với đáp án
    for( let i = 0; i < answers.length; i++) {
        if(answers[i] == questions[i].answer) {
            score++
        }
    }

    //in ra màn hình số câu trả lời đúng
    if(score == questions.length) {
        quizScore.innerText = `xin chúc mừng điểm của bạn là ${score}/${questions.length}`;
    }
    else if(score == 0){
        quizScore.innerText = `thật đáng tiếc bạn không trả lời đúng một câu nào cả`
    }
    else{
        quizScore.innerText = `bạn chỉ trả lời được ${score}/${questions.length}` 
    }
})

    //sự kiện nút play agains chơi lại từ đầu
    document.querySelector('.back-btn').addEventListener('click', function() {
        window.location.reload()
    })

window.onload = showQuestion(currentQuestion)
