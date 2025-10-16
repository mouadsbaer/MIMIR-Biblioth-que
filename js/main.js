const circle = document.querySelector('.circle');

        if (getComputedStyle(circle).position === 'static') {
            circle.style.position = 'absolute';
        }

        
        const originalPosition = {
            top: circle.style.top || getComputedStyle(circle).top,
            left: circle.style.left || getComputedStyle(circle).left
        };

        let S_sur_circle = false;
        let S_passe_circle = false; 

        
        circle.addEventListener('mouseenter', () => {
            S_sur_circle = true;
            
            
            if (!S_passe_circle) {
                circle.classList.add('shrunk');
                S_passe_circle= true;
            }
        });

        
        document.addEventListener('mousemove', (e) => {
            if (S_sur_circle) {
                
                const circleWidth = circle.offsetWidth;
                const circleHeight = circle.offsetHeight;
                
                
                circle.style.left = (e.pageX - circleWidth / 2) + 'px';
                circle.style.top = (e.pageY - circleHeight / 2) + 'px';
            }
        });