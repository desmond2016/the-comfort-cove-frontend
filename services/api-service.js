        // services/api-service.js
        // API service for Claude API integration (via backend)
        export async function callClaudeApi(message) {
          try {
            // 指向部署在 Render 上的后端服务 URL
            const backendUrl = 'https://the-comfort-cove-backend.onrender.com/api/ask-claude'; // <<--- 修改这里

            const response = await fetch(backendUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                message: message // 发送用户消息
              })
            });

            if (!response.ok) {
              let errorMessage = `API请求失败，状态码: ${response.status}`;
              try {
                const errorData = await response.json();
                errorMessage = errorData.error || errorData.detail || errorMessage;
                if (errorData.details) {
                    console.error("Backend Error Details:", errorData.details);
                }
              } catch (e) {
                // 无法解析 JSON 错误，使用状态文本或通用消息
                errorMessage = response.statusText || errorMessage;
              }
              throw new Error(errorMessage);
            }

            const data = await response.json();
            // 假设后端在 'response' 字段中返回 Claude 的回复
            return data.response;
          } catch (error) {
            console.error('调用后端API时出错:', error);
            throw new Error(error.message || '与AI助手通信时发生错误，请稍后再试。');
          }
        }
        