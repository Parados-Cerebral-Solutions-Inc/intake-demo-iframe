(function () {
  // Create a button
  const button = document.createElement('button');
  button.style.position = 'fixed';
  button.style.bottom = '0px';
  button.style.right = '0px';
  button.style.margin = '16px';
  button.style.padding = '12px';
  button.style.width = 'auto';
  button.style.height = '64px';
  button.style.borderRadius = '16px';
  button.style.backgroundColor = '#0c89c3';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  button.style.zIndex = '2147483647'; // Maximum possible z-index
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';

  // Add hover effect for the button
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#005f89';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#0c89c3';
  });

  // Add icon to the button
  const title = document.createElement('h3');
  title.innerText = 'Start Free Now';
  title.style.fontSize = '28px';
  title.style.color = '#fff';
  title.style.width = '100%';
  // title.style.height = '100%';
  button.appendChild(title);

  // Add click event to the button
  button.addEventListener('click', () => {
    // Check if iframe container already exists
    if (document.getElementById('iframe-container')) {
      return;
    }

    // Create a container for the iframe
    const iframeContainer = document.createElement('div');
    iframeContainer.id = 'iframe-container';
    iframeContainer.style.position = 'fixed';
    iframeContainer.style.bottom = '90px';
    iframeContainer.style.margin = '16px';
    iframeContainer.style.right = '0px';
    iframeContainer.style.width = 'min(700px, calc(100vw - 40px))';
    iframeContainer.style.height = 'min(600px, calc(100vh - 40px))';
    iframeContainer.style.backgroundColor = '#fff';
    iframeContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    iframeContainer.style.borderRadius = '8px';
    iframeContainer.style.overflow = 'hidden';
    iframeContainer.style.zIndex = '2147483647'; // Maximum possible z-index

    // Add an iframe inside the container
    const iframe = document.createElement('iframe');
    iframe.src = 'https://performance.parados.app/external-intake-form';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    // Add a close button to the iframe container
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = '#808080'; // Grey color
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.padding = '4px 8px';
    closeButton.style.cursor = 'pointer';

    // Hover effect for close button
    closeButton.addEventListener('mouseover', () => {
      closeButton.style.backgroundColor = '#ff4d4f'; // Red hover
    });
    closeButton.addEventListener('mouseout', () => {
      closeButton.style.backgroundColor = '#808080'; // Grey
    });

    closeButton.addEventListener('click', () => {
      document.body.removeChild(iframeContainer);
    });

    iframeContainer.appendChild(closeButton);
    iframeContainer.appendChild(iframe);
    document.body.appendChild(iframeContainer);
  });

  document.body.appendChild(button);
})();
