const generateBtn = document.getElementById('generate_btn');
generateBtn.click();

function generateQuestion() {
    const questionList = document.getElementById('q_list');
    questionList.innerHTML = '';
    const num = document.getElementById('num_q').value;

    for (let i = 0; i < num; i++) {
        let item = generateQuestionItem();

        const title = item.querySelector('.title');
        title.innerHTML = `Question ${i+1}`;
        const answer = item.querySelector('.answer');
        answer.innerHTML = `Answer ${i+1}`;

        questionList.appendChild(item);
    }
}

function generateQuestionItem() {
    const item = document.createElement('div');
    item.classList.add('question-box');

    const info = document.createElement('div');
    info.classList.add('info')
    const title = document.createElement('div');
    title.classList.add('title');
    const answer = document.createElement('div');
    answer.classList.add('answer');
    info.append(title, answer);

    const btn = document.createElement('button');
    btn.classList.add('btn')
    btn.addEventListener('click', function (evt) {
        btn.parentNode.classList.toggle('active');
    });
    const b1 = document.createElement('i');
    b1.classList.add('fa', 'fa-times','fa-2x');
    const b2 = document.createElement('i');
    b2.classList.add('fa', 'fa-chevron-down', 'fa-2x');
    btn.append(b1, b2);

    const comment = document.createElement('i');
    comment.classList.add('fa-regular', 'fa-comments', 'fa-6x');

    item.append(info, btn, comment);

    return item;
}