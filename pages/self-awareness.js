// Self Awareness page component
import { renderNavigation } from '../components/navigation.js';
import { renderChatbot } from '../components/chatbot.js';
import { renderQuiz } from '../components/quiz.js';

export function renderSelfAwareness(container, navigateCallback) {
  // Add navigation
  renderNavigation(container, 'self-awareness', navigateCallback);
  
  // Main content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'container mx-auto px-4';
  
  // Header section
  const header = document.createElement('header');
  header.className = 'mb-10';
  header.innerHTML = `
    <h1 class="text-4xl font-bold mb-4 text-secondary">自我认知</h1>
    <p class="text-xl text-gray-600 max-w-4xl">
      探索自身兴趣与价值观，培养自尊与自信，建立积极的自我认同，发现内在潜能并为未来发展奠定基础。
    </p>
  `;
  
  // Topics grid section
  const topicsSection = document.createElement('section');
  topicsSection.className = 'mb-12 grid grid-cols-1 md:grid-cols-2 gap-6';
  
  // Topic cards
  topicsSection.innerHTML = `
    <div id="topic-knowing-self" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-secondary">
      <h2 class="text-xl font-bold mb-4">认识自我</h2>
      <p class="text-gray-600 mb-4">
        了解自身兴趣、优势、劣势、价值观。探索个人特质和技能，认识自己真正喜欢和在意的事物。
      </p>
      <div class="flex space-x-4">
        <button class="text-secondary hover:text-secondary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-self-esteem" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-pink-500">
      <h2 class="text-xl font-bold mb-4">自尊与自信</h2>
      <p class="text-gray-600 mb-4">
        培养积极的自我评价，认识自我的内在价值。学习如何看待失败与挫折，不将外在评价等同于自我价值。
      </p>
      <div class="flex space-x-4">
        <button class="text-secondary hover:text-secondary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-identity" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
      <h2 class="text-xl font-bold mb-4">身份探索</h2>
      <p class="text-gray-600 mb-4">
        理解青春期的身份认同任务，探索"我是谁"的问题。尝试不同角色和兴趣，逐步形成稳定的自我概念。
      </p>
      <div class="flex space-x-4">
        <button class="text-secondary hover:text-secondary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-positive" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-orange-500">
      <h2 class="text-xl font-bold mb-4">积极心理品质</h2>
      <p class="text-gray-600 mb-4">
        培养乐观、韧性、自我关怀等积极心理品质。学习面对困难的健康心态，看到挑战中的成长机会。
      </p>
      <div class="flex space-x-4">
        <button class="text-secondary hover:text-secondary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
  `;
  
  // Quiz section
  const quizSection = document.createElement('section');
  quizSection.className = 'mb-12';
  
  // Sample quiz data
  const quizData = {
    title: '自我认知与兴趣测试',
    description: '这个简短测试将帮助你了解自己的内在兴趣倾向和优势领域',
    questions: [
      {
        text: '当你有自由时间时，你最喜欢做什么？',
        options: [
          { text: '阅读或写作', value: 1 },
          { text: '运动或户外活动', value: 2 },
          { text: '艺术创作或音乐', value: 3 },
          { text: '与朋友交流或参加社交活动', value: 4 },
          { text: '解决问题或玩解谜游戏', value: 5 }
        ]
      },
      {
        text: '在团队项目中，你通常会承担什么角色？',
        options: [
          { text: '领导者，组织和分配任务', value: 4 },
          { text: '创意者，提出新想法', value: 3 },
          { text: '协调者，确保团队和谐合作', value: 4 },
          { text: '执行者，认真完成分配的任务', value: 2 },
          { text: '分析者，思考问题和解决方案', value: 5 }
        ]
      },
      {
        text: '面对挑战和困难时，你通常如何反应？',
        options: [
          { text: '立即寻求帮助和建议', value: 4 },
          { text: '仔细分析问题，寻找系统的解决方法', value: 5 },
          { text: '寻找创新的、非常规的解决方案', value: 3 },
          { text: '坚持不懈，通过努力克服困难', value: 2 },
          { text: '反思和写下自己的想法和感受', value: 1 }
        ]
      },
      {
        text: '哪种学习方式最适合你？',
        options: [
          { text: '阅读和笔记', value: 1 },
          { text: '实践和动手操作', value: 2 },
          { text: '视觉图像和图表', value: 3 },
          { text: '讨论和交流', value: 4 },
          { text: '逻辑分析和问题解决', value: 5 }
        ]
      },
      {
        text: '你最欣赏自己的哪个特质？',
        options: [
          { text: '创造力和想象力', value: 3 },
          { text: '毅力和坚韧', value: 2 },
          { text: '同理心和关怀他人', value: 4 },
          { text: '逻辑思维和分析能力', value: 5 },
          { text: '自我反思和理解能力', value: 1 }
        ]
      }
    ],
    results: [
      {
        minScore: 5,
        maxScore: 9,
        title: '语言与内省型',
        description: '你具有出色的语言表达能力和深度的自我反思能力。你可能喜欢阅读、写作，并善于理解自己和他人的情感和想法。',
        suggestions: [
          '探索文学、心理学、哲学或传媒相关领域',
          '培养写作习惯，可以尝试写日记或创作',
          '参加读书会或文学社团',
          '尝试心理咨询或辅导相关的志愿服务'
        ]
      },
      {
        minScore: 10,
        maxScore: 14,
        title: '身体动觉型',
        description: '你具有很强的身体协调能力和行动力。你可能喜欢运动、动手实践，并通过实际体验学习和成长。',
        suggestions: [
          '参加体育运动或户外活动',
          '探索需要动手能力的课程或职业，如工程、医疗、工艺等',
          '在学习时增加动手实践环节',
          '寻找能够结合身体活动和实践技能的机会'
        ]
      },
      {
        minScore: 15,
        maxScore: 19,
        title: '艺术创意型',
        description: '你富有创造力和艺术感知力。你可能喜欢艺术、音乐、设计等创意活动，并有独特的审美和表达方式。',
        suggestions: [
          '探索艺术、音乐、设计、摄影等创意领域',
          '参加艺术课程或工作坊提升技能',
          '寻找展示创意作品的平台和机会',
          '将创意思维应用到其他学科和日常问题解决中'
        ]
      },
      {
        minScore: 20,
        maxScore: 24,
        title: '人际交往型',
        description: '你具有出色的人际交往能力和情感智力。你可能喜欢与人合作、交流，并善于理解和影响他人。',
        suggestions: [
          '探索教育、销售、管理、社会工作等与人相关的领域',
          '参与团队活动和志愿服务',
          '培养领导力和沟通技能',
          '寻找能够帮助和支持他人的机会'
        ]
      },
      {
        minScore: 25,
        maxScore: 30,
        title: '逻辑分析型',
        description: '你具有出色的逻辑思维和分析能力。你可能喜欢解决复杂问题，思考抽象概念，并寻找系统化的解决方案。',
        suggestions: [
          '探索科学、技术、数学、编程等领域',
          '参加解谜游戏或编程竞赛',
          '培养批判性思维和研究技能',
          '寻找需要策略规划和系统思考的挑战'
        ]
      }
    ]
  };
  
  // Render quiz
  renderQuiz(quizSection, quizData);
  
  // Two-column layout for activities and chatbot
  const twoColumnSection = document.createElement('div');
  twoColumnSection.className = 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12';
  
  // Self-reflection column
  const reflectionColumn = document.createElement('div');
  reflectionColumn.className = 'bg-white rounded-lg shadow-md p-6 border border-gray-200';
  reflectionColumn.innerHTML = `
    <h2 class="text-xl font-bold mb-4 text-secondary">自我探索活动</h2>
    <div class="space-y-6">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="font-medium text-dark mb-2">1. 价值观探索</h3>
        <p class="text-gray-700 mb-3">
          了解自己真正看重的价值观有助于做出符合内心的决定，建立真实的自我认同。
        </p>
        <div class="bg-white p-3 rounded border border-gray-200">
          <h4 class="font-medium text-sm text-dark mb-2">反思问题：</h4>
          <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>在你的生活中，哪三件事是最重要的？为什么？</li>
            <li>回想一个让你感到特别有成就感或满足的经历，是什么让它变得特别？</li>
            <li>如果你只能向下一代传递三个价值观，它们会是什么？</li>
            <li>什么事情会让你感到特别愤怒或不舒服？这反映了你的哪些价值观？</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="font-medium text-dark mb-2">2. 优势探索</h3>
        <p class="text-gray-700 mb-3">
          了解自己的优势能帮助你建立自信，找到适合自己的发展方向。
        </p>
        <div class="bg-white p-3 rounded border border-gray-200">
          <h4 class="font-medium text-sm text-dark mb-2">活动指导：</h4>
          <ol class="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>请三位了解你的人（家人、朋友、老师）分别告诉你他们眼中你的三个优点</li>
            <li>记录这些反馈，寻找共同点</li>
            <li>反思这些优势在你生活中的表现和重要性</li>
            <li>思考如何更好地发挥这些优势</li>
          </ol>
        </div>
      </div>
      
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="font-medium text-dark mb-2">3. 未来自我书信</h3>
        <p class="text-gray-700 mb-3">
          写一封给5年后自己的信，有助于明确目标和期望，增强自我认同感。
        </p>
        <div class="bg-white p-3 rounded border border-gray-200">
          <h4 class="font-medium text-sm text-dark mb-2">内容可包括：</h4>
          <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>你希望未来的自己在学业/事业上取得什么成就？</li>
            <li>你希望拥有怎样的人际关系？</li>
            <li>你想培养哪些品质或克服哪些缺点？</li>
            <li>你的梦想是什么？为实现梦想，现在的你需要做什么？</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  
  // Chatbot column
  const chatbotColumn = document.createElement('div');
  renderChatbot(chatbotColumn, "自我认知助手");
  
  // Add columns to two-column section
  twoColumnSection.appendChild(reflectionColumn);
  twoColumnSection.appendChild(chatbotColumn);
  
  // Inspirational quotes section
  const quotesSection = document.createElement('section');
  quotesSection.className = 'mb-12 bg-gray-50 p-8 rounded-xl';
  quotesSection.innerHTML = `
    <h2 class="text-2xl font-bold mb-6">启发思考的名言</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-secondary">
        <p class="italic text-gray-700 mb-2">"了解你自己是所有智慧的开始。"</p>
        <p class="text-right text-gray-500">—— 苏格拉底</p>
      </div>
      
      <div class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-pink-500">
        <p class="italic text-gray-700 mb-2">"接受自己，爱自己，这是找到内心平静与幸福的关键。"</p>
        <p class="text-right text-gray-500">—— 路易丝·海</p>
      </div>
      
      <div class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
        <p class="italic text-gray-700 mb-2">"生活中最重要的投资就是投资自己。"</p>
        <p class="text-right text-gray-500">—— 本杰明·富兰克林</p>
      </div>
      
      <div class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-orange-500">
        <p class="italic text-gray-700 mb-2">"真正的发现之旅不在于寻找新大陆，而在于以新的眼光看待世界。"</p>
        <p class="text-right text-gray-500">—— 马塞尔·普鲁斯特</p>
      </div>
    </div>
  `;
  
  // Add all sections to content container
  contentContainer.appendChild(header);
  contentContainer.appendChild(topicsSection);
  contentContainer.appendChild(quizSection);
  contentContainer.appendChild(twoColumnSection);
  contentContainer.appendChild(quotesSection);
  
  // Add content to main container
  container.appendChild(contentContainer);
}
