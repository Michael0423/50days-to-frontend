
// default render
var currentStep = 1;
var step = document.getElementById('step').value;
createProgressStep(step);

function setStep() {
    step = document.getElementById('step').value;
    createProgressStep(step);
}

function resetProgress() {
    const steps = document.getElementsByClassName('step');
    Array.from(steps).forEach(e => {
        e.remove();
    });
    const progressBar = document.getElementById('progress_bar');
    progressBar.style.width = 0;

    currentStep = 1;
}

function createProgressStep(newStep) {
    resetProgress();
    step = newStep;

    const progressDiv = document.getElementById('progress_step');
    for(let i=0; i<step; i++){
        const stepDiv = document.createElement('div');
        stepDiv.classList.add('step');
        stepDiv.innerHTML = i+1;
        progressDiv.appendChild(stepDiv);
    }
    step1Div = document.getElementsByClassName('step')[0];
    step1Div.classList.add("active");
}

function goPrev() {
    if(currentStep === 1) return;

    const currentStepDiv = document.getElementsByClassName('step')[currentStep-1];
    currentStepDiv.classList.remove("active");

    currentStep--;

    const progressBar = document.getElementById('progress_bar');
    progressBar.style.width = `calc(${currentStep/step*100}% - var(--stepMargin) - var(--stepMargin))`;
}
function goNext() {
    if(currentStep == step) return;

    currentStep++;
    const currentStepDiv = document.getElementsByClassName('step')[currentStep-1];
    currentStepDiv.classList.add("active");

    const progressBar = document.getElementById('progress_bar');
    progressBar.style.width = `calc(${currentStep/step*100}% - var(--stepMargin) - var(--stepMargin)`;
}