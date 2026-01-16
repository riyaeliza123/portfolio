# Riya Eliza Shaju - Tech Portfolio Website

A modern, responsive portfolio website showcasing my experience as an Applied Data Scientist, built with HTML, CSS, and JavaScript, ready to deploy on fly.io.

## Features

- **Responsive Design**: Mobile-first approach, works on all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Complete Resume**: Full work experience, education, and skills
- **Project Showcase**: Featured projects with links and descriptions
- **Publications**: Research papers and published work
- **Contact Integration**: Direct links to email, LinkedIn, GitHub, and phone

## Local Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Customization

### Adding Profile Picture
Replace the placeholder image URL in `public/index.html`:
```html
<img src="YOUR_IMAGE_URL" alt="Riya Eliza Shaju">
```

### Adding Project Images
Replace placeholder URLs in the projects section:
```html
<img src="YOUR_PROJECT_IMAGE_URL" alt="Project Name">
```

### Updating Content
Edit sections in `public/index.html`:
- Experience
- Projects
- Skills
- Publications
- Education
- Contact information

## Deployment on Fly.io

### Prerequisites
- Fly.io account (create at https://fly.io)
- Fly CLI installed ([Installation guide](https://fly.io/docs/hands-on/install-flyctl/))

### Deployment Steps

1. **Login to Fly.io**
```bash
flyctl auth login
```

2. **Create/Launch the app**
```bash
flyctl launch
```

When prompted:
- Choose app name or press Enter to use `riya-portfolio`
- Select region (YYZ is Toronto, Canada - default)
- Choose "No" for PostgreSQL

3. **Deploy**
```bash
flyctl deploy
```

4. **View your live site**
```bash
flyctl open
```

### Environment Variables
The app uses:
- `PORT`: Automatically set by Fly.io (default: 3000)

### Updating After Deployment
Make changes and redeploy:
```bash
flyctl deploy
```

### Useful Fly Commands
- Check status: `flyctl status`
- View logs: `flyctl logs`
- Scale machines: `flyctl scale count 2`
- Monitor: `flyctl monitor`

## Directory Structure

```
portfolio/
├── public/
│   ├── index.html         # Main website
│   ├── styles.css         # Styling
│   └── script.js          # Animations
├── server.js              # Express server
├── package.json           # Dependencies
├── Dockerfile             # Container configuration
├── fly.toml              # Fly.io configuration
└── README.md             # This file
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Deployment**: Docker, Fly.io
- **Fonts**: Google Fonts (Poppins)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Smooth scroll animations
- Lazy loading with Intersection Observer
- Optimized CSS for fast loading
- Minimal JavaScript footprint

## License

© 2025 Riya Eliza Shaju. All rights reserved.