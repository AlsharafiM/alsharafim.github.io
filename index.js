
        // تغيير شفافية شريط التنقل عند التمرير
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('transparent');
            } else {
                navbar.classList.remove('transparent');
            }
        });

        // تبديل اللغة بين العربية والإنجليزية
        function toggleLanguage() {
            const arElements = document.getElementsByClassName('ar');
            const enElements = document.getElementsByClassName('en');
            for (let el of arElements) {
                el.style.display = el.style.display === 'none' ? '' : 'none';
            }
            for (let el of enElements) {
                el.style.display = el.style.display === 'none' ? '' : 'none';
            }
            document.documentElement.lang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
            document.documentElement.dir = document.documentElement.lang === 'ar' ? 'rtl' : 'ltr';
        }

        // إظهار زر العودة إلى الأعلى عند التمرير
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("topButton").style.display = "block";
            } else {
                document.getElementById("topButton").style.display = "none";
            }
        };

        // وظيفة زر العودة إلى الأعلى
        document.getElementById("topButton").onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

        // التحكم في أزرار التعويم
        document.getElementById("mainButton").onclick = function (e) {
            e.preventDefault();
            const floatButtons = document.querySelector('.float-buttons');
            const mainButtonIcon = document.getElementById('mainButtonIcon');
            floatButtons.classList.toggle('active');

            // تغيير الأيقونة بين + و -
            if (floatButtons.classList.contains('active')) {
                mainButtonIcon.classList.remove('fa-plus');
                mainButtonIcon.classList.add('fa-xmark');
            } else {
                mainButtonIcon.classList.remove('fa-xmark');
                mainButtonIcon.classList.add('fa-plus');
            }
        };

        // إعداد الصفحة عند التحميل
        document.addEventListener('DOMContentLoaded', (event) => {
            const mainButton = document.getElementById('mainButton');
            const otherButtons = document.querySelectorAll('.float-button:not(#mainButton)');
            const topButton = document.getElementById('topButton');

            mainButton.addEventListener('click', () => {
                otherButtons.forEach(button => {
                    button.style.display = button.style.display === 'flex' ? 'none' : 'flex';
                });
            });

            topButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    topButton.style.display = 'flex';
                } else {
                    topButton.style.display = 'none';
                }
            });
        });

        /* إضافة تأثيرات حركية عند التمرير */
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScrollAnimation() {
            var cards = document.querySelectorAll('.project-card');
            cards.forEach(function (card) {
                if (isElementInViewport(card)) {
                    card.classList.add('animate__fadeInUp');
                }
            });
        }

        window.addEventListener('scroll', handleScrollAnimation);
        window.addEventListener('load', handleScrollAnimation);

        // فتح تبويب معين
        function openTab(evt, tabName) {
            var i, tabContent, tabLinks;
            tabContent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = "none";
            }
            tabLinks = document.getElementsByClassName("tab");
            for (i = 0; i < tabLinks.length; i++) {
                tabLinks[i].className = tabLinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
         // فلترة المشاريع حسب الفئة
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-buttons .btn');
            const projectItems = document.querySelectorAll('.project-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filterValue = this.getAttribute('data-filter');
                    
                    // تغيير حالة الأزرار
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // فلترة المشاريع
                    projectItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
            
            // تأثيرات التحريك عند التمرير
            const animateOnScroll = function() {
                const projectCards = document.querySelectorAll('.project-card');
                
                projectCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animate__animated', 'animate__fadeInUp');
                        }, index * 100);
                    }
                });
            }
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // تشغيل التأثير عند تحميل الصفحة
        });

          // فلترة المشاريع حسب الفئة
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-buttons .btn');
            const projectItems = document.querySelectorAll('.project-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filterValue = this.getAttribute('data-filter');
                    
                    // تغيير حالة الأزرار
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // فلترة المشاريع
                    projectItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
            
            // تأثيرات التحريك عند التمرير
            const animateOnScroll = function() {
                const projectCards = document.querySelectorAll('.project-card');
                
                projectCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animate__animated', 'animate__fadeInUp');
                        }, index * 100);
                    }
                });
            }
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // تشغيل التأثير عند تحميل الصفحة
        });