alert(test)


const nav = document.querySelector('.nav');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
nav.before(scrollWatcher);

constnavObserver = new IntersectionObserver((entries) => {
    primaryHeader.classlist.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher)
