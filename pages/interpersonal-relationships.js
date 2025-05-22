// Interpersonal Relationships page component
import { renderNavigation } from '../components/navigation.js';
import { renderChatbot } from '../components/chatbot.js';
import { renderScenario } from '../components/scenario.js';

export function renderInterpersonalRelationships(container, navigateCallback) {
  // Add navigation
  renderNavigation(container, 'interpersonal-relationships', navigateCallback);
  
  // Main content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'container mx-auto px-4';
  
  // Header section
  const header = document.createElement('header');
  header.className = 'mb-10';
  header.innerHTML = `
    <h1 class="text-4xl font-bold mb-4 text-warm">人际关系</h1>
    <p class="text-xl text-gray-600 max-w-4xl">
      学习有效沟通技巧，处理冲突，培养同理心，构建健康的人际关系网络，提升社交能力和自信。
    </p>
  `;
  
  // Topics grid section
  const topicsSection = document.createElement('section');
  topicsSection.className = 'mb-12 grid grid-cols-1 md:grid-cols-2 gap-6';
  
  // Topic cards
  topicsSection.innerHTML = `
    <div id="topic-communication" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-warm">
      <h2 class="text-xl font-bold mb-4">有效沟通</h2>
      <p class="text-gray-600 mb-4">
        学习积极倾听、清晰表达、提问技巧，以及非语言沟通（如眼神接触、身体语言）的重要性。掌握"我"陈述句的使用方法。
      </p>
      <div class="flex space-x-4">
        <button class="text-warm hover:text-warm/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-conflict" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-red-500">
      <h2 class="text-xl font-bold mb-4">处理冲突</h2>
      <p class="text-gray-600 mb-4">
        学习"三明治"沟通法、协商和解决冲突的方法。理解冲突的本质和正面功能，以及如何在冲突中保持尊重与理解。
      </p>
      <div class="flex space-x-4">
        <button class="text-warm hover:text-warm/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-empathy" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
      <h2 class="text-xl font-bold mb-4">理解他人</h2>
      <p class="text-gray-600 mb-4">
        培养同理心，学习站在他人角度思考问题。识别他人的情绪和需求，理解个体差异与多元价值观。
      </p>
      <div class="flex space-x-4">
        <button class="text-warm hover:text-warm/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-online" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
      <h2 class="text-xl font-bold mb-4">在线关系</h2>
      <p class="text-gray-600 mb-4">
        学习在线交流的特点与技巧，安全使用社交媒体，处理网络欺凌等问题。理解线上身份与现实自我的关系。
      </p>
      <div class="flex space-x-4">
        <button class="text-warm hover:text-warm/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
  `;
  
  // Scenario section
  const scenarioSection = document.createElement('section');
  scenarioSection.className = 'mb-12';
  
  // Sample scenario data
  const scenarioData = {
    title: '情景模拟: 与好友的误会',
    description: '你最好的朋友最近一直没有回复你的信息，今天在学校你看到TA和其他同学一起玩得很开心。你感到有些被忽视和受伤，怀疑是不是自己做错了什么。',
    options: [
      '生气地质问朋友为什么不回复你的消息，指责TA不把你当朋友',
      '什么都不说，假装没看见，等TA主动联系你',
      '私下找个合适的时机，平静地表达你的感受: "我注意到你最近没回复我的消息，我有点担心是不是我做错了什么"',
      '在社交媒体上发表模糊的负面状态，暗示被朋友背叛的感受'
    ],
    feedbacks: [
      '<p>直接质问虽然能表达你的感受，但容易引发对方的防御反应，可能导致争吵而非解决问题。愤怒的表达往往会掩盖你真正的担忧和受伤感受。</p>',
      '<p>沉默和被动等待可能会让误解持续更长时间，你的朋友可能并未意识到你的感受。这种做法也会让你持续感到不舒服与猜疑。</p>',
      '<p>这是一种非常健康的沟通方式！你选择了私下交流，使用了"我"陈述句表达感受而非指责对方。这种做法既尊重了对方，又清晰地表明了自己的感受和顾虑，为开放的对话创造了空间。记住，很多时候误会源于信息不对称，而非恶意。</p>',
      '<p>这种间接表达不满的方式可能会让情况更加复杂。它不但无法解决问题，还可能引起更多的误解和流言，损害你的人际形象。</p>'
    ]
  };
  
  // Render scenario
  renderScenario(scenarioSection, scenarioData);
  
  // Two-column layout for additional content
  const twoColumnSection = document.createElement('div');
  twoColumnSection.className = 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12';
  
  // Tips column
  const tipsColumn = document.createElement('div');
  tipsColumn.className = 'bg-white rounded-lg shadow-md p-6 border border-gray-200';
  tipsColumn.innerHTML = `
    <h2 class="text-xl font-bold mb-4 text-warm">人际关系小技巧</h2>
    <ul class="space-y-4">
      <li class="flex">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-warm bg-opacity-10 flex items-center justify-center mr-3">
          <span class="text-warm font-bold">1</span>
        </div>
        <div>
          <h3 class="font-medium text-dark mb-1">学会积极倾听</h3>
          <p class="text-gray-600">不要急于回应或打断，真正理解对方所说的内容。可以通过点头、眼神接触表示你在听，并适当复述对方的话来确认理解。</p>
        </div>
      </li>
      
      <li class="flex">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-warm bg-opacity-10 flex items-center justify-center mr-3">
          <span class="text-warm font-bold">2</span>
        </div>
        <div>
          <h3 class="font-medium text-dark mb-1">使用"三明治"沟通法</h3>
          <p class="text-gray-600">先说积极的内容、再表达需要改进的地方、最后以鼓励或积极评价结束。这样能让对方更容易接受建议。</p>
        </div>
      </li>
      
      <li class="flex">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-warm bg-opacity-10 flex items-center justify-center mr-3">
          <span class="text-warm font-bold">3</span>
        </div>
        <div>
          <h3 class="font-medium text-dark mb-1">学会设定界限</h3>
          <p class="text-gray-600">健康的关系需要适当的界限。礼貌而坚定地表达自己的需求和限制，尊重他人的界限，这是相互尊重的基础。</p>
        </div>
      </li>
      
      <li class="flex">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-warm bg-opacity-10 flex items-center justify-center mr-3">
          <span class="text-warm font-bold">4</span>
        </div>
        <div>
          <h3 class="font-medium text-dark mb-1">观察非语言信号</h3>
          <p class="text-gray-600">留意对方的面部表情、肢体语言和语调，这些往往比言语更能传达真实情感。同时也要注意自己的非语言表达。</p>
        </div>
      </li>
      
      <li class="flex">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-warm bg-opacity-10 flex items-center justify-center mr-3">
          <span class="text-warm font-bold">5</span>
        </div>
        <div>
          <h3 class="font-medium text-dark mb-1">保持真诚与一致</h3>
          <p class="text-gray-600">言行一致，做真实的自己。虽然适应不同社交场合是必要的，但伪装终究无法建立真正的连接。</p>
        </div>
      </li>
    </ul>
  `;
  
  // Chatbot column
  const chatbotColumn = document.createElement('div');
  renderChatbot(chatbotColumn, "人际关系助手");
  
  // Add columns to two-column section
  twoColumnSection.appendChild(tipsColumn);
  twoColumnSection.appendChild(chatbotColumn);
  
  // Common questions section
  const questionsSection = document.createElement('section');
  questionsSection.className = 'mb-12 bg-gray-50 p-8 rounded-xl';
  questionsSection.innerHTML = `
    <h2 class="text-2xl font-bold mb-6">常见问题</h2>
    <div class="space-y-4">
      <details class="bg-white p-4 rounded-lg shadow-sm">
        <summary class="font-medium text-dark cursor-pointer">如何与不喜欢的人相处？</summary>
        <div class="mt-3 pl-4 text-gray-700">
          <p>在学校或工作中，我们难免会遇到与自己性格不合的人。这时可以：</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>保持基本的礼貌与尊重，但不必勉强亲密</li>
            <li>寻找共同点，关注对方的优点而非缺点</li>
            <li>设定健康的界限，避免过多的负面影响</li>
            <li>在必须合作的情况下，专注于任务而非个人感受</li>
          </ul>
        </div>
      </details>
      
      <details class="bg-white p-4 rounded-lg shadow-sm">
        <summary class="font-medium text-dark cursor-pointer">如何修复破裂的友谊？</summary>
        <div class="mt-3 pl-4 text-gray-700">
          <p>如果与朋友发生了严重的误会或冲突：</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>给彼此一些冷静的时间和空间</li>
            <li>真诚道歉，承认自己的错误，不推卸责任</li>
            <li>表达你对这段友谊的珍视，但也要尊重对方的决定</li>
            <li>从错误中学习，但不要沉浸在自责中</li>
            <li>理解修复关系需要时间，不要期望立即恢复如初</li>
          </ul>
        </div>
      </details>
      
      <details class="bg-white p-4 rounded-lg shadow-sm">
        <summary class="font-medium text-dark cursor-pointer">如何扩展社交圈子？</summary>
        <div class="mt-3 pl-4 text-gray-700">
          <p>如果想认识更多朋友：</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>参加兴趣小组、俱乐部或志愿活动，遇见志同道合的人</li>
            <li>学习主动打招呼和开启话题的技巧</li>
            <li>关注他人，提出开放性问题，展现真诚的兴趣</li>
            <li>接受并出席社交邀请，哪怕有些紧张</li>
            <li>利用已有的朋友关系，认识朋友的朋友</li>
          </ul>
        </div>
      </details>
      
      <details class="bg-white p-4 rounded-lg shadow-sm">
        <summary class="font-medium text-dark cursor-pointer">如何与父母更好地沟通？</summary>
        <div class="mt-3 pl-4 text-gray-700">
          <p>青少年期与父母的沟通可能面临挑战：</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>选择合适的时机，避开双方疲惫或情绪激动的时刻</li>
            <li>理解代沟的存在，耐心解释你的想法和现代青少年的观念</li>
            <li>寻找共同语言和共同活动，增进相互理解</li>
            <li>承认父母的关心和良好意图，即使不同意他们的做法</li>
            <li>讨论具体问题而非宽泛的抱怨，提出合理的解决方案</li>
          </ul>
        </div>
      </details>
    </div>
  `;
  
  // Add all sections to content container
  contentContainer.appendChild(header);
  contentContainer.appendChild(topicsSection);
  contentContainer.appendChild(scenarioSection);
  contentContainer.appendChild(twoColumnSection);
  contentContainer.appendChild(questionsSection);
  
  // Add content to main container
  container.appendChild(contentContainer);
}
