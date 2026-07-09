// Search & category filter
const searchInput = document.getElementById('search');
const catPills    = document.querySelectorAll('.cat-pill');
const cards       = document.querySelectorAll('.post-card');
const noResults   = document.getElementById('no-results');

let activeCategory = 'all';

function filterPosts() {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  let visible = 0;

  cards.forEach(card => {
    const title    = card.querySelector('h2')?.textContent.toLowerCase() || '';
    const excerpt  = card.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
    const tags     = card.dataset.tags?.toLowerCase() || '';
    const category = card.dataset.category || '';

    const matchesSearch   = !query || title.includes(query) || excerpt.includes(query) || tags.includes(query);
    const matchesCategory = activeCategory === 'all' || category === activeCategory;

    if (matchesSearch && matchesCategory) {
      card.classList.remove('hidden');
      visible++;
    } else {
      card.classList.add('hidden');
    }
  });

  if (noResults) noResults.classList.toggle('hidden', visible > 0);
}

if (searchInput) searchInput.addEventListener('input', filterPosts);

catPills.forEach(pill => {
  pill.addEventListener('click', () => {
    catPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeCategory = pill.dataset.cat;
    filterPosts();
  });
});

// Smooth card click navigation
cards.forEach(card => {
  const link = card.querySelector('a[data-post]');
  if (link) {
    card.addEventListener('click', e => {
      if (!e.target.closest('a')) link.click();
    });
  }
});

// Typing effect for hero (if element exists)
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  const messages = [
    'grep -r "solution" ./incidents/',
    'ansible-playbook fix-infra.yml',
    'kubectl get pods --all-namespaces',
    'fortigate> show firewall policy',
    'aws ec2 describe-instances --region ap-south-1',
  ];
  let mi = 0, ci = 0, deleting = false;

  function type() {
    const msg = messages[mi];
    if (!deleting) {
      typingEl.textContent = msg.slice(0, ci + 1);
      ci++;
      if (ci === msg.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      typingEl.textContent = msg.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; mi = (mi + 1) % messages.length; }
    }
    setTimeout(type, deleting ? 40 : 80);
  }
  type();
}
