const quiz = [ 
    {
        question: 'paymentの意味は次のうちどれ？',
        answers: [
            '痛み',
            '領収書',
            '支払い',
            '苦痛'
        ],
            correct: '支払い'
    }, 

    {
        question: 'likelyの意味は次のうちどれ？',
        answers: [
            '似ている',
            'おそらく',
            '頻繁な',
            'すぐに'
        ],
            correct: 'おそらく'
    }, {
        question: 'correctの意味は次のうちどれ？',
        answers: [
            '収集する',
            '現在の',
            '正確な',
            '確認する'
        ],
            correct: '正確な'
    },{
        question: 'reluctantの意味は次のうちどれ？',
        answers: [
            '気乗りしない',
            '壊滅的な',
            '悪質な',
            '再生'
        ],
            correct: '気乗りしない'
        },
        {
            question: 'shortcomingの意味は次のうちどれ？',
            answers: [
                '欠点',
                'まもなく',
                '耐える',
                '短い'
            ],
                correct: '欠点'
            }

    ];

        const quizLength = quiz.length;
        let quizIndex = 0;
        let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex =0;
    while(buttonIndex < buttonLength){
        // ここに命令いれるよ
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解だよ');
        score++;
    } else {
        window.alert('不正解だよ');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題があればこちらを実行
        setupQuiz();
    } else {
        // 問題数がもうなければこちらを実行
        window.alert('終了です。あなたの正解数は' + score + '/' +　quizLength + 'です。');
        window.location = "index.html";
    }
};


// クリックされたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}




