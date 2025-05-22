// Footer component
export function renderFooter(container) {
  const footer = document.createElement('footer');
  footer.className = 'bg-dark text-white py-8';
  
  footer.innerHTML = `
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-bold mb-4">关于我们</h3>
          <p class="text-gray-300">青少年心理成长互动平台致力于为11-20岁青少年提供科学、权威、通俗易懂且富有趣味性的心理知识与实践工具。</p>
        </div>
        <div>
          <h3 class="font-bold mb-4">快速链接</h3>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#" class="hover:text-primary" data-footer-nav="home">首页</a></li>
            <li><a href="#" class="hover:text-primary" data-footer-nav="emotion-management">情绪管理</a></li>
            <li><a href="#" class="hover:text-primary" data-footer-nav="interpersonal-relationships">人际关系</a></li>
            <li><a href="#" class="hover:text-primary" data-footer-nav="academic-pressure">学业压力</a></li>
            <li><a href="#" class="hover:text-primary" data-footer-nav="self-awareness">自我认知</a></li>
            <li><a href="#" class="hover:text-primary" data-footer-nav="puberty-changes">青春期变化</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4">资源</h3>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#" class="hover:text-primary">专业资源</a></li>
            <li><a href="#" class="hover:text-primary">家长指南</a></li>
            <li><a href="#" class="hover:text-primary">教育工作者</a></li>
            <li><a href="#" class="hover:text-primary">隐私政策</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4">联系我们</h3>
          <div class="space-y-2 text-gray-300">
            <p><i class="fas fa-envelope mr-2"></i> contact@youthmentalhealth.com</p>
            <p><i class="fas fa-phone mr-2"></i> 400-123-4567</p>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-white hover:text-primary"><i class="fab fa-weixin text-xl"></i></a>
              <a href="#" class="text-white hover:text-primary"><i class="fab fa-weibo text-xl"></i></a>
              <a href="#" class="text-white hover:text-primary"><i class="fab fa-qq text-xl"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>© 2023 青少年心理成长互动平台 版权所有</p>
      </div>
    </div>
  `;
  
  container.appendChild(footer);
  
  // Add event listeners to footer navigation
  const footerNavItems = footer.querySelectorAll('[data-footer-nav]');
  footerNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const event = new CustomEvent('footer-navigate', {
        detail: { page: item.dataset.footerNav }
      });
      document.dispatchEvent(event);
    });
  });
  
  return footer;
}
