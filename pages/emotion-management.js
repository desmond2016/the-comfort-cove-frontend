// Emotion Management page component
import { renderNavigation } from '../components/navigation.js';
import { renderChatbot } from '../components/chatbot.js';
import { renderScenario } from '../components/scenario.js';
import { renderQuiz } from '../components/quiz.js';

export function renderEmotionManagement(container, navigateCallback) {
  // Add navigation
  renderNavigation(container, 'emotion-management', navigateCallback);
  
  // Main content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'container mx-auto px-4';
  
  // Header section
  const header = document.createElement('header');
  header.className = 'mb-10';
  header.innerHTML = `
    <h1 class="text-4xl font-bold mb-4 text-primary">情绪管理</h1>
    <p class="text-xl text-gray-600 max-w-4xl">
      了解情绪的多样性，学习接纳、表达和调节情绪的健康方法，提升情绪管理能力，让情绪成为你的朋友而非敌人。
    </p>
  `;
  
  // Topics grid section
  const topicsSection = document.createElement('section');
  topicsSection.className = 'mb-12 grid grid-cols-1 md:grid-cols-2 gap-6';
  
  // Topic cards
  topicsSection.innerHTML = `
    <div id="topic-recognize" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
      <h2 class="text-xl font-bold mb-4">认识情绪</h2>
      <p class="text-gray-600 mb-4">
        情绪的多样性与重要性，包括基本情绪（喜、怒、哀、惧等）及其功能。大脑发育（杏仁核与前额叶）对情绪的影响。
      </p>
      <div class="flex space-x-4">
        <button class="text-primary hover:text-primary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-accept" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-secondary">
      <h2 class="text-xl font-bold mb-4">接纳情绪</h2>
      <p class="text-gray-600 mb-4">
        理解所有情绪都是正常的信号，学会与"情绪客人"共处。避免抑制或过度表达情绪的负面影响。
      </p>
      <div class="flex space-x-4">
        <button class="text-primary hover:text-primary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-express" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-accent">
      <h2 class="text-xl font-bold mb-4">表达情绪</h2>
      <p class="text-gray-600 mb-4">
        学习健康的情绪表达方式，如"表达情绪四步法"。理解不同场合的表达界限，培养恰当的表达技巧。
      </p>
      <div class="flex space-x-4">
        <button class="text-primary hover:text-primary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-regulate" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-warm">
      <h2 class="text-xl font-bold mb-4">调节情绪</h2>
      <p class="text-gray-600 mb-4">
        学习呼吸练习、正念冥想、积极转移注意力等策略。培养情绪调节的长期能力与习惯。
      </p>
      <div class="flex space-x-4">
        <button class="text-primary hover:text-primary/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
  `;
  
  // Two-column layout for interactive elements
  const interactiveSection = document.createElement('div');
  interactiveSection.className = 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12';
  
  // Scenario column
  const scenarioColumn = document.createElement('div');
  
  // Sample scenario data
  const scenarioData = {
    title: '情景模拟: 公共场合的尴尬',
    description: '想象你正在学校食堂吃饭，不小心打翻了饮料，洒在了地上，周围同学都看着你。这时，你感到非常尴尬和焦虑。',
    options: [
      '假装不是自己弄的，快速离开现场',
      '感到羞愧，低头快速收拾，不与任何人眼神接触',
      '深呼吸冷静一下，微笑着说"哎呀，真不好意思"，然后寻找纸巾收拾干净',
      '情绪爆发，抱怨食堂桌子太不稳定，责怪他人'
    ],
    feedbacks: [
      '<p>这种回避行为虽然可能暂时减轻尴尬感，但会留下未解决的内疚感，也错过了练习面对尴尬情况的机会。同时，这可能给他人留下负面印象。</p>',
      '<p>这种反应很自然，但过度的羞愧和回避眼神接触可能会放大尴尬感。适度的羞愧是正常的，但不必过度自责。</p>',
      '<p>这是一种健康的应对方式！通过深呼吸调节情绪，坦然接受发生的事情，并主动采取行动解决问题。轻松的自嘲和微笑还能缓和气氛，减轻尴尬感。记住，每个人都会遇到类似情况，坦然面对反而展示了你的情绪成熟度。</p>',
      '<p>这种将责任归咎于他人或环境的反应可能暂时缓解尴尬，但长期来看会强化消极的应对模式，也可能损害人际关系。</p>'
    ]
  };
  
  // Render scenario
  renderScenario(scenarioColumn, scenarioData);
  
  // Chatbot column
  const chatbotColumn = document.createElement('div');
  renderChatbot(chatbotColumn, "情绪管理助手");
  
  // Add columns to interactive section
  interactiveSection.appendChild(scenarioColumn);
  interactiveSection.appendChild(chatbotColumn);
  
  // Quiz section
  const quizSection = document.createElement('section');
  quizSection.className = 'mb-12';
  
  // Sample quiz data
  const quizData = {
    title: '情绪识别与应对小测试',
    description: '测试你对不同情绪的识别能力和应对策略的理解',
    questions: [
      {
        text: '当你感到愤怒时，以下哪种方式最有助于健康地处理这种情绪？',
        options: [
          { text: '发泄到其他人或物体上', value: 0 },
          { text: '压抑情绪，假装没事', value: 1 },
          { text: '深呼吸，给自己一点时间冷静下来', value: 3 },
          { text: '在日记或笔记中写下自己的感受', value: 2 }
        ]
      },
      {
        text: '以下哪项不是基本情绪？',
        options: [
          { text: '愤怒', value: 0 },
          { text: '悲伤', value: 0 },
          { text: '嫉妒', value: 3 },
          { text: '恐惧', value: 0 }
        ]
      },
      {
        text: '当你感到紧张焦虑时，以下哪种身体反应通常不会出现？',
        options: [
          { text: '心跳加速', value: 0 },
          { text: '呼吸急促', value: 0 },
          { text: '肌肉放松', value: 3 },
          { text: '出汗增加', value: 0 }
        ]
      },
      {
        text: '以下关于情绪的说法，哪一项是正确的？',
        options: [
          { text: '负面情绪总是有害的，应该尽量避免', value: 0 },
          { text: '情绪是我们对事件的主观评价和反应', value: 3 },
          { text: '情绪完全由外部事件决定，我们无法控制', value: 1 },
          { text: '男生表达情绪比女生更容易', value: 0 }
        ]
      },
      {
        text: '以下哪种方法对长期情绪管理最有效？',
        options: [
          { text: '避开所有可能引起负面情绪的情境', value: 0 },
          { text: '培养日常正念冥想的习惯', value: 3 },
          { text: '通过玩游戏或看视频来转移注意力', value: 1 },
          { text: '服用药物来控制情绪波动', value: 0 }
        ]
      }
    ],
    results: [
      {
        minScore: 0,
        maxScore: 5,
        title: '情绪管理初学者',
        description: '你对情绪的理解还处于起步阶段，可能对情绪识别和管理的概念还不太了解。',
        suggestions: [
          '了解基本的情绪知识和理论',
          '开始留意自己的情绪变化和身体反应',
          '尝试简单的情绪记录，每天记录自己的情绪状态'
        ]
      },
      {
        minScore: 6,
        maxScore: 10,
        title: '情绪管理学习者',
        description: '你已经具备一定的情绪识别能力，知道一些基本的情绪管理技巧，但在实际应用上还需要加强。',
        suggestions: [
          '学习更多情绪调节策略，如深呼吸、正念练习',
          '培养表达情绪的健康方式，如与信任的人交流或写日记',
          '练习在情绪高涨时暂停反应，给自己冷静的空间'
        ]
      },
      {
        minScore: 11,
        maxScore: 15,
        title: '情绪管理达人',
        description: '恭喜！你对情绪的理解和管理能力已经相当不错，能够识别多种情绪并运用有效的应对策略。',
        suggestions: [
          '持续练习和完善你的情绪管理技巧',
          '尝试帮助身边的朋友提升情绪管理能力',
          '探索更深入的情绪工作，如情绪日志分析或专注练习'
        ]
      }
    ]
  };
  
  // Render quiz
  renderQuiz(quizSection, quizData);
  
  // Resources section
  const resourcesSection = document.createElement('section');
  resourcesSection.className = 'mb-12 bg-gray-50 p-8 rounded-xl';
  resourcesSection.innerHTML = `
    <h2 class="text-2xl font-bold mb-6">推荐资源</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-bold mb-2 flex items-center">
          <i class="fas fa-book text-primary mr-2"></i> 
          推荐书籍
        </h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>《情绪急救》- 盖伊·温奇</li>
          <li>《情绪的解析》- 保罗·艾克曼</li>
          <li>《正念的奇迹》- 一行禅师</li>
          <li>《青少年情绪向导》- 莉莎·达姆尔</li>
        </ul>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-bold mb-2 flex items-center">
          <i class="fas fa-globe text-primary mr-2"></i> 
          在线资源
        </h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>冥想与放松练习应用: Calm, Headspace</li>
          <li>情绪日记应用: Daylio, MoodKit</li>
          <li>中国心理学会青少年分会网站</li>
          <li>中国科学院心理研究所公众号</li>
        </ul>
      </div>
    </div>
  `;
  
  // Add all sections to content container
  contentContainer.appendChild(header);
  contentContainer.appendChild(topicsSection);
  contentContainer.appendChild(interactiveSection);
  contentContainer.appendChild(quizSection);
  contentContainer.appendChild(resourcesSection);
  
  // Add content to main container
  container.appendChild(contentContainer);
}
