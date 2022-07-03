function main() {  
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const url = entry.target.children[0].getAttribute('data-src');
        entry.target.children[0].setAttribute('src', url);
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1 // 0 - 1
  };
  
  const observer = new IntersectionObserver(callback, options);

  const elements = document.querySelectorAll('.card');

  for(const i=0;i<elements.length;i++) {
    observer.observe(elements[i]);
  }
}

function loadJsScript({ url, location, onLoadMethod }) {
  try {
    const scriptTag = document.createElement('script');
    scriptTag.src = url;

    if (onLoadMethod) {
      scriptTag.onload = onLoadMethod;
      scriptTag.onreadystatechange = onLoadMethod;
    }

    location.appendChild(scriptTag);
  } catch (err) {
    console.log("Unable to add script tag!!");
  }
}

function init() {
  if(typeof window.IntersectionObserver != 'function') {
    // we need to add pollyfill
    loadJsScript({
      url: 'intersection-observer.js',
      location: document.body,
      onLoadMethod: () => {
        main();
      }
    })
  } else {
    // feature already supported
    main();
  }
}

// === initialize ===
window.onload = init