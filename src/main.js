'use strict';
const helloDiv = document.querySelector('.hello-world');
      
      helloDiv.addEventListener('click', () => {
        helloDiv.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
        helloDiv.style.transform = 'rotate(5deg)';
        setTimeout(() => {
          helloDiv.style.transform = 'rotate(0deg)';
        }, 200);
      });
