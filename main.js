// Main JavaScript entry point
import { renderHomePage } from './pages/home.js';
import { renderEmotionManagement } from './pages/emotion-management.js';
import { renderInterpersonalRelationships } from './pages/interpersonal-relationships.js';
import { renderAcademicPressure } from './pages/academic-pressure.js';
import { renderSelfAwareness } from './pages/self-awareness.js';
import { renderPubertyChanges } from './pages/puberty-changes.js';

// Application state
const appState = {
  currentPage: 'home',
  user: null
  // claudeApiKey 相关的状态已移除
};

// Initialize the application
function initializeApp() {
  // Set up navigation event listeners
  document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    navigateToPage('home');
  });

  document.getElementById('login-button').addEventListener('click', () => {
    showLoginModal();
  });

  // Set up category navigation from homepage
  document.addEventListener('click', (e) => {
    if (e.target.closest('.category-card')) {
      const category = e.target.closest('.category-card').dataset.category;
      if (category) {
        navigateToPage(category);
      }
    }
  });

  // Initialize the page based on the current state
  renderCurrentPage();
}

// Navigate to a specific page
function navigateToPage(pageName) {
  appState.currentPage = pageName;
  renderCurrentPage();

  // Update browser history
  const url = new URL(window.location);
  url.searchParams.set('page', pageName);
  window.history.pushState({}, '', url);
}

// Render the current page based on app state
function renderCurrentPage() {
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = ''; // Clear current content

  // Add a fade-in animation class
  contentContainer.classList.add('fade-in');

  // Render appropriate page
  switch(appState.currentPage) {
    case 'home':
      renderHomePage(contentContainer, navigateToPage);
      break;
    case 'emotion-management':
      renderEmotionManagement(contentContainer, navigateToPage);
      break;
    case 'interpersonal-relationships':
      renderInterpersonalRelationships(contentContainer, navigateToPage);
      break;
    case 'academic-pressure':
      renderAcademicPressure(contentContainer, navigateToPage);
      break;
    case 'self-awareness':
      renderSelfAwareness(contentContainer, navigateToPage);
      break;
    case 'puberty-changes':
      renderPubertyChanges(contentContainer, navigateToPage);
      break;
    default:
      renderHomePage(contentContainer, navigateToPage);
  }

  // Remove animation class after animation completes
  setTimeout(() => {
    contentContainer.classList.remove('fade-in');
  }, 500);
}

// Show login/signup modal
function showLoginModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-dark">登录/注册</h2>
        <button id="close-modal" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-2">用户名/邮箱</label>
          <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div>
          <label class="block text-gray-700 mb-2">密码</label>
          <input type="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        </div>

      <div class="mt-6 flex flex-col space-y-3">
        <button class="bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">登录</button>
        <button class="border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition">注册新账号</button>
      </div>

      <div class="mt-4 text-center">
        <a href="#" class="text-sm text-primary hover:underline">忘记密码?</a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Handle close modal
  document.getElementById('close-modal').addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // API 密钥相关的输入处理逻辑已移除

  // Close when clicking outside the modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page') || 'home';
  appState.currentPage = page;
  renderCurrentPage();
});
