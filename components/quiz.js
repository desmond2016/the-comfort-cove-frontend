// Quiz component
export function renderQuiz(container, quizData) {
  const { title, description, questions, results } = quizData;
  
  const quizContainer = document.createElement('div');
  quizContainer.className = 'bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8';
  
  quizContainer.innerHTML = `
    <div class="bg-secondary text-dark px-6 py-4">
      <h3 class="text-xl font-bold">${title}</h3>
    </div>
    
    <div class="p-6">
      <div class="quiz-description mb-6">
        <p class="text-gray-700">${description}</p>
      </div>
      
      <div id="questions-container">
        ${questions.map((question, qIndex) => `
          <div class="quiz-question mb-8" data-question-index="${qIndex}">
            <h4 class="font-medium text-dark mb-4">${qIndex + 1}. ${question.text}</h4>
            <div class="options-container space-y-3">
              ${question.options.map((option, oIndex) => `
                <div class="quiz-option p-4 border border-gray-200 rounded-lg flex items-start cursor-pointer" 
                     data-option-index="${oIndex}" data-question-index="${qIndex}">
                  <div class="option-number bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-gray-700 font-medium">
                    ${oIndex + 1}
                  </div>
                  <div class="option-content">
                    <p>${option.text}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="quiz-controls mt-6">
        <button id="submit-quiz" class="bg-secondary text-dark px-6 py-3 rounded-lg hover:bg-secondary/90 transition font-medium">
          提交答案
        </button>
      </div>
      
      <div id="quiz-result" class="mt-8 hidden">
        <div class="bg-gray-50 rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4 text-dark">你的测试结果</h3>
          <div id="result-content"></div>
        </div>
        
        <button id="reset-quiz" class="mt-4 bg-secondary text-dark px-4 py-2 rounded-lg hover:bg-secondary/90 transition">
          重新测试
        </button>
      </div>
    </div>
  `;
  
  container.appendChild(quizContainer);
  
  // Get references to elements
  const questionsContainer = quizContainer.querySelector('#questions-container');
  const submitButton = quizContainer.querySelector('#submit-quiz');
  const quizResult = quizContainer.querySelector('#quiz-result');
  const resultContent = quizContainer.querySelector('#result-content');
  const resetButton = quizContainer.querySelector('#reset-quiz');
  
  // Store user's answers
  const userAnswers = new Array(questions.length).fill(-1);
  
  // Add click event listeners to options
  const optionElements = quizContainer.querySelectorAll('.quiz-option');
  optionElements.forEach(option => {
    option.addEventListener('click', () => {
      const questionIndex = parseInt(option.dataset.questionIndex);
      const optionIndex = parseInt(option.dataset.optionIndex);
      
      // Update user's answer
      userAnswers[questionIndex] = optionIndex;
      
      // Remove selected class from all options in this question
      const questionOptions = quizContainer.querySelectorAll(`.quiz-option[data-question-index="${questionIndex}"]`);
      questionOptions.forEach(opt => opt.classList.remove('selected'));
      
      // Add selected class to clicked option
      option.classList.add('selected');
    });
  });
  
  // Submit quiz
  submitButton.addEventListener('click', () => {
    // Check if all questions are answered
    if (userAnswers.includes(-1)) {
      alert('请回答所有问题后再提交');
      return;
    }
    
    // Calculate score
    let score = 0;
    userAnswers.forEach((answerIndex, questionIndex) => {
      score += questions[questionIndex].options[answerIndex].value;
    });
    
    // Find corresponding result
    const result = findResultByScore(score, results);
    
    // Display result
    resultContent.innerHTML = `
      <div class="text-center mb-4">
        <div class="text-3xl font-bold text-primary mb-2">${result.title}</div>
        <div class="text-gray-500">得分: ${score} / ${questions.length * Math.max(...questions[0].options.map(o => o.value))}</div>
      </div>
      <div class="text-gray-700">
        <p>${result.description}</p>
      </div>
      <div class="mt-4 bg-blue-50 p-4 rounded-lg">
        <h4 class="font-medium text-dark mb-2">建议:</h4>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          ${result.suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
        </ul>
      </div>
    `;
    
    // Hide questions and show result
    questionsContainer.style.display = 'none';
    submitButton.style.display = 'none';
    quizResult.classList.remove('hidden');
  });
  
  // Reset quiz
  resetButton.addEventListener('click', () => {
    // Clear user's answers
    userAnswers.fill(-1);
    
    // Remove selected class from all options
    optionElements.forEach(opt => opt.classList.remove('selected'));
    
    // Show questions and hide result
    questionsContainer.style.display = 'block';
    submitButton.style.display = 'block';
    quizResult.classList.add('hidden');
  });
  
  // Helper function to find result by score
  function findResultByScore(score, results) {
    for (const result of results) {
      if (score >= result.minScore && score <= result.maxScore) {
        return result;
      }
    }
    return results[0]; // Default to first result if no match
  }
  
  return quizContainer;
}
