// components/chatbot.js
// Chatbot component for Claude API integration (via backend)
import { callClaudeApi } from '../services/api-service.js';

export function renderChatbot(container, title = "AI 心理小助手") {
  const chatbotContainer = document.createElement('div');
  chatbotContainer.className = 'bg-white rounded-lg shadow-md overflow-hidden border border-gray-200';

  chatbotContainer.innerHTML = `
    <div class="bg-primary text-white px-4 py-3">
      <h3 class="font-bold">${title}</h3>
    </div>

    <div id="chat-messages" class="p-4 h-80 overflow-y-auto flex flex-col space-y-3">
      <div class="chat-message bot-message">
        <p>你好！我是心理小助手，有什么关于心理方面的问题，都可以随时问我哦！</p>
      </div>
    </div>

    <div class="border-t p-4">
      <form id="chat-form" class="flex space-x-2">
        <input type="text" id="chat-input" placeholder="输入你的问题..."
          class="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        <button type="submit" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition flex items-center">
          <i class="fas fa-paper-plane mr-1"></i> 发送
        </button>
      </form>
      </div>
  `;

  container.appendChild(chatbotContainer);

  // 获取元素引用
  const chatForm = chatbotContainer.querySelector('#chat-form');
  const chatInput = chatbotContainer.querySelector('#chat-input');
  const chatMessages = chatbotContainer.querySelector('#chat-messages');

  // 处理表单提交
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const message = chatInput.value.trim();
    if (!message) return;

    // 将用户消息添加到聊天记录
    addMessageToChat('user', message);
    chatInput.value = '';

    // 显示加载指示器
    const loadingMessageDiv = addMessageToChat('bot', '<p><i class="fas fa-spinner fa-spin"></i> 思考中...</p>', true);

    try {
      // 调用后端 API (后端会调用 Claude)
      const response = await callClaudeApi(message); // 此处不再传递 API 密钥

      // 移除加载指示器
      if (loadingMessageDiv) chatMessages.removeChild(loadingMessageDiv);

      // 将机器人回复添加到聊天记录
      // 重要: 如果 'response' 可能包含来自 Claude 的 HTML/Markdown,
      // 需要确保它在后端被净化，或者在这里安全地渲染以防止 XSS。
      // 目前假设是纯文本或后端已净化的内容。
      addMessageToChat('bot', response);
    } catch (error) {
      // 移除加载指示器
      if (loadingMessageDiv) chatMessages.removeChild(loadingMessageDiv);

      // 添加错误消息
      addMessageToChat('bot', `抱歉，与AI助手通信时发生错误：${error.message || '无法连接到服务器'}`);
    }
  });

  // 将消息添加到聊天记录的函数
  function addMessageToChat(sender, messageText, isLoading = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender === 'user' ? 'user-message' : 'bot-message'}`;

    // 如果 messageText 可能是 HTML，在使用 innerHTML 之前需要进行净化。
    // 对于纯文本，创建文本节点更安全：
    // messageDiv.appendChild(document.createTextNode(messageText));
    // 但加载指示器使用了 HTML，所以我们暂时保留 innerHTML。
    // 确保你的后端净化了来自 Claude 的任何 HTML 或返回纯文本。
    messageDiv.innerHTML = messageText; 
    chatMessages.appendChild(messageDiv);

    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return isLoading ? messageDiv : null;
  }

  // API 密钥模态框函数 (showApiKeyModal) 和相关逻辑已移除。

  return chatbotContainer;
}
