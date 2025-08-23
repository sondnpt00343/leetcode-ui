# Leetcode UI Clone

## 📋 Mô tả dự án

Dự án Leetcode UI Clone được xây dựng bằng React + Vite, sử dụng JavaScript thuần và SCSS modules để tạo ra giao diện người dùng tương tự như trang web Leetcode.

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.x
- **Language**: JavaScript (ES6+)
- **Styling**: SCSS Modules
- **Routing**: React Router DOM
- **Linting**: ESLint với React rules

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Button/         # Component button với variants
│   ├── Calendar/       # Component lịch
│   ├── CategoryTabs/   # Tab categories với state management
│   ├── CourseCard/     # Card hiển thị course
│   ├── Header/         # Header navigation
│   ├── HeroSection/    # Section banner chính
│   ├── MainContent/    # Content area chính
│   ├── ProblemItem/    # Item hiển thị problem
│   ├── ProblemList/    # List các problems
│   ├── RightSidebar/   # Sidebar bên phải
│   ├── SearchBar/      # Thanh tìm kiếm
│   ├── Sidebar/        # Sidebar bên trái
│   ├── TopicTags/      # Tags chủ đề
│   ├── TrendingCompanies/ # Component trending companies
│   └── WeeklyPremium/  # Premium content component
├── pages/              # Các trang của ứng dụng
│   ├── Home.jsx        # Trang chủ
│   └── Home.module.scss
├── configs/            # Cấu hình ứng dụng
│   └── routes.js       # Config routes paths
├── styles/             # Global styles
│   └── globals.css     # CSS variables và base styles
├── assets/             # Static assets
│   └── ...            # Images, icons
├── App.jsx             # Root component với Router setup
└── main.jsx            # Entry point
```

## 🎨 Styling Conventions

### SCSS Modules

- Mỗi component có file `.module.scss` riêng
- Class names được scope local tự động
- Import styles: `import styles from "./Component.module.scss"`
- Sử dụng: `className={styles.className}`

### CSS Variables (Global)

Định nghĩa trong `src/styles/globals.css`:

- Colors: `--background`, `--foreground`, `--primary`, etc.
- Typography: font families, sizes, weights
- Spacing: margins, paddings
- Borders và shadows

### Responsive Design

- Mobile-first approach
- Breakpoints chuẩn: 768px (tablet), 1024px (desktop)
- Sử dụng media queries trong SCSS

## 🧩 Component Patterns

### Component Structure

```jsx
import styles from "./Component.module.scss"

// eslint-disable-next-line react/prop-types
const Component = ({ prop1, prop2 = "default" }) => {
  return (
    <div className={styles.component}>
      {/* Component content */}
    </div>
  )
}

export default Component
```

### Props Handling

- Sử dụng destructuring cho props
- Provide default values khi cần
- Disable prop-types validation với comment
- Sử dụng spread operator cho additional props

### State Management

- Local state với `useState` hook
- Naming convention: `[value, setValue]`
- Event handlers: `handleEventName`

## 🔄 Routing

### Routes Configuration

File: `src/configs/routes.js`

```javascript
export const ROUTES = {
  HOME: "/",
  PROBLEMS: "/problems",
  // ... other routes
}
```

### Router Setup

- Sử dụng `BrowserRouter` in App.jsx
- Import routes từ config file
- Lazy loading components khi cần

## 📋 Development Guidelines

### Code Style

- **File naming**: PascalCase cho components, camelCase cho utilities
- **Function naming**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS classes**: camelCase trong SCSS modules

### Import Order

1. React imports
2. Third-party libraries
3. Internal components
4. Configs/utilities
5. Styles (cuối cùng)

### Component Organization

- Một component mỗi folder
- `index.jsx` + `ComponentName.module.scss`
- Export default component

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## 🔧 Build & Deploy

### Build Process

- Vite build tool với SWC compiler
- SCSS compilation với Sass
- Asset optimization và bundling
- Source maps cho debugging

### Production Ready

- ✅ Build successful (no errors)
- ✅ Linting clean (no warnings/errors)
- ✅ SCSS modules working
- ✅ Routing functional
- ✅ Dev server stable

## 🎯 Project Status

### ✅ Completed

- [x] Vite setup và cleanup
- [x] SCSS compiler configuration
- [x] React Router DOM integration
- [x] Component structure established
- [x] Linting rules configured
- [x] Build process validated

### 🎨 Styling Features

- SCSS modules với local scoping
- CSS variables system
- Responsive design patterns
- Component-based styling

### 🧪 Quality Assurance

- ESLint configuration cho React
- Build validation
- Component prop validation disabled (JavaScript approach)
- Clean code structure

## 💡 Notes for AI Agents

### Key Patterns

1. **Không sử dụng TypeScript** - Dự án JavaScript thuần
2. **SCSS Modules** - Local scoping, import vào component
3. **React Router DOM** - Client-side routing với config
4. **ESLint** - React rules enabled, prop-types disabled
5. **Vite Build** - Fast development và production builds

### Common Tasks

- Thêm component mới: Tạo folder trong `src/components/`
- Thêm route: Update `src/configs/routes.js` và App.jsx
- Styling: Sử dụng SCSS modules và CSS variables
- Debugging: Check console, linting, và build errors

### Performance Considerations

- Components được optimize với default exports
- SCSS compilation efficient với Vite
- Bundle size optimized với tree shaking
- Asset loading optimized

---

**Dự án hoàn thiện và sẵn sàng để development!** 🎉
