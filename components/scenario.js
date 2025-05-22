// Scenario simulation component
export function renderScenario(container, scenarioData) {
  const { title, description, options, feedbacks } = scenarioData;
  
  const scenarioContainer = document.createElement('div');
  scenarioContainer.className = 'bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8';
  
  scenarioContainer.innerHTML = `
    <div class="bg-warm text-white px-6 py-4">
      <h3 class="text-xl font-bold">${title}</h3>
    </div>
    
    <div class="p-6">
      <div class="scenario-description mb-6">
        <p class="text-gray-700">${description}</p>
      </div>
      
      <div class="scenario-options space-y-3">
        <h4 class="font-medium text-dark mb-3">你会怎么做？</h4>
        <div id="options-container" class="space-y-3">
          ${options.map((option, index) => `
            <div class="scenario-option p-4 border border-gray-200 rounded-lg" data-option-index="${index}">
              <div class="flex items-start">
                <div class="option-letter bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-gray-700 font-medium">
                  ${String.fromCharCode(65 + index)}
                </div>
                <div>
                  <p class="option-text">${option}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div id="feedback-container" class="scenario-feedback mt-6 bg-gray-50 p-4 rounded-lg hidden">
        <h4 class="font-medium text-dark mb-2">反馈：</h4>
        <div id="feedback-content" class="text-gray-700">
        </div>
        <button id="reset-scenario" class="mt-4 bg-warm text-white px-4 py-2 rounded-lg hover:bg-warm/90 transition">
          重新选择
        </button>
      </div>
    </div>
  `;
  
  container.appendChild(scenarioContainer);
  
  // Get references to elements
  const optionsContainer = scenarioContainer.querySelector('#options-container');
  const feedbackContainer = scenarioContainer.querySelector('#feedback-container');
  const feedbackContent = scenarioContainer.querySelector('#feedback-content');
  const resetButton = scenarioContainer.querySelector('#reset-scenario');
  
  // Add click event listeners to options
  const optionElements = scenarioContainer.querySelectorAll('.scenario-option');
  optionElements.forEach(option => {
    option.addEventListener('click', () => {
      const optionIndex = parseInt(option.dataset.optionIndex);
      showFeedback(optionIndex);
      
      // Highlight selected option
      optionElements.forEach(opt => opt.classList.remove('bg-gray-100'));
      option.classList.add('bg-gray-100');
    });
  });
  
  // Reset scenario
  resetButton.addEventListener('click', () => {
    feedbackContainer.classList.add('hidden');
    optionElements.forEach(opt => opt.classList.remove('bg-gray-100'));
  });
  
  // Function to show feedback for selected option
  function showFeedback(optionIndex) {
    feedbackContent.innerHTML = feedbacks[optionIndex];
    feedbackContainer.classList.remove('hidden');
  }
  
  return scenarioContainer;
}
