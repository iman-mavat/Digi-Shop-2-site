        // داده‌های محصولات
        const products = [
            {
                id: 1,
                title: 'گوشی موبایل سامسونگ مدل Galaxy A23',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Galaxy+A23',
                price: 8500000,
                discount: 15,
                category: 'mobile',
                colors: ['#000000', '#ffffff', '#1e88e5'],
                specialOffer: false
            },
            {
                id: 2,
                title: 'لپ‌تاپ اپل مدل MacBook Air M1',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=MacBook+Air',
                price: 45000000,
                discount: 10,
                category: 'laptop',
                colors: ['#f5f5f5', '#212121'],
                specialOffer: true
            },
            {
                id: 3,
                title: 'هدفون بی‌سیم سونی مدل WH-1000XM4',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Sony+WH-1000XM4',
                price: 12000000,
                discount: 20,
                category: 'digital',
                colors: ['#000000', '#bdbdbd'],
                specialOffer: true
            },
            {
                id: 4,
                title: 'تلویزیون هوشمند ال جی مدل OLED55C1',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=LG+OLED55C1',
                price: 55000000,
                discount: 12,
                category: 'home',
                colors: ['#000000'],
                specialOffer: false
            },
            {
                id: 5,
                title: 'کنسول بازی پلی‌استیشن 5',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=PS5',
                price: 25000000,
                discount: 5,
                category: 'digital',
                colors: ['#ffffff', '#000000'],
                specialOffer: true
            },
            {
                id: 6,
                title: 'هارد اکسترنال سیگیت مدل Expansion 1TB',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Seagate+1TB',
                price: 3500000,
                discount: 8,
                category: 'digital',
                colors: ['#000000', '#ffffff', '#e53935'],
                specialOffer: false
            },
            {
                id: 7,
                title: 'اسمارت واچ اپل مدل Series 7',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Apple+Watch+7',
                price: 18000000,
                discount: 15,
                category: 'digital',
                colors: ['#000000', '#e53935', '#1e88e5'],
                specialOffer: true
            },
            {
                id: 8,
                title: 'دوربین کانن مدل EOS R6',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Canon+EOS+R6',
                price: 75000000,
                discount: 7,
                category: 'digital',
                colors: ['#212121'],
                specialOffer: false
            },
            {
                id: 9,
                title: 'یخچال ساید بای ساید سامسونگ',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Samsung+Fridge',
                price: 35000000,
                discount: 10,
                category: 'home',
                colors: ['#ffffff', '#e0e0e0'],
                specialOffer: false
            },
            {
                id: 10,
                title: 'کتاب قدرت عادت اثر چارلز داهیگ',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Power+of+Habit',
                price: 800000,
                discount: 5,
                category: 'book',
                colors: ['#e53935', '#1e88e5'],
                specialOffer: false
            },
            {
                id: 11,
                title: 'کفش ورزشی نایک مدل Air Max',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Nike+Air+Max',
                price: 4500000,
                discount: 15,
                category: 'sport',
                colors: ['#000000', '#ffffff', '#e53935'],
                specialOffer: true
            },
            {
                id: 12,
                title: 'قهوه ترک دانه دار',
                image: 'https://via.placeholder.com/300/cccccc/333333?text=Turkish+Coffee',
                price: 250000,
                discount: 0,
                category: 'food',
                colors: ['#6d4c41'],
                specialOffer: false
            }
        ];
        
        // سبد خرید
        let cart = [];
        
        // کاربر
        let currentUser = null;
        
        // المنت‌های DOM
        const mainContent = document.getElementById('main-content');
        const cartBtn = document.getElementById('cart-btn');
        const cartCount = document.getElementById('cart-count');
        const cartSidebar = document.getElementById('cart-sidebar');
        const closeCartBtn = document.getElementById('close-cart');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        const homeBtn = document.getElementById('home-btn');
        const searchInput = document.getElementById('search-input');
        const loginBtn = document.getElementById('login-btn');
        const trackOrderBtn = document.getElementById('track-order-btn');
        const loginModal = document.getElementById('login-modal');
        const registerModal = document.getElementById('register-modal');
        const trackOrderModal = document.getElementById('track-order-modal');
        const closeLoginBtn = document.getElementById('close-login');
        const closeRegisterBtn = document.getElementById('close-register');
        const closeTrackOrderBtn = document.getElementById('close-track-order');
        const showRegisterBtn = document.getElementById('show-register');
        const showLoginBtn = document.getElementById('show-login');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const trackOrderForm = document.getElementById('track-order-form');
        const successMessage = document.getElementById('success-message');
        const successText = document.getElementById('success-text');
        const loadingOverlay = document.getElementById('loading-overlay');
        const categoryLinks = document.querySelectorAll('[data-category]');
        
        // نمایش صفحه اصلی
        function showHomePage() {
            mainContent.innerHTML = '';
            
            // محصولات ویژه
            const featuredSection = document.createElement('section');
            featuredSection.className = 'featured-products';
            featuredSection.innerHTML = `
                <h2 class="section-title">محصولات ویژه</h2>
                <div class="products-grid" id="products-container"></div>
            `;
            mainContent.appendChild(featuredSection);
            
            // پیشنهادهای شگفت‌انگیز
            const specialOffersSection = document.createElement('section');
            specialOffersSection.className = 'featured-products';
            specialOffersSection.innerHTML = `
                <h2 class="section-title">پیشنهادهای شگفت‌انگیز</h2>
                <div class="products-grid" id="special-offers-container"></div>
            `;
            mainContent.appendChild(specialOffersSection);
            
            displayProducts();
        }
        
        // نمایش صفحه دسته‌بندی
        function showCategoryPage(category) {
            const categoryName = getCategoryName(category);
            
            mainContent.innerHTML = `
                <div class="category-header">
                    <h1 class="category-title">${categoryName}</h1>
                    <div class="breadcrumb">
                        <a href="#" id="breadcrumb-home">خانه</a>
                        <span>/</span>
                        <span>${categoryName}</span>
                    </div>
                </div>
                <section class="featured-products">
                    <div class="products-grid" id="category-products-container"></div>
                </section>
            `;
            
            // نمایش محصولات دسته‌بندی
            const categoryProducts = products.filter(p => p.category === category);
            const container = document.getElementById('category-products-container');
            
            categoryProducts.forEach((product, index) => {
                const productElement = createProductElement(product, index);
                container.appendChild(productElement);
            });
            
            // رویداد کلیک برای breadcrumb
            document.getElementById('breadcrumb-home').addEventListener('click', (e) => {
                e.preventDefault();
                showHomePage();
            });
        }
        
        // نمایش صفحه جستجو
        function showSearchResults(query) {
            mainContent.innerHTML = `
                <div class="search-results-header">
                    <h2 class="section-title">نتایج جستجو برای: <span class="search-query">${query}</span></h2>
                </div>
                <section class="featured-products">
                    <div class="products-grid" id="search-results-container"></div>
                </section>
            `;
            
            // فیلتر کردن محصولات بر اساس جستجو
            const searchResults = products.filter(p => 
                p.title.toLowerCase().includes(query.toLowerCase())
            );
            
            const container = document.getElementById('search-results-container');
            
            if (searchResults.length === 0) {
                container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">محصولی یافت نشد</p>';
            } else {
                searchResults.forEach((product, index) => {
                    const productElement = createProductElement(product, index);
                    container.appendChild(productElement);
                });
            }
        }
        
        // نمایش محصولات
        function displayProducts() {
            const productsContainer = document.getElementById('products-container');
            const specialOffersContainer = document.getElementById('special-offers-container');
            
            productsContainer.innerHTML = '';
            specialOffersContainer.innerHTML = '';
            
            products.forEach((product, index) => {
                const productElement = createProductElement(product, index);
                
                if (product.specialOffer) {
                    specialOffersContainer.appendChild(productElement);
                } else {
                    productsContainer.appendChild(productElement);
                }
            });
        }
        
        // ایجاد المنت محصول
        function createProductElement(product, index) {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.style.setProperty('--order', index);
            
            const discountPrice = product.price * (100 - product.discount) / 100;
            
            // ایجاد گزینه‌های رنگ
            let colorOptions = '';
            if (product.colors && product.colors.length > 0) {
                colorOptions = '<div class="color-options">';
                product.colors.forEach(color => {
                    colorOptions += `<div class="color-option" style="background-color: ${color};" title="${color}"></div>`;
                });
                colorOptions += '</div>';
            }
            
            productElement.innerHTML = `
                <div class="product-image">
                    ${product.specialOffer ? '<span class="product-badge">ویژه</span>' : ''}
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    ${colorOptions}
                    <div class="product-price">
                        <span class="price">${discountPrice.toLocaleString()} تومان</span>
                        ${product.discount > 0 ? `<span class="discount">${product.discount}%</span>` : ''}
                    </div>
                    ${product.discount > 0 ? `<div class="original-price">${product.price.toLocaleString()} تومان</div>` : ''}
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i>افزودن به سبد خرید</button>
                </div>
            `;
            
            return productElement;
        }
        
        // دریافت نام فارسی دسته‌بندی
        function getCategoryName(category) {
            const categories = {
                'mobile': 'موبایل',
                'laptop': 'لپ‌تاپ',
                'digital': 'کالای دیجیتال',
                'home': 'لوازم خانگی',
                'clothing': 'پوشاک',
                'book': 'کتاب و لوازم تحریر',
                'sport': 'ورزش و سفر',
                'food': 'خوردنی و آشامیدنی'
            };
            
            return categories[category] || category;
        }
        
        // به‌روزرسانی سبد خرید
        function updateCart() {
            // به‌روزرسانی آیکون سبد خرید
            cartCount.textContent = cart.length;
            
            // به‌روزرسانی آیتم‌های سبد خرید
            cartItemsContainer.innerHTML = '';
            
            let total = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 1rem;">سبد خرید شما خالی است</p>';
            } else {
                cart.forEach(item => {
                    const product = products.find(p => p.id === item.id);
                    const discountPrice = product.price * (100 - product.discount) / 100;
                    total += discountPrice * item.quantity;
                    
                    const cartItemElement = document.createElement('div');
                    cartItemElement.className = 'cart-item';
                    cartItemElement.innerHTML = `
                        <div class="cart-item-image">
                            <img src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${product.title}</h4>
                            <div class="cart-item-price">${discountPrice.toLocaleString()} تومان</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn minus" data-id="${product.id}">-</button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn plus" data-id="${product.id}">+</button>
                            </div>
                            <button class="remove-item" data-id="${product.id}"><i class="fas fa-trash"></i>حذف</button>
                        </div>
                    `;
                    
                    cartItemsContainer.appendChild(cartItemElement);
                });
            }
            
            
            cartTotalElement.textContent = `${total.toLocaleString()} تومان`;
        }
        
        
        function addToCart(productId) {
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    quantity: 1
                });
            }
            
            updateCart();
       
            const product = products.find(p => p.id === productId);
            showSuccessMessage(`محصول ${product.title} به سبد خرید اضافه شد.`);
    
            cartBtn.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                cartBtn.classList.remove('animate__animated', 'animate__pulse');
            }, 1000);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showSuccessMessage('محصول از سبد خرید حذف شد.');
        }

        function updateCartItemQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }
        
      
        function showSuccessMessage(message) {
            successText.textContent = message;
            successMessage.classList.add('show');
            
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        }
 
        function showLoading() {
            loadingOverlay.classList.add('active');
        }

        function hideLoading() {
            loadingOverlay.classList.remove('active');
        }
  
        function login(username, password) {
            showLoading();
     
            setTimeout(() => {
                hideLoading();
                
                if (username && password) {
                    currentUser = { username };
                    showSuccessMessage('با موفقیت وارد شدید!');
                    closeModal(loginModal);
        
                    loginBtn.innerHTML = `<i class="fas fa-user"></i>${username}`;
                } else {
                    alert('نام کاربری و رمز عبور را وارد کنید');
                }
            }, 1500);
        }
        
 
        function register(username, email, password, confirmPassword) {
            showLoading();
            
   
            setTimeout(() => {
                hideLoading();
                
                if (password !== confirmPassword) {
                    alert('رمز عبور و تکرار آن مطابقت ندارند');
                    return;
                }
                
                if (username && email && password) {
                    currentUser = { username, email };
                    showSuccessMessage('ثبت‌نام شما با موفقیت انجام شد!');
                    closeModal(registerModal);
                    
                
                    loginBtn.innerHTML = `<i class="fas fa-user"></i>${username}`;
                } else {
                    alert('لطفا تمام فیلدها را پر کنید');
                }
            }, 1500);
        }
        
  
        function trackOrder(orderId, email) {
            showLoading();

            setTimeout(() => {
                hideLoading();
                closeModal(trackOrderModal);
                showSuccessMessage(`سفارش ${orderId} در حال پردازش است. نتیجه به ${email} ارسال شد.`);
            }, 1500);
        }
 
        function openModal(modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        
   
        function closeModal(modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('click', function(e) {

            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const btn = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                const productId = parseInt(btn.getAttribute('data-id'));
                addToCart(productId);
            }

            if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
                const btn = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
                const productId = parseInt(btn.getAttribute('data-id'));
                removeFromCart(productId);
            }
   
            if (e.target.classList.contains('quantity-btn')) {
                const btn = e.target;
                const productId = parseInt(btn.getAttribute('data-id'));
                const change = btn.classList.contains('plus') ? 1 : -1;
                updateCartItemQuantity(productId, change);
            }
            
        
            if (e.target === cartBtn || e.target.closest('#cart-btn')) {
                cartSidebar.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
            
      
            if (e.target === closeCartBtn || e.target.closest('#close-cart')) {
                cartSidebar.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
            
      
            if (e.target.hasAttribute('data-category') || e.target.closest('[data-category]')) {
                const link = e.target.hasAttribute('data-category') ? e.target : e.target.closest('[data-category]');
                const category = link.getAttribute('data-category');
                showCategoryPage(category);
            }

            if (e.target === homeBtn || e.target.closest('#home-btn')) {
                e.preventDefault();
                showHomePage();
            }
        });
        
   
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
               
                showSuccessMessage(`در حال حاضر به عنوان ${currentUser.username} وارد شده‌اید`);
            } else {
                openModal(loginModal);
            }
        });
        
        trackOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(trackOrderModal);
        });
        
        closeLoginBtn.addEventListener('click', () => closeModal(loginModal));
        closeRegisterBtn.addEventListener('click', () => closeModal(registerModal));
        closeTrackOrderBtn.addEventListener('click', () => closeModal(trackOrderModal));
        
        showRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(loginModal);
            openModal(registerModal);
        });
        
        showLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(registerModal);
            openModal(loginModal);
        });

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            login(username, password);
        });
        
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            register(username, email, password, confirmPassword);
        });
        
        trackOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const orderId = document.getElementById('order-id').value;
            const email = document.getElementById('tracking-email').value;
            trackOrder(orderId, email);
        });
        
 
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim()) {
                showSearchResults(searchInput.value.trim());
                searchInput.value = '';
            }
        });
        
   
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal(e.target);
            }
        });
        

        showHomePage();
        updateCart();