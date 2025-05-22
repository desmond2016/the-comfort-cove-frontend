// Header component - Exported for potential reuse
export function renderHeader(container) {
  const header = document.createElement('header');
  header.className = 'bg-white shadow-sm sticky top-0 z-50';
  
  header.innerHTML = `
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <svg class="w-10 h-10" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="#38b2ea" />
          <path d="M20 20 Q25 15, 30 20 T40 25" stroke="white" stroke-width="2" fill="none" />
          <path d="M15 30 Q20 35, 25 30 T35 25" stroke="white" stroke-width="2" fill="none" />
        </svg>
        <h1 class="text-xl font-bold text-primary">青少年心理成长互动平台</h1>
      </div>
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#" class="text-primary hover:text-primary/80 font-medium" id="home-nav">首页</a></li>
          <li><a href="#" class="text-dark hover:text-primary font-medium" id="about-nav">关于我们</a></li>
          <li><a href="#" class="text-dark hover:text-primary font-medium" id="resources-nav">资源中心</a></li>
          <li>
            <button id="login-nav" class="bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary/90 transition">
              登录/注册
            </button>
          </li>
        </ul>
      </nav>
    </div>
  `;
  
  container.appendChild(header);
  
  // Return references to navigation elements for event binding
  return {
    homeLink: header.querySelector('#home-nav'),
    aboutLink: header.querySelector('#about-nav'),
    resourcesLink: header.querySelector('#resources-nav'),
    loginButton: header.querySelector('#login-nav')
  };
}
