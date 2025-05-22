// Navigation component for section navigation
export function renderNavigation(container, currentSection, navigateCallback) {
  const sections = [
    { id: 'emotion-management', name: '情绪管理', icon: 'fa-face-smile' },
    { id: 'interpersonal-relationships', name: '人际关系', icon: 'fa-users' },
    { id: 'academic-pressure', name: '学业压力', icon: 'fa-book' },
    { id: 'self-awareness', name: '自我认知', icon: 'fa-lightbulb' },
    { id: 'puberty-changes', name: '青春期变化', icon: 'fa-chart-line' }
  ];
  
  const nav = document.createElement('nav');
  nav.className = 'bg-white shadow-sm py-3 mb-6 overflow-x-auto';

  let navContent = `
    <div class="container mx-auto">
      <ul class="flex space-x-4 min-w-max">
        <li>
          <a href="#" data-section="home" class="flex items-center px-4 py-2 rounded-full ${currentSection === 'home' ? 'bg-primary text-white' : 'text-dark hover:bg-gray-100'}">
            <i class="fas fa-home mr-2"></i>首页
          </a>
        </li>
  `;
  
  sections.forEach(section => {
    navContent += `
      <li>
        <a href="#" data-section="${section.id}" class="flex items-center px-4 py-2 rounded-full ${currentSection === section.id ? 'bg-primary text-white' : 'text-dark hover:bg-gray-100'}">
          <i class="fas ${section.icon} mr-2"></i>${section.name}
        </a>
      </li>
    `;
  });
  
  navContent += `
      </ul>
    </div>
  `;
  
  nav.innerHTML = navContent;
  container.appendChild(nav);
  
  // Add event listeners to navigation items
  const navItems = nav.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.dataset.section;
      navigateCallback(section);
    });
  });
  
  return nav;
}
