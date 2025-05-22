// Academic Pressure page component
import { renderNavigation } from '../components/navigation.js';
import { renderChatbot } from '../components/chatbot.js';
import { renderScenario } from '../components/scenario.js';

export function renderAcademicPressure(container, navigateCallback) {
  // Add navigation
  renderNavigation(container, 'academic-pressure', navigateCallback);
  
  // Main content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'container mx-auto px-4';
  
  // Header section
  const header = document.createElement('header');
  header.className = 'mb-10';
  header.innerHTML = `
    <h1 class="text-4xl font-bold mb-4 text-accent">学业压力</h1>
    <p class="text-xl text-gray-600 max-w-4xl">
      识别压力源，理解压力影响，掌握时间管理与健康的应对策略，在学业与心理健康之间找到平衡。
    </p>
  `;
  
  // Topics grid section
  const topicsSection = document.createElement('section');
  topicsSection.className = 'mb-12 grid grid-cols-1 md:grid-cols-2 gap-6';
  
  // Topic cards
  topicsSection.innerHTML = `
    <div id="topic-pressure-sources" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-accent">
      <h2 class="text-xl font-bold mb-4">压力源识别</h2>
      <p class="text-gray-600 mb-4">
        了解内外部压力来源，如内卷竞争、家长期望、升学考试、学习困难等。识别压力在身体和情绪上的早期信号。
      </p>
      <div class="flex space-x-4">
        <button class="text-accent hover:text-accent/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-pressure-cognition" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
      <h2 class="text-xl font-bold mb-4">压力认知</h2>
      <p class="text-gray-600 mb-4">
        理解压力是把双刃剑，适度压力可以促进成长，过度压力则有害。学习积极的认知评价方式，如何将压力视为挑战而非威胁。
      </p>
      <div class="flex space-x-4">
        <button class="text-accent hover:text-accent/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-coping-strategies" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
      <h2 class="text-xl font-bold mb-4">应对策略</h2>
      <p class="text-gray-600 mb-4">
        掌握时间管理、目标设定（SMART原则）、高效学习方法。学习寻求支持（师长、同伴）和劳逸结合（运动、兴趣爱好）的重要性。
      </p>
      <div class="flex space-x-4">
        <button class="text-accent hover:text-accent/80">
          <i class="fas fa-arrow-right"></i> 了解更多
        </button>
      </div>
    </div>
    
    <div id="topic-motivation" class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
      <h2 class="text-xl font-bold mb-4">学习动机</h2>
      <p class="text-gray-600 mb-4">
        培养内在动机和成长型思维，关注学习过程而非仅看重结果。建立健康的学习目标和自我认同，避免将学习成绩等同于自我价值。
      </p>
      <div class="flex space-x-4">
        <button class="text-accent hover:text-accent/80">
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
    title: '情景模拟: 面对重要考试',
    description: '再过两周就是期末考试，你需要复习很多内容，感到非常紧张和压力很大。考试成绩对你的学期评估很重要，你发现自己晚上难以入睡，白天注意力不集中。',
    options: [
      '通宵熬夜复习，放弃所有休闲活动和社交，将所有时间都用于学习',
      '感到过于焦虑，放弃复习计划，认为自己无论如何也考不好',
      '制定合理的复习计划，安排充足的休息时间，每天锻炼半小时，必要时向老师或同学寻求帮助',
      '使用手机游戏或视频分散注意力，暂时逃避压力感'
    ],
    feedbacks: [
      '<p>这种方法短期内可能感觉很努力，但实际上适得其反。长时间熬夜会影响认知功能和记忆力，缺乏休息和放松会增加压力和焦虑，最终降低学习效率。健康的学习需要合理的休息和劳逸结合。</p>',
      '<p>面对压力选择放弃是一种常见但不健康的应对方式。这会强化自我怀疑的负面循环，导致更多焦虑和挫折感。记住，面对挑战的第一步是相信自己有能力应对。</p>',
      '<p>这是一种平衡且健康的应对方法！通过制定可行的计划，你将大任务分解为小步骤，减轻压力感。适当的休息和运动有助于缓解压力，提高注意力和学习效率。寻求支持也表明了自我认知和解决问题的积极态度。这种方法不仅有助于考试准备，也培养了长期有效的压力管理能力。</p>',
      '<p>短暂的休息和娱乐是健康的，但如果成为逃避的主要方式，问题只会积累和恶化。这种方法可能暂时缓解焦虑，但无法解决根本问题，反而会增加临考前的压力和自责感。</p>'
    ]
  };
  
  // Render scenario
  renderScenario(scenarioSection, scenarioData);
  
  // Two-column layout for tools and chatbot
  const twoColumnSection = document.createElement('div');
  twoColumnSection.className = 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12';
  
  // Study tools column
  const toolsColumn = document.createElement('div');
  toolsColumn.className = 'bg-white rounded-lg shadow-md p-6 border border-gray-200';
  toolsColumn.innerHTML = `
    <h2 class="text-xl font-bold mb-4 text-accent">学习与时间管理工具</h2>
    
    <div class="space-y-6">
      <div>
        <h3 class="font-medium text-dark mb-2">SMART学习目标制定</h3>
        <div class="bg-gray-50 p-4 rounded-lg">
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="font-bold text-accent mr-2">S</span>
              <div>
                <span class="font-medium">具体 (Specific)</span>
                <p class="text-sm text-gray-600">目标应该明确具体，而非模糊。例如"每天复习化学30分钟"比"多复习化学"更有效。</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-accent mr-2">M</span>
              <div>
                <span class="font-medium">可衡量 (Measurable)</span>
                <p class="text-sm text-gray-600">目标应该能够被量化和评估。如"完成5道数学题"可以清楚地知道是否达成。</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-accent mr-2">A</span>
              <div>
                <span class="font-medium">可实现 (Achievable)</span>
                <p class="text-sm text-gray-600">目标需要切实可行，挑战性要适度。设定过高目标容易导致挫折和放弃。</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-accent mr-2">R</span>
              <div>
                <span class="font-medium">相关性 (Relevant)</span>
                <p class="text-sm text-gray-600">目标应与你的整体学习计划相关，对你有实际意义和价值。</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-accent mr-2">T</span>
              <div>
                <span class="font-medium">时限 (Time-bound)</span>
                <p class="text-sm text-gray-600">设定明确的完成时间，如"在周五前完成历史论文初稿"，增加行动的紧迫感。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 class="font-medium text-dark mb-2">时间管理技巧</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="w-8 h-8 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-clock text-accent"></i>
            </div>
            <div>
              <h4 class="font-medium">番茄工作法</h4>
              <p class="text-sm text-gray-600">专注学习25分钟，然后休息5分钟，完成4个周期后休息较长时间。有助于保持专注和防止拖延。</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-list-check text-accent"></i>
            </div>
            <div>
              <h4 class="font-medium">任务优先级</h4>
              <p class="text-sm text-gray-600">使用"重要且紧急"矩阵区分任务优先级，先完成重要且紧急的任务，避免被不重要的事情占用时间。</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-calendar text-accent"></i>
            </div>
            <div>
              <h4 class="font-medium">周计划表</h4>
              <p class="text-sm text-gray-600">每周日规划下周学习计划，结合课表、考试和作业截止日期，合理分配时间，确保各科均衡发展。</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="font-medium text-dark mb-2">高效学习方法</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>主动复述和提问，而非被动阅读</li>
          <li>分散练习比集中练习更有效</li>
          <li>教会他人是最好的学习方式</li>
          <li>使用思维导图连接知识点</li>
          <li>找出学科知识体系，建立知识框架</li>
          <li>定期复习，遵循艾宾浩斯遗忘曲线</li>
        </ul>
      </div>
    </div>
  `;
  
  // Chatbot column
  const chatbotColumn = document.createElement('div');
  renderChatbot(chatbotColumn, "学业压力助手");
  
  // Add columns to two-column section
  twoColumnSection.appendChild(toolsColumn);
  twoColumnSection.appendChild(chatbotColumn);
  
  // Stress relief section
  const stressReliefSection = document.createElement('section');
  stressReliefSection.className = 'mb-12 bg-gray-50 p-8 rounded-xl';
  stressReliefSection.innerHTML = `
    <h2 class="text-2xl font-bold mb-6">压力缓解小技巧</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <i class="fas fa-wind text-blue-500 text-xl"></i>
        </div>
        <h3 class="text-lg font-bold mb-2">呼吸练习</h3>
        <p class="text-gray-700">
          进行深呼吸练习可以有效降低压力水平，激活副交感神经系统。尝试4-7-8呼吸法：吸气4秒，屏息7秒，呼气8秒。每天练习5分钟。
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <i class="fas fa-person-running text-green-500 text-xl"></i>
        </div>
        <h3 class="text-lg font-bold mb-2">身体活动</h3>
        <p class="text-gray-700">
          运动可以释放内啡肽，改善情绪，增强专注力。不需要剧烈运动，每天30分钟的快走、跳绳或者跳舞都很有效，学习间隙的短暂活动也有帮助。
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
          <i class="fas fa-brain text-purple-500 text-xl"></i>
        </div>
        <h3 class="text-lg font-bold mb-2">正念练习</h3>
        <p class="text-gray-700">
          正念冥想有助于减少焦虑，提高注意力。尝试每天花5-10分钟，专注于当下体验，觉察自己的思绪但不做评判，让思维平静下来。
        </p>
      </div>
    </div>
  `;
  
  // Add all sections to content container
  contentContainer.appendChild(header);
  contentContainer.appendChild(topicsSection);
  contentContainer.appendChild(scenarioSection);
  contentContainer.appendChild(twoColumnSection);
  contentContainer.appendChild(stressReliefSection);
  
  // Add content to main container
  container.appendChild(contentContainer);
}
