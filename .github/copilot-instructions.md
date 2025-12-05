# Copilot Instructions for Product Inventory Manager (Laravel 7 + React.js)

## Project Architecture
- **Backend:** Laravel 7, organized in standard structure (`app/Http/Controllers`, `routes/api.php`, `app/Models`, etc.).
- **Frontend:** React.js components (no Blade, Vite, or HTML) in `resources/js`. Built and bundled using Laravel Mix (`webpack.mix.js`).
- **API:** All product-related endpoints must be RESTful and registered in `routes/api.php`.

## Developer Workflows
- **Backend:**
  - Use `php artisan make:model Product -m` for model and migration.
  - Use `php artisan make:controller ProductController --api` for resource controller.
  - Run migrations with `php artisan migrate`.
  - Test API endpoints using Postman or frontend Axios calls.
- **Frontend:**
  - Place React components in `resources/js/components/`.
  - Use Axios (already included) for API requests to `/api/products`.
  - Build assets with `npm run dev` (development) or `npm run production` (production).
  - Entry point: `resources/js/app.js`.

## Conventions & Patterns
- **No Blade, Vite, or HTML** for frontend—use React only.
- **API endpoints:**
  - CRUD: `/api/products` (GET, POST, PUT/PATCH, DELETE)
  - Filtering: `/api/products?name=filterValue`
- **React Components:**
  - Example: `ProductList`, `ProductForm`, `ProductFilter` in `resources/js/components/`
  - Use Axios for all backend communication (see `resources/js/bootstrap.js`).
- **Data Flow:**
  - React components fetch/update data via Axios calls to Laravel API.
  - Laravel controllers handle validation, persistence, and return JSON responses.

## Integration Points
- **Laravel Mix** compiles JS/CSS to `public/`.
- **Axios** is preconfigured for CSRF and API requests.
- **API routes** are defined in `routes/api.php` and should use resource controllers for consistency.

## Key Files & Directories
- `app/Http/Controllers/ProductController.php` — main API logic
- `app/Models/Product.php` — Eloquent model
- `database/migrations/` — schema definitions
- `routes/api.php` — API route registration
- `resources/js/components/` — React components
- `resources/js/app.js` — React entry point
- `webpack.mix.js` — build configuration

## Example Patterns
- **API Route:**
  ```php
  Route::apiResource('products', ProductController::class);
  ```
- **Axios Usage in React:**
  ```js
  axios.get('/api/products').then(res => setProducts(res.data));
  ```

---

**For AI agents:**
- Always use React for UI, never Blade or HTML.
- Register new API endpoints in `routes/api.php`.
- Use resource controllers for CRUD logic.
- Use Axios for all frontend-backend communication.
- Keep build and run instructions up-to-date in this file.

---

If any conventions or workflows are unclear, please request clarification or examples from the user.
