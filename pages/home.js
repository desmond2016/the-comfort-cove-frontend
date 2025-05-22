// Home page component
import { renderChatbot } from '../components/chatbot.js';
import { renderNavigation } from '../components/navigation.js';

export function renderHomePage(container, navigateCallback) {
  // Add navigation
  renderNavigation(container, 'home', navigateCallback);
  
  // Create page content
  const homeContent = document.createElement('div');
  
  // Hero section
  const heroSection = document.createElement('section');
  heroSection.className = 'mb-12';
  heroSection.innerHTML = `
    <div class="bg-gradient-to-r from-primary to-accent text-white rounded-2xl overflow-hidden shadow-lg">
      <div class="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">探索心灵成长之旅</h1>
          <p class="text-xl mb-6 opacity-90">欢迎来到青少年心理成长互动平台，这里有科学、有趣的心理知识和工具，帮助你应对成长中的各种挑战。</p>
          <div class="flex space-x-4">
            <button class="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">开始探索</button>
            <button class="bg-white bg-opacity-20 text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-30 transition">了解更多</button>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <svg class="w-full max-w-md" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="250" cy="250" rx="200" ry="120" fill="rgba(255,255,255,0.1)" />
            <circle cx="250" cy="180" r="70" fill="white" />
            <circle cx="230" cy="160" r="10" fill="#334155" />
            <circle cx="270" cy="160" r="10" fill="#334155" />
            <path d="M220 200 Q250 230, 280 200" stroke="#334155" stroke-width="5" fill="none" />
            <path d="M170 100 Q150 150, 180 160" stroke="white" stroke-width="8" fill="none" />
            <path d="M330 100 Q350 150, 320 160" stroke="white" stroke-width="8" fill="none" />
            <circle cx="150" cy="250" r="40" fill="rgba(255,255,255,0.7)" />
            <circle cx="350" cy="250" r="40" fill="rgba(255,255,255,0.7)" />
            <circle cx="250" cy="320" r="40" fill="rgba(255,255,255,0.7)" />
            <text x="150" y="255" text-anchor="middle" font-size="12" fill="#334155">情绪</text>
            <text x="350" y="255" text-anchor="middle" font-size="12" fill="#334155">关系</text>
            <text x="250" y="325" text-anchor="middle" font-size="12" fill="#334155">自我</text>
          </svg>
        </div>
      </div>
    </div>
  `;
  
  // Categories section
  const categoriesSection = document.createElement('section');
  categoriesSection.className = 'mb-12';
  categoriesSection.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">探索主题</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="category-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer" data-category="emotion-management">
          <div class="h-3 bg-primary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-face-smile text-2xl text-primary"></i>
              </div>
              <h3 class="text-xl font-bold">情绪管理</h3>
            </div>
            <p class="text-gray-600 mb-4">探索情绪的多样性，学习接纳、表达和调节情绪的健康方法。</p>
            <div class="flex justify-between items-center">
              <div class="text-xs text-gray-500">
                <i class="fas fa-lightbulb mr-1"></i> 热门话题
              </div>
              <div class="text-primary">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div class="category-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer" data-category="interpersonal-relationships">
          <div class="h-3 bg-warm"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-warm bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-users text-2xl text-warm"></i>
              </div>
              <h3 class="text-xl font-bold">人际关系</h3>
            </div>
            <p class="text-gray-600 mb-4">学习有效沟通技巧，处理冲突，培养同理心，构建健康关系。</p>
            <div class="flex justify-between items-center">
              <div class="text-xs text-gray-500">
                <i class="fas fa-comments mr-1"></i> 互动练习
              </div>
              <div class="text-warm">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div class="category-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer" data-category="academic-pressure">
          <div class="h-3 bg-accent"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-book text-2xl text-accent"></i>
              </div>
              <h3 class="text-xl font-bold">学业压力</h3>
            </div>
            <p class="text-gray-600 mb-4">识别压力源，理解压力影响，掌握时间管理与应对策略。</p>
            <div class="flex justify-between items-center">
              <div class="text-xs text-gray-500">
                <i class="fas fa-check-circle mr-1"></i> 实用技巧
              </div>
              <div class="text-accent">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div class="category-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer" data-category="self-awareness">
          <div class="h-3 bg-secondary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-lightbulb text-2xl text-secondary"></i>
              </div>
              <h3 class="text-xl font-bold">自我认知</h3>
            </div>
            <p class="text-gray-600 mb-4">探索自身兴趣与价值观，培养自尊与自信，建立积极自我认同。</p>
            <div class="flex justify-between items-center">
              <div class="text-xs text-gray-500">
                <i class="fas fa-star mr-1"></i> 推荐测试
              </div>
              <div class="text-secondary">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div class="category-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer" data-category="puberty-changes">
          <div class="h-3 bg-purple-500"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-purple-500 bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-chart-line text-2xl text-purple-500"></i>
              </div>
              <h3 class="text-xl font-bold">青春期变化</h3>
            </div>
            <p class="text-gray-600 mb-4">了解身体变化与心理发展，学习适应和接纳自然的成长过程。</p>
            <div class="flex justify-between items-center">
              <div class="text-xs text-gray-500">
                <i class="fas fa-question-circle mr-1"></i> 常见问题
              </div>
              <div class="text-purple-500">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div class="category-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer" data-category="claude-chat">
          <div class="h-3 bg-red-500"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-red-500 bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-robot text-2xl text-red-500"></i>
              </div>
              <h3 class="text-xl font-bold">智能对话</h3>
            </div>
            <p class="text-gray-600 mb-4">使用 Claude AI 进行个性化心理问题咨询和解答，随时获得支持。</p>
            <div class="flex justify-between items-center">
              <div class="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">
                <i class="fas fa-fire mr-1"></i> 新功能
              </div>
              <div class="text-red-500">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Features section
  const featuresSection = document.createElement('section');
  featuresSection.className = 'mb-12 bg-gray-50 py-12 rounded-2xl';
  featuresSection.innerHTML = `
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-2 text-center">互动探索</h2>
      <p class="text-gray-600 mb-10 text-center max-w-2xl mx-auto">通过多种互动方式，深入探索心理知识，培养积极心态</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm text-center">
          <div class="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-comments text-2xl text-primary"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">AI 对话</h3>
          <p class="text-gray-600">与 Claude AI 进行自然对话，得到个性化的心理咨询和建议，解答成长中的困惑。</p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-sm text-center">
          <div class="w-16 h-16 bg-warm bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-theater-masks text-2xl text-warm"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">情景模拟</h3>
          <p class="text-gray-600">体验真实生活中的情境挑战，练习不同的应对策略，提前准备面对生活中的各类情况。</p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-sm text-center">
          <div class="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-clipboard-check text-2xl text-accent"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">小测验</h3>
          <p class="text-gray-600">通过趣味测试了解自己的性格特点、情绪状态和心理特征，获得个性化的发展建议。</p>
        </div>
      </div>
    </div>
  `;
  
  // AI Assistant section
  const aiAssistantSection = document.createElement('section');
  aiAssistantSection.className = 'mb-12';
  
  // Add elements to container
  homeContent.appendChild(heroSection);
  homeContent.appendChild(categoriesSection);
  homeContent.appendChild(featuresSection);
  
  // Create a two-column layout for chatbot and introduction
  const chatSection = document.createElement('div');
  chatSection.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 mb-12';
  
  // Chatbot component
  const chatbotColumn = document.createElement('div');
  renderChatbot(chatbotColumn);
  
  // Introduction text
  const introColumn = document.createElement('div');
  introColumn.className = 'flex flex-col justify-center';
  introColumn.innerHTML = `
    <h2 class="text-3xl font-bold mb-4">智能助手</h2>
    <p class="text-gray-700 mb-4">
      我们的 AI 心理助手基于 Claude API，可以帮助你解答心理成长中遇到的各种疑问。它提供温暖、科学的心理支持和建议，随时随地为你服务。
    </p>
    <p class="text-gray-700 mb-6">
      不管是情绪困扰、人际关系问题，还是学业压力、自我认知，都可以向 AI 助手提问。提问前需要先设置你的 Claude API 密钥。
    </p>
    <div class="space-y-3">
      <div class="flex items-start">
        <i class="fas fa-check-circle text-accent mt-1 mr-3"></i>
        <p class="text-gray-700">科学、权威的心理知识和建议</p>
      </div>
      <div class="flex items-start">
        <i class="fas fa-check-circle text-accent mt-1 mr-3"></i>
        <p class="text-gray-700">通俗易懂、亲切温暖的回应风格</p>
      </div>
      <div class="flex items-start">
        <i class="fas fa-check-circle text-accent mt-1 mr-3"></i>
        <p class="text-gray-700">个性化的成长指导和技能建议</p>
      </div>
    </div>
  `;
  
  chatSection.appendChild(introColumn);
  chatSection.appendChild(chatbotColumn);
  homeContent.appendChild(chatSection);
  
  container.appendChild(homeContent);
  
  // Add event listeners
  const categoryCards = categoriesSection.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      if (category) {
        navigateCallback(category);
      }
    });
  });
}
