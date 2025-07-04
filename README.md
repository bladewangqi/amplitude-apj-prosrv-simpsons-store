# Amplitude APJ ProSrv Simpsons Store

A modern e-commerce website featuring Simpsons character toys with a complete shopping cart system, checkout process, and responsive design.

## 🌟 Features

- **Product Catalog**: Browse 8 different Simpsons character toys
- **Shopping Cart**: Add/remove items with persistent storage
- **Checkout System**: Complete order process with email confirmation
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Updates**: Cart badge updates automatically
- **Product Details**: Individual product pages with images and descriptions

## 📁 Website Structure

```
test-web/
├── index.html              # Main products listing page
├── product.html            # Individual product detail page
├── checkout.html           # Shopping cart and checkout page
├── products-data.js        # Centralized product data and cart functions
└── README.md              # This documentation file
```

### File Descriptions

- **`index.html`**: Homepage displaying all available Simpsons toys in a grid layout
- **`product.html`**: Dynamic product detail page that shows specific product information based on URL parameter (`?sku=BP063-0001`)
- **`checkout.html`**: Complete checkout experience with order summary, quantity controls, and order placement
- **`products-data.js`**: Contains all product data, shopping cart functionality, and shared JavaScript functions

## 🚀 Getting Started

### Prerequisites

- **VS Code** (recommended code editor)
- **Live Server Extension** for VS Code
- **Git** for version control

### 1. Install Live Server Extension

#### Via VS Code Extensions Panel (Recommended)

1. **Open VS Code**
2. **Open the Extensions view** by clicking the Extensions icon in the Activity Bar on the side of the window, or use the keyboard shortcut:
   - **Windows/Linux:** `Ctrl+Shift+X`
   - **Mac:** `Cmd+Shift+X`
3. **Search for "Live Server"** in the search box
4. **Look for the extension by Ritwick Dey** (it should be the first result with millions of downloads)
5. **Click the "Install" button**

### 2. Using Live Server

Once installed, you can use Live Server in several ways:

1. **Right-click on an HTML file** in the Explorer and select "Open with Live Server"
2. **Use the status bar** - click "Go Live" in the bottom status bar
3. **Command Palette** - search for "Live Server: Open with Live Server"

## 🛠️ Development Workflow

### Cloning This Repository

```bash
# Clone the repository
git clone https://github.com/bladewangqi/amplitude-apj-prosrv-simpsons-store.git

# Navigate to the project directory
cd amplitude-apj-prosrv-simpsons-store

# Open in VS Code
code .
```

### Making Changes

1. **Edit the code** in VS Code
2. **Use Live Server** to preview changes in real-time
3. **Test all functionality**: cart, checkout, navigation
4. **Commit your changes**:

## 📤 Creating Your Own Repository

### 1. Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click the **"+" icon** in the top right corner
3. Select **"New repository"**
4. Enter repository name (e.g., `my-simpsons-store`)
5. Add description: "E-commerce website featuring Simpsons toys"
6. Choose **Public** or **Private**
7. **Do NOT** initialize with README (since you already have one)
8. Click **"Create repository"**

### 2. Upload Your Code

```bash
# Remove existing remote (if cloned from another repo)
git remote remove origin

# Add your new repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename main branch (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### 3. For Future Updates

```bash
# After making changes
git add .
git commit -m "Your commit message"
git push origin main
```

## 🌐 Deploying to GitHub Pages

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** section in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose **"main"** branch and **"/ (root)"** folder
6. Click **"Save"**

### Access Your Live Website

After deployment (usually takes 1-5 minutes):
- Your website will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- GitHub will show you the URL in the Pages settings

### Custom Domain (Optional)

If you have a custom domain:
1. Add a `CNAME` file to your repository root
2. Enter your domain name in the file
3. Configure your domain's DNS settings to point to GitHub Pages

## 🛒 How to Use the Website

### For Customers

1. **Browse Products**: Visit the homepage to see all available toys
2. **View Details**: Click on any product image to see detailed information
3. **Add to Cart**: Click "Add to cart" to add items to your shopping cart
4. **Quick Purchase**: Click "Buy now" to immediately go to checkout
5. **Review Cart**: Click the cart icon (🛒) in the navigation to review your order
6. **Checkout**: Enter your email and click "Place Order" to complete the purchase

### For Developers

1. **Add New Products**: Edit the `PRODUCTS_DATA` array in `products-data.js`
2. **Modify Styling**: Update CSS in the `<style>` sections of HTML files
3. **Change Functionality**: Edit JavaScript functions in `products-data.js`
4. **Test Changes**: Use Live Server to preview updates in real-time

## 🎯 Product Data Structure

Each product in `products-data.js` follows this structure:

```javascript
{
    sku: 'BP063-0001',                    // Unique product identifier
    name: 'Product Name',                 // Display name
    price: 50,                           // Price in USD
    description: 'Product description',   // Short description
    image: 'https://...',                // Product image URL
    brand: 'Brand Name',                 // Product brand
    category: 'Toys & Games',            // Product category
    rating: 4.2,                         // Star rating (1-5)
    ratingCount: 5                       // Number of reviews
}
```

## 🛟 Troubleshooting

### Common Issues

1. **Page not loading**: Make sure Live Server is running
2. **Images not showing**: Check image URLs in `products-data.js`
3. **Cart not working**: Ensure JavaScript is enabled in browser
4. **GitHub Pages not updating**: Changes can take up to 10 minutes to reflect

### Browser Compatibility

- **Chrome**: Fully supported
- **Firefox**: Fully supported  
- **Safari**: Fully supported
- **Edge**: Fully supported
- **Internet Explorer**: Not supported

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Ensure all files are properly uploaded to your repository
4. Verify GitHub Pages is enabled in repository settings

---

**Happy coding! 🎉**
