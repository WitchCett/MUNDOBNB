let currentStep = 1;
const totalSteps = 4;

const steps = {
    1: { title: "Introducción", label: "Paso 1 de 4", progress: 0 },
    2: { title: "Información Básica", label: "Paso 2 de 4", progress: 25 },
    3: { title: "Detalles del Negocio", label: "Paso 3 de 4", progress: 50 },
    4: { title: "Compromiso y Desafíos", label: "Paso 4 de 4", progress: 75 }
};

function showStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');

    const progressContainer = document.getElementById('progress-container');
    if (step >= 2 && step <= 4) {
        progressContainer.style.display = 'block';
        document.getElementById('step-label').innerText = steps[step].label;
        document.getElementById('step-title').innerText = steps[step].title;
        document.getElementById('progress-bar').style.width = `${steps[step].progress}%`;
        document.getElementById('progress-percent').innerText = `${steps[step].progress}% completado`;
    } else {
        progressContainer.style.display = 'none';
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function finishApplication() {
    const properties = parseInt(document.getElementById('properties').value) || 0;
    const revenue = parseInt(document.getElementById('revenue').value) || 0;

    // Qualification Logic
    const isQualified = properties >= 3 || revenue >= 2000;

    if (isQualified) {
        showStep('5a');
    } else {
        showStep('5b');
    }
}

// UI Helpers for Radio Cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.radio-card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('input').name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
                input.parentElement.classList.remove('selected');
                input.parentElement.querySelector('.material-symbols-outlined').style.color = '#cbd5e1';
                input.parentElement.querySelector('.material-symbols-outlined').innerText = 'circle';
            });

            card.classList.add('selected');
            card.querySelector('input').checked = true;
            const icon = card.querySelector('.material-symbols-outlined');
            icon.innerText = 'check_circle';

            if (name === 'commitment' && card.querySelector('input').value === 'yes') {
                icon.style.color = 'var(--emerald)';
            } else {
                icon.style.color = 'var(--primary)';
            }
        });
    });

    // Time slot selection
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
        });
    });
});
