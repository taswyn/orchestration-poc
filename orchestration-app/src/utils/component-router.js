export default async function importComponent(url) {
    const componentName = url.match(/\/([^\/]*)\.umd/)[1];
  
    if (!window[componentName]) {
        window[componentName] = await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.async = true;

            script.addEventListener('load', () => {
              resolve(window[componentName]);
            });
            script.addEventListener('error', () => {
              reject(new Error(`Failed to load ${url}`));
            });
            
            script.id = componentName;
            script.src = url;
            
            document.head.insertAdjacentElement(script);
          });
    }
  
    return window[componentName];
}