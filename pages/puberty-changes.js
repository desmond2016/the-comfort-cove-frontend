// Puberty Changes page component
import { renderNavigation } from '../components/navigation.js';
import { renderChatbot } from '../components/chatbot.js';

export function renderPubertyChanges(container, navigateCallback) {
  // Add navigation
  renderNavigation(container, 'puberty-changes', navigateCallback);
  
  // Main content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'container mx-auto px-4';
  
  // Header section
  const header = document.createElement('header');
  header.className = 'mb-10';
  header.innerHTML = `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">青春期变化</h1>
    <p class="text-xl text-gray-600 max-w-4xl">
      了解青春期身体和心理的自然变化过程，学习健康适应和接纳这一重要发展阶段的各种转变。
    </p>
  `;
  
  // Topics grid section
  const topicsSection = document.createElement('section');
  topicsSection.className = 'mb-12 grid grid-cols-1 md:grid-cols-3 gap-6';
  
  // Topic cards
  topicsSection.innerHTML = `
    <div id="topic-physical" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-600">
      <h2 class="text-xl font-bold mb-4">生理变化</h2>
      <p class="text-gray-600 mb-4">
        科普身体发育特征（第二性征、身体形象变化）、大脑发育特点。了解荷尔蒙变化及其对身体和情绪的影响。
      </p>
      <div class="flex space-x-4">
        <button class="text-purple-600 hover:text-purple-500">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-psychological" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-pink-500">
      <h2 class="text-xl font-bold mb-4">心理变化</h2>
      <p class="text-gray-600 mb-4">
        理解情绪波动、追求独立、风险探索行为的原因。探索青春期认知发展和自我意识增强的过程。
      </p>
      <div class="flex space-x-4">
        <button class="text-purple-600 hover:text-purple-500">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-adaptation" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-indigo-500">
      <h2 class="text-xl font-bold mb-4">适应与支持</h2>
      <p class="text-gray-600 mb-4">
        如何接纳变化，建立积极的身体形象。了解可获得的心理健康支持资源，何时需要寻求专业帮助。
      </p>
      <div class="flex space-x-4">
        <button class="text-purple-600 hover:text-purple-500">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
  `;
  
  // Development timeline section
  const timelineSection = document.createElement('section');
  timelineSection.className = 'mb-12 bg-white rounded-lg shadow-md p-6 border border-gray-200';
  timelineSection.innerHTML = `
    <h2 class="text-2xl font-bold mb-6 text-purple-600">青春期发展时间线</h2>
    <p class="text-gray-700 mb-6">
      青春期通常发生在9-17岁之间，但每个人的发展进程和时间各不相同。下面的时间线仅供参考，个体差异是完全正常的。
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-lg font-bold mb-4 text-pink-500">女生发展时间线</h3>
        <div class="relative border-l-2 border-pink-200 pl-6 pb-2">
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-pink-400"></div>
            <h4 class="font-medium text-dark">8-13岁</h4>
            <p class="text-gray-600">青春期开始，乳房发育初期，身高开始加速增长</p>
          </div>
          
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-pink-400"></div>
            <h4 class="font-medium text-dark">9-14岁</h4>
            <p class="text-gray-600">阴毛和腋毛开始生长，汗腺发育，可能开始有体味</p>
          </div>
          
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-pink-400"></div>
            <h4 class="font-medium text-dark">10-16岁</h4>
            <p class="text-gray-600">月经初潮，盆骨变宽，体内脂肪分布变化</p>
          </div>
          
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-pink-400"></div>
            <h4 class="font-medium text-dark">11-16岁</h4>
            <p class="text-gray-600">身高快速增长高峰期，出油和痤疮可能出现</p>
          </div>
          
          <div class="relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-pink-400"></div>
            <h4 class="font-medium text-dark">14-18岁</h4>
            <p class="text-gray-600">生理发育逐渐完成，情绪和心理发展继续</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-bold mb-4 text-blue-500">男生发展时间线</h3>
        <div class="relative border-l-2 border-blue-200 pl-6 pb-2">
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-blue-400"></div>
            <h4 class="font-medium text-dark">9-14岁</h4>
            <p class="text-gray-600">睾丸和阴囊开始增大，阴毛开始生长</p>
          </div>
          
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-blue-400"></div>
            <h4 class="font-medium text-dark">10-15岁</h4>
            <p class="text-gray-600">阴茎开始增长，腋毛生长，汗腺发育，声音开始变化</p>
          </div>
          
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-blue-400"></div>
            <h4 class="font-medium text-dark">11-16岁</h4>
            <p class="text-gray-600">身高快速增长，面部和身体其他部位开始长毛</p>
          </div>
          
          <div class="mb-6 relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-blue-400"></div>
            <h4 class="font-medium text-dark">12-17岁</h4>
            <p class="text-gray-600">声音变低沉，出油和痤疮可能出现，肌肉开始发育</p>
          </div>
          
          <div class="relative">
            <div class="absolute -left-7 w-4 h-4 rounded-full bg-blue-400"></div>
            <h4 class="font-medium text-dark">14-18岁</h4>
            <p class="text-gray-600">生理发育逐渐完成，情绪和心理发展继续</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-8 p-4 bg-purple-50 rounded-lg">
      <p class="text-gray-700">
        <i class="fas fa-info-circle text-purple-600 mr-2"></i>
        重要提示：每个人的发展进程和时间都有所不同，提前或延后都是正常的。如果对自己的发育有疑虑，可以咨询医生或学校医务室。
      </p>
    </div>
  `;
  
  // Brain development section
  const brainSection = document.createElement('section');
  brainSection.className = 'mb-12 bg-white rounded-lg shadow-md p-6 border border-gray-200';
  brainSection.innerHTML = `
    <h2 class="text-2xl font-bold mb-6 text-purple-600">青少年大脑发展</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p class="text-gray-700 mb-4">
          青少年时期是大脑发展的关键阶段，部分区域（特别是前额叶）仍在继续成熟，这解释了许多青少年的行为和思维特点。
        </p>
        
        <div class="space-y-4 mt-6">
          <div class="flex items-start">
            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-brain text-purple-600"></i>
            </div>
            <div>
              <h4 class="font-medium text-dark">前额叶发展</h4>
              <p class="text-sm text-gray-600">负责决策、计划、冲动控制和风险评估的脑区仍处于发展阶段，至20多岁才完全成熟。</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-bolt text-purple-600"></i>
            </div>
            <div>
              <h4 class="font-medium text-dark">多巴胺系统</h4>
              <p class="text-sm text-gray-600">控制奖励感受的系统特别活跃，但自我调节能力尚未完全发展，这可能导致追求刺激和风险行为。</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-link text-purple-600"></i>
            </div>
            <div>
              <h4 class="font-medium text-dark">神经连接重组</h4>
              <p class="text-sm text-gray-600">大脑进行"修剪"和优化，去除不常用的连接，强化常用连接。这使得青少年时期成为学习和培养习惯的黄金时期。</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-moon text-purple-600"></i>
            </div>
            <div>
              <h4 class="font-medium text-dark">睡眠模式变化</h4>
              <p class="text-sm text-gray-600">生物钟发生变化，青少年倾向于晚睡晚起。同时，大脑发育需要充足的睡眠，建议每晚8-10小时。</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <svg width="100%" height="300" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
          <!-- Simplified brain illustration -->
          <ellipse cx="250" cy="200" rx="180" ry="140" fill="#f3e8ff" stroke="#9333ea" stroke-width="2" />
          <path d="M120 160 C 140 100, 360 100, 380 160" stroke="#9333ea" stroke-width="2" fill="none" />
          <path d="M120 240 C 140 300, 360 300, 380 240" stroke="#9333ea" stroke-width="2" fill="none" />
          
          <!-- Frontal lobe -->
          <path d="M130 160 C 150 120, 350 120, 370 160" stroke="#db2777" stroke-width="3" fill="none" />
          <text x="250" y="140" text-anchor="middle" font-size="14" fill="#db2777" font-weight="bold">前额叶</text>
          
          <!-- Limbic system -->
          <circle cx="250" cy="200" r="50" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" />
          <text x="250" y="200" text-anchor="middle" font-size="14" fill="#ca8a04" font-weight="bold">边缘系统</text>
          <text x="250" y="220" text-anchor="middle" font-size="12" fill="#ca8a04">(情绪中心)</text>
          
          <!-- Connections -->
          <path d="M210 180 C 200 160, 180 160, 170 180" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3" />
          <path d="M290 180 C 300 160, 320 160, 330 180" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3" />
          <path d="M230 240 C 220 260, 200 260, 190 240" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3" />
          <path d="M270 240 C 280 260, 300 260, 310 240" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3" />
          
          <!-- Labels -->
          <text x="250" y="330" text-anchor="middle" font-size="16" fill="#64748b">青少年大脑发育示意图</text>
          <text x="250" y="350" text-anchor="middle" font-size="12" fill="#64748b">(简化示意，非精确解剖图)</text>
        </svg>
      </div>
    </div>
  `;
  
  // Two-column layout for FAQ and chatbot
  const twoColumnSection = document.createElement('div');
  twoColumnSection.className = 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12';
  
  // FAQ column
  const faqColumn = document.createElement('div');
  faqColumn.className = 'bg-white rounded-lg shadow-md p-6 border border-gray-200';
  faqColumn.innerHTML = `
    <h2 class="text-xl font-bold mb-6 text-purple-600">常见问题解答</h2>
    
    <div class="space-y-4">
      <details class="group">
        <summary class="flex justify-between items-center cursor-pointer list-none p-3 bg-purple-50 hover:bg-purple-100 rounded-lg">
          <span class="font-medium">青春期身体变化是否正常？什么时候需要咨询医生？</span>
          <span class="transition group-open:rotate-180">
            <i class="fas fa-chevron-down text-purple-600"></i>
          </span>
        </summary>
        <div class="p-3 text-gray-700">
          <p>青春期的身体变化因人而异，发展时间和速度有所不同都是正常的。但如果你有以下情况，应考虑咨询医生：</p>
          <ul class="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>女生14岁或男生15岁仍未出现任何青春期发育迹象</li>
            <li>发育过程突然停止</li>
            <li>月经伴随剧烈疼痛或出血过多</li>
            <li>身体发育出现明显偏离正常模式的情况</li>
            <li>青春期情绪变化严重影响日常生活功能</li>
          </ul>
        </div>
      </details>
      
      <details class="group">
        <summary class="flex justify-between items-center cursor-pointer list-none p-3 bg-purple-50 hover:bg-purple-100 rounded-lg">
          <span class="font-medium">如何应对青春期情绪波动？</span>
          <span class="transition group-open:rotate-180">
            <i class="fas fa-chevron-down text-purple-600"></i>
          </span>
        </summary>
        <div class="p-3 text-gray-700">
          <p>青春期情绪波动是由荷尔蒙变化和大脑发育共同导致的自然现象。以下方法有助于应对：</p>
          <ul class="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>保持充足的睡眠，规律的作息</li>
            <li>定期进行体育锻炼，有助于释放压力</li>
            <li>学习并实践情绪调节技巧，如深呼吸、正念</li>
            <li>保持日记，记录和理解自己的情绪变化</li>
            <li>与值得信任的成年人或朋友分享感受</li>
            <li>如果情绪问题持续影响生活，考虑寻求心理咨询帮助</li>
          </ul>
        </div>
      </details>
      
      <details class="group">
        <summary class="flex justify-between items-center cursor-pointer list-none p-3 bg-purple-50 hover:bg-purple-100 rounded-lg">
          <span class="font-medium">青春期的营养和身体护理有什么特别注意事项？</span>
          <span class="transition group-open:rotate-180">
            <i class="fas fa-chevron-down text-purple-600"></i>
          </span>
        </summary>
        <div class="p-3 text-gray-700">
          <p>青春期身体快速发展，对营养和护理有特殊需求：</p>
          <ul class="list-disc list-inside mt-2 space-y-1 text-sm">
            <li><strong>营养：</strong>需要充足的蛋白质、钙、铁和其他营养素支持发育。女生尤其需要注意铁的摄入。</li>
            <li><strong>皮肤护理：</strong>荷尔蒙变化导致皮脂分泌增加，需要规律清洁，但避免过度清洁。痤疮是常见现象，保持面部清洁，避免挤压。</li>
            <li><strong>体味：</strong>汗腺发育导致体味变化，需要每日清洁和使用除臭剂。</li>
            <li><strong>牙齿：</strong>继续保持良好的口腔卫生习惯。</li>
            <li><strong>运动：</strong>定期运动有助于健康发育，但注意不要过度训练。</li>
            <li>尊重自己的身体，避免不健康的减肥或增肌方法。</li>
          </ul>
        </div>
      </details>
      
      <details class="group">
        <summary class="flex justify-between items-center cursor-pointer list-none p-3 bg-purple-50 hover:bg-purple-100 rounded-lg">
          <span class="font-medium">如何与父母谈论青春期变化和问题？</span>
          <span class="transition group-open:rotate-180">
            <i class="fas fa-chevron-down text-purple-600"></i>
          </span>
        </summary>
        <div class="p-3 text-gray-700">
          <p>与父母讨论青春期话题可能感到尴尬，但这些交流非常重要：</p>
          <ul class="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>选择合适的时机，在私人和放松的环境下交谈</li>
            <li>直接表达你的问题或顾虑，使用正确的生理术语</li>
            <li>如果面对面交谈太尴尬，可以先通过短信或便条开始话题</li>
            <li>准备好具体问题，比如"我想了解更多关于..."</li>
            <li>如果与父母交流困难，可以寻找其他值得信任的成年人，如学校医生、心理咨询师或亲近的亲戚</li>
            <li>利用书籍或可靠网站获取信息，但记得验证信息来源的权威性</li>
          </ul>
        </div>
      </details>
    </div>
  `;
  
  // Chatbot column
  const chatbotColumn = document.createElement('div');
  renderChatbot(chatbotColumn, "青春期变化助手");
  
  // Add columns to two-column section
  twoColumnSection.appendChild(faqColumn);
  twoColumnSection.appendChild(chatbotColumn);
  
  // Add all sections to content container
  contentContainer.appendChild(header);
  contentContainer.appendChild(topicsSection);
  contentContainer.appendChild(timelineSection);
  contentContainer.appendChild(brainSection);
  contentContainer.appendChild(twoColumnSection);
  
  // Add content to main container
  container.appendChild(contentContainer);
}
