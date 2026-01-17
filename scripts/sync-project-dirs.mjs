import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DATA_FILE_PATH = path.join(__dirname, '../src/lib/data.ts');
const PUBLIC_PROJECTS_DIR = path.join(__dirname, '../public/projects');

// Ensure public/projects exists
if (!fs.existsSync(PUBLIC_PROJECTS_DIR)) {
    fs.mkdirSync(PUBLIC_PROJECTS_DIR, { recursive: true });
    console.log(`Created root directory: ${PUBLIC_PROJECTS_DIR}`);
}

// Read data.ts
const dataContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

// Regex to find IDs (e.g., id: "LOG_2506")
const idRegex = /id:\s*["'](LOG_\d+)["']/g;
let match;
const projectIds = [];

while ((match = idRegex.exec(dataContent)) !== null) {
    projectIds.push(match[1]);
}

console.log(`Found ${projectIds.length} projects:`, projectIds);

// Create folders
projectIds.forEach(id => {
    const projectDir = path.join(PUBLIC_PROJECTS_DIR, id);
    if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir);
        console.log(`[NEW] Created directory: ${id}`);
    } else {
        // console.log(`[EXISTS] Directory already exists: ${id}`);
    }
});

console.log('Sync complete.');
